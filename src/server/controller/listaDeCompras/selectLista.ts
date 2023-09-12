import { Express, Response,Request, RequestParamHandler} from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validacaoDosDados } from "../../shared/middlewares/validacao";

interface IGetTodasListas{
    page?: number;
    limite?: number;
    filter?: string;
}

interface IGetById{
    id?:number;
}

export const validarQueryListaDeCompra  = validacaoDosDados(getSchema =>({
    query:getSchema<IGetTodasListas>(yup.object().shape({
        page: yup.number().moreThan(0),
        limite: yup.number().moreThan(0),
        filter:yup.string(),
    })),
}))

const getTodasListasDeCompras = async (req: Request<{},{},{},IGetTodasListas>, res: Response)=>{
    console.log(req.query)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("we got the query, but not built yet");
}

export const validarIdListaDeCompra = validacaoDosDados(getSchema =>({
    params: getSchema<IGetById>(yup.object().shape({
        id:yup.number().integer().required().moreThan(0)
    }))
}))

const getListaDeComprasById = async (req:Request<IGetById>, res:Response)=>{
    console.log(req.params.id);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("we got the id, but not built yet");
}

export default {getTodasListasDeCompras,getListaDeComprasById}