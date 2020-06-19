import fs from 'fs';
import Generators from './generators';
import Queries from './queries';
import Transformers from './transformers';
import {
    namedTypes as n,
} from "ast-types";

interface CommandOptions {
    input?: string;
    output?:string;
    debug?:boolean;
}

namespace Commands {
    export type COMMANDS = "listFunctions" | "help";
    export function commandHandler(args: string[]) {
        const commandName = args[2] as Commands.COMMANDS || "help";
        if (!Commands[commandName]) {
            throw new Error("No command given");
        }

        const options = argumentsToObjectOptions(args.slice(3));

        Commands[commandName](options);

    }

    function argumentsToObjectOptions( args: any[] ):Partial<CommandOptions>{
        return args.reduce((accu, el)=>{
            if(el.includes("=")){
                const splitted = el.split("=");
                accu[splitted[0].replace(/-/g,'')] = splitted[1];
                return accu;
            }else{
                accu[el] = true;
                return accu
            }
        },{});
    }

    export function listFunctions(options:CommandOptions) {
        const fileContent =  fs.readFileSync( options.input );
        const ast = Generators.generateAst(fileContent.toString());

        const queryResult = Queries.findAllFunctionDeclarations(ast);

        const transformed = Transformers.genEmptyFunctionName(queryResult as n.FunctionDeclaration[]);

        const builded = Generators.buildFile(transformed);

        const result = Generators.printAst( builded );

        if(!options.output){
            console.log(result)
            return;
        }

        fs.writeFileSync( options.output, result.code );
    }

    export function generateTests(options:CommandOptions) {
        const fileContent =  fs.readFileSync( options.input );
        const ast = Generators.generateAst(fileContent.toString());

        if(options.debug){
            // @ts-ignore
          console.log(ast.program.body[0].body.body[0].declarations[0].init.callee);
        }

        const queryResult = Queries.findAllFunctionDeclarations(ast);

        const transformed = Transformers.runJestTransformer(queryResult);

        const builded = Generators.buildFile(transformed);

        const result = Generators.printAst( builded );

        if(!options.output){
            console.log(result)
            return;
        }

        fs.writeFileSync( options.output, result.code );
    }

    export function help() {
        console.log("Print all commands");
    }
}

export default Commands;