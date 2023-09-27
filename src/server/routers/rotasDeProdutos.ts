import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const rotasDeProdutos = Router();

rotasDeProdutos.get('/',(req,resp)=>{
    resp.status(StatusCodes.OK).send('ROTA PADRAO PARA PRODUTOS....')
})

export {rotasDeProdutos}