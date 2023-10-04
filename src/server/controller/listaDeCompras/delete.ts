import { Request, Response } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validacaoDosDados } from "../../shared/middlewares/validacao";
import { PrismaClient } from "@prisma/client";

interface IDeleteById{
    id?: string;
}

export const deleteListaById = validacaoDosDados(getSchema => ({
    params: getSchema<IDeleteById>(yup.object().shape({
        id: yup.string()
    }))
}))

const deletById = async (request: Request<IDeleteById>, response: Response) => {
    const id = request.params.id;
    const prisma = new PrismaClient()
    const result = await prisma.listaDeCompras.delete({
        where:{
            id: id,
        }
    })
    if(result!==null) return response.status(StatusCodes.OK).send("A Lista foi apagada.");
    return response.status(StatusCodes.NOT_FOUND).send("Nenhum resultado encontrado")
};

export default { deletById };
