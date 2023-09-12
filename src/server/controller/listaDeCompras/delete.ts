import { Request, Response } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validacaoDosDados } from "../../shared/middlewares/validacao";

interface deleteAll{

}

interface IDeleteById{
    id?: number;
}

const deleteLiestaDeCompras = (resquest: Request, Response: Response) => {};

export const deleteListaById = validacaoDosDados(getSchema => ({
    params: getSchema<IDeleteById>(yup.object().shape({
        id: yup.number().integer().moreThan(0)
    }))
}))
const deletById = (resquest: Request<IDeleteById>, response: Response) => {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send("update not built yet");
};

export default { deleteLiestaDeCompras, deletById };
