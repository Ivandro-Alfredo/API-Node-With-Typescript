import { Express, Response,Request, RequestParamHandler} from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validacaoDosDados } from "../../shared/middlewares/validacao";
import { PrismaClient } from "@prisma/client";

interface IGetById{
    id?:string;
}

export const validarIdListaDeCompra = validacaoDosDados(getSchema =>({
    params: getSchema<IGetById>(yup.object().shape({
        id:yup.string().required()
    }))
}))

const getListaDeComprasById = async (req:Request<IGetById>, res:Response)=>{
    const prisma = new PrismaClient()
    const result = await prisma.listaDeCompras.findUnique({
        where:{
            id:req.params.id,
        }, select:{
            nome:true,
            data_de_criacao:true
        }
    })
    console.log(result);

    if(result !== null) return res.status(StatusCodes.OK).send({result});
    return res.status(StatusCodes.NOT_FOUND).json("Nenhum resultado encontrado.");;
    
}

export default {getListaDeComprasById}