import { namedTypes as n, builders } from 'ast-types';
import Queries from './queries';

namespace Transformer {
  export function runJestTransformer(nodes: n.FunctionDeclaration[]): n.ASTNode[] {
    // Participant.findAll(...);
    return [
      generateDescribeWrapper(
        nodes.map((node) => {
          const memberExpressions = Queries.findAllMemberExpression(node);
          //line of code minimum
          return generateDescribeWrapper([
            //creates spy
            ...memberExpressions.map((mE) => generateSpyOnMock(mE)),
            //creates test case to check if was called
            ...memberExpressions.map((mE) => generateTestCase(node.id.name, mE))
          ]);
        })
      )
    ];
  }

  /*
       This is main describe wrapper for file
    */
  export function generateDescribeWrapper(body: (n.ExpressionStatement | n.VariableDeclaration)[]) {
    return builders.expressionStatement(
      //describe("test", () => {
      //
      //} )
      builders.callExpression(builders.identifier('describe'), [
        builders.stringLiteral(`test ${'test function'} logic`),
        builders.arrowFunctionExpression([], builders.blockStatement(body))
      ])
    );
  }

  /*
       This is main describe wrapper for file
    */
  export function generateTestCase(testFunctionName: string, body: n.MemberExpression): n.ExpressionStatement {
    //@ts-ignore
    const spyName = `${body.property.name}Spy`;

    return builders.expressionStatement(
      //describe("test", () => {
      //
      //} )
      builders.callExpression(builders.identifier('test'), [
        builders.stringLiteral(`${testFunctionName} should call ${spyName}`),
        builders.arrowFunctionExpression.from({
          async: true,
          body: builders.blockStatement.from({
            body: [callFunction(testFunctionName, 'VirtualGraduationEmailSchedulerService'), expectToBeCalled(spyName)]
          }),
          params: []
        })
      ])
    );
  }

  export function expectToBeCalled(spyName: string): n.ExpressionStatement {
    return builders.expressionStatement(
      builders.memberExpression.from({
        object: builders.callExpression.from({
          callee: builders.identifier('expect'),
          arguments: [builders.identifier(spyName)]
        }),
        property: builders.callExpression.from({
          callee: builders.identifier('toBeCalled'),
          arguments: []
        })
      })
    );
  }

  export function callFunction(functionName: string, functionNamespace: string): n.ExpressionStatement {
    return builders.expressionStatement(
      builders.memberExpression.from({
        object: builders.identifier(functionNamespace),
        property: builders.callExpression.from({
          callee: builders.identifier(functionName),
          arguments: []
        })
      })
    );
  }

  /*
        Participant.findAll() -> let findOneSpy = jest.spyOn(Participants, "findOne");
    */
  export function generateSpyOnMock(node: n.MemberExpression): n.VariableDeclaration {
    //@ts-ignore
    const name = node.object.name || node.object.callee.name;
    console.log(name);
    if (!name) {
      console.log(node);
      return;
    }
    return builders.variableDeclaration('let', [
      builders.variableDeclarator(
        //@ts-ignore
        builders.identifier(`${node.property.name}Spy`),
        // jest.spyOn()
        builders.callExpression(builders.memberExpression(builders.identifier('jest'), builders.identifier('spyOn')), [
          //Object to mock
          builders.identifier(name),
          //Method to mock
          //@ts-ignore
          builders.stringLiteral(node.property.name)
        ])
      )
    ]);
  }

  export function genEmptyFunctionName(nodes: n.FunctionDeclaration[]): n.ASTNode[] {
    return nodes.map((el) =>
      builders.functionDeclaration(builders.identifier(el.id.name), [], builders.blockStatement([]))
    );
  }
}

export default Transformer;
