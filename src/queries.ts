import { visit, namedTypes as n } from 'ast-types';

namespace Queries {
  export const findAllFunctionDeclarations = (ast: n.ASTNode): n.FunctionDeclaration[] => {
    const nodes: n.FunctionDeclaration[] = [];

    visit(ast, {
      visitFunctionDeclaration(path) {
        const node = path.node;
        nodes.push(node);
        this.traverse(path);
      }
    });

    return nodes;
  };

  export const findAllFunctionExpression = (ast: n.ASTNode): n.FunctionExpression[] => {
    const nodes: n.FunctionExpression[] = [];

    visit(ast, {
      visitFunctionExpression(path) {
        const node = path.node;
        nodes.push(node);
        this.traverse(path);
      }
    });

    return nodes;
  };
  const BLACK_LIST = [
    'Op',
    'moment',
    'ParticipantVirtualGraduationEmailState',
    'EventType',
    'ParticipantVirtualGraduationState'
  ];

  export const findAllMemberExpression = (ast: n.FunctionDeclaration): n.MemberExpression[] => {
    const nodes: n.MemberExpression[] = [];

    visit(ast, {
      visitMemberExpression(path) {
        const node = path.node;
        // console.log(path.node)
        if (node.object.type !== 'CallExpression') {
          // @ts-ignore
          if (!BLACK_LIST.includes(node.object.name)) {
            // @ts-ignore
            const name = node.object.name || node.object.callee?.name;
            if (name) {
              nodes.push(node);
            }
            console.log(node);
          }
        }
        this.traverse(path);
      }
    });

    return nodes;
  };

  export const findAllExpressionStatement = (ast: n.ASTNode): n.ASTNode[] => {
    const nodes: n.ExpressionStatement[] = [];

    visit(ast, {
      visitExpressionStatement(path) {
        const node = path.node;
        nodes.push(node);
        this.traverse(path);
      }
    });

    return nodes;
  };
}

export default Queries;
