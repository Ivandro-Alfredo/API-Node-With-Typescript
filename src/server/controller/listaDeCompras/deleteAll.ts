import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";


const deleteLiestaDeCompras =  async (resquest: Request, response: Response) => {
    const prisma = new PrismaClient();
    const result = await prisma.listaDeCompras.deleteMany({});
    if(result !== null) return response.status(StatusCodes.OK).json("Dados foram deletados");
    return response.status(StatusCodes.NOT_FOUND).json(" Sem dados para deletar")
};

export default { deleteLiestaDeCompras };