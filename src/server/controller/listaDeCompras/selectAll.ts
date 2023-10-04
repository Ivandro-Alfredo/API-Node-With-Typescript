import { Express, Response,Request, RequestParamHandler} from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validacaoDosDados } from "../../shared/middlewares/validacao";
import { PrismaClient } from "@prisma/client";

interface IGetTodasListas{
    page?: number;
    limite?: number;
    filter?: string;
}

export const validarQueryListaDeCompra  = validacaoDosDados(getSchema =>({
    query:getSchema<IGetTodasListas>(yup.object().shape({
        page: yup.number().moreThan(0),
        limite: yup.number().moreThan(0),
        filter:yup.string(),
    })),
}))

const getTodasListasDeCompras = async (req: Request<{},{},{},IGetTodasListas>, res: Response)=>{
    const prisma = new PrismaClient();
    const result = await prisma.listaDeCompras.findMany({});
    if(result!== null) res.status(StatusCodes.OK).send(result);
    return res.status(StatusCodes.NO_CONTENT).json("Nenhum resultado encontrado.");
}

export default {getTodasListasDeCompras}