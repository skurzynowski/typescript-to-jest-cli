import * as recast from 'recast';
import { get } from 'lodash';

const getAstElement = (search: string) => {
    return (fileContent: string) => {
        return get(recast.parse(fileContent, {
            parser: require('recast/parsers/typescript')
        }), search);
    }
}

export const transformToAst = getAstElement('program.body[0]');