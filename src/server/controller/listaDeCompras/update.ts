import {Request,Response} from 'express';
import * as yup from "yup";
import { validacaoDosDados } from '../../shared/middlewares/validacao';
import { StatusCodes } from 'http-status-codes';
import { PrismaClient , Prisma} from '@prisma/client';

interface IUpdateById{
    id?:string;
}

interface IUpdateBody{
    nome?:string;
}

export const validarUpdateListaDeCompras = validacaoDosDados(getSchema =>({
    params: getSchema<IUpdateById>(yup.object().shape({
        id: yup.string()
    })),
    body: getSchema<IUpdateBody>(yup.object().shape({
        nome: yup.string().min(3)
    }))
}))

const updateListaDeCompras= async (request:Request<IUpdateById,{},IUpdateBody>, response:Response) =>{
    const prisma = new PrismaClient();
    try {
        const result = await prisma.listaDeCompras.update({
            where:{
                id:request.params.id,
            }, 
            data:{
                nome:request.body.nome
            }
        })
        if(result!==null) return response.status(StatusCodes.OK).send("Lista de compra foi atualizada."); 
        //return response.status(StatusCodes.NOT_MODIFIED).send("Nenhum resultado encontrado.");
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return response.status(StatusCodes.NOT_FOUND).send('Registro não encontrado.');
          } else {
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Ocorreu um erro ao excluir o registro.');
          }
        } finally {
          prisma.$disconnect();
        }
    
} 

export default {updateListaDeCompras}
