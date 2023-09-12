import { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes";
import {Schema, ValidationError} from "yup";

type tiposDeParams = 'params' | 'header' | 'body'|'query';
type getSchemaSpecifico = <T>(getUnicoSchema:Schema<T>) => Schema<T>;
type schemas  = Record<tiposDeParams,Schema<any> >;
type getTodosSchemas = (getSchema:getSchemaSpecifico) => Partial<schemas>;
type tipoDeValidacao = (todosSchemas:getTodosSchemas) => RequestHandler;

export const validacaoDosDados:tipoDeValidacao = (todosSchemas) => async (request, response, next) =>{
    const listSchemaErrors: Record< string, Record<string, string > > = {};
    const schema = todosSchemas(schema=>schema);
    Object.entries(schema).forEach(([key,value])=>{
        try {
            value.validateSync(request[ key as tiposDeParams], {abortEarly: false,});
        } catch (err) {
            const errorMsg = err as ValidationError;
            const totalDeErroDeValidacao: Record< string, string> = {};
            errorMsg.inner.forEach(err =>{
                if(!err.path) return ;
                totalDeErroDeValidacao[err.path] = err.message
            }); 
            listSchemaErrors [key] = totalDeErroDeValidacao;
        }
    })
    
    if(Object.entries(listSchemaErrors).length===0)return next();
    return response
            .status(StatusCodes.BAD_REQUEST)
            .json({ error: listSchemaErrors });
}