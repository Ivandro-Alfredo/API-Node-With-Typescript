import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validacaoDosDados } from "../../shared/middlewares/validacao";

export interface IListaDeCompras {
    uuid: string;  
    nome: string;
}

export const validarDados = validacaoDosDados((getSchema) => ({
    body: getSchema<IListaDeCompras>(
        yup.object().shape({
            uuid: yup.string().required(),
            nome: yup.string().required().min(3),
        })
    ),
}));

const createListaDeCompras = async ( request: Request<{}, {}, IListaDeCompras>, response: Response) => {
    const {uuid, nome} = request.body;
    
    response.status(StatusCodes.CREATED).send(request.body);
};

export default { createListaDeCompras };
