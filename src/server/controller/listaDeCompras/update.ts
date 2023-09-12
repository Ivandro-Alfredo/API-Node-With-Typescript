import {Request,Response} from 'express';
import * as yup from "yup";
import { validacaoDosDados } from '../../shared/middlewares/validacao';
import { StatusCodes } from 'http-status-codes';

interface IUpdateById{
    id?:number;
}

interface IUpdateBody{
    nome?:string;
}

export const validarUpdateListaDeCompras = validacaoDosDados(getSchema =>({
    params: getSchema<IUpdateById>(yup.object().shape({
        id: yup.number().integer().moreThan(0)
    })),
    body: getSchema<IUpdateBody>(yup.object().shape({
        nome: yup.string().min(3)
    }))
}))

const updateListaDeCompras= (request:Request<IUpdateById,{},IUpdateBody>, response:Response) =>{
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send("update not built yet");
}

export default {updateListaDeCompras}