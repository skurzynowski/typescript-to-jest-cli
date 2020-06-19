import * as recast from 'recast';
import { PrintResultType } from 'recast/lib/printer';
import {
    visit,
    namedTypes as n,
    builders 
} from "ast-types";
import * as kinds from 'ast-types/gen/kinds'
import { eachField } from "ast-types";



namespace Generators {
    export function generateAst(fileContent: string):n.File {
        return recast.parse(fileContent, {
            parser: require("recast/parsers/typescript")
        });
    }

    export function printAst(ast:n.ASTNode, options?:any):PrintResultType {
        return recast.print(ast, options);
    }

    export const buildFile = (nodes: n.ASTNode[]): n.File => {

        // @ts-ignore
        return builders.file( builders.program(nodes) )
    }

    function copyNode(node: recast.types.ASTNode) {
        const copy: Partial<recast.types.ASTNode> = {};
        eachField(node, function (name, value) {
            // Note that undefined fields will be visited too, according to
            // the rules associated with node.type, and default field values
            // will be substituted if appropriate.
            copy[name as keyof recast.types.ASTNode] = value;
        })
        return copy;
    }

}

export default Generators;