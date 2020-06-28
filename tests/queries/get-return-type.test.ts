import testObject from '../../src/queries';
import { transformToAst } from '../helpers';

const testFunctionName = "getReturnType";

describe(testFunctionName, () => {
    test(`should return information no return type annotation`, () => {
        const functionAst = transformToAst(`function isVoid(){}`);

        const result = testObject[testFunctionName](functionAst);
        expect(result).toBe('no return ts annotiation');
    });

    test(`should return array`, () => {
        const functionAst = transformToAst(`function isArray():array{}`);

        const result = testObject[testFunctionName](functionAst);
        expect(result).toBe("array");
    });

    test(`should return string`, () => {
        const functionAst = transformToAst(`function isArray():string{}`);

        const result = testObject[testFunctionName](functionAst);
        expect(result).toBe("TSStringKeyword");
    });

    test(`should return null`, () => {
        const functionAst = transformToAst(`function isArray():null{}`);

        const result = testObject[testFunctionName](functionAst);
        expect(result).toBe("TSNullKeyword");
    });

    test(`should return array type`, () => {
        const functionAst = transformToAst(`function isArray():string[]{}`);

        const result = testObject[testFunctionName](functionAst);
        expect(result).toBe("TSArrayType");
    });

    test(`should return void type`, () => {
        const functionAst = transformToAst(`function isArray():void{}`);

        const result = testObject[testFunctionName](functionAst);
        expect(result).toBe("TSVoidKeyword");
    });

    test(`should return typescript type annotoation name`, () => {
        const functionAst = transformToAst(`function isArray():TestClass{}`);

        const result = testObject[testFunctionName](functionAst);
        expect(result).toBe("TestClass");
    });

    test(`should return typescript array type`, () => {
        const functionAst = transformToAst(`function isArray():TestClass[]{}`);

        const result = testObject[testFunctionName](functionAst);
        expect(result).toBe("TSArrayType");
    });
})