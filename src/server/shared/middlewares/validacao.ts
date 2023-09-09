import { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes";
// import { IListaDeCompras } from './../../controller/listaDeCompras/create';
import {Schema, ValidationError} from "yup";

type tiposDeParams = 'body'|'query'| 'params' | 'header';
type schemas  = Record<tiposDeParams,Schema<any>>;
type tipoDeValidacao = (todosSchemas:Partial<schemas>) => RequestHandler;

export const validacaoDosDados:tipoDeValidacao = (todosSchemas) => async (request, response, next) =>{
    Object.entries(todosSchemas).forEach(([params,schema])=>{
        try {
            schema.validateSync(request[ params as tiposDeParams], {abortEarly: false,});
            return next();
        } catch (err) {
            const errorMsg = err as ValidationError;
            const totalDeErroDeValidacao: Record< string, string> = {};
            errorMsg.inner.forEach(err =>{
                if(!err.path) return ;
                totalDeErroDeValidacao[err.path] = err.message
            }); 
            return response
                .status(StatusCodes.BAD_REQUEST)
                .json({ error: totalDeErroDeValidacao });
        }
    })
}