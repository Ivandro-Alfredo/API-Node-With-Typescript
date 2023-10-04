import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validacaoDosDados } from "../../shared/middlewares/validacao";
import { PrismaClient } from "@prisma/client";

export interface IListaDeCompras {
    uuid?: string;  
    nome: string;
    createdAt?: Date;
}

export const validarDados = validacaoDosDados((getSchema) => ({
    body: getSchema<IListaDeCompras>(
        yup.object().shape({
            uuid: yup.string(),
            nome: yup.string().required().min(3),
            createdAt: yup.date()
        })
    ),
}));

const createListaDeCompras = async ( request: Request<{}, {}, IListaDeCompras>, response: Response) => {
    const {uuid, nome} = request.body;
    const prisma = new PrismaClient()
    await prisma.listaDeCompras.create({
        data:{
            nome: nome,
        }
    })
    response.status(StatusCodes.CREATED).send("Criado com sucesso");
};

export default { createListaDeCompras };
