import express from "express";
import 'dotenv/config'
import './shared/services/translationYup';
import { router } from "./routers/router";
import { rotasDeProdutos } from "./routers/rotasDeProdutos";

const server = express();
server.use(express.json());
server.use('/listaDeCompras',router);
server.use('/produtos',rotasDeProdutos);

export { server };
