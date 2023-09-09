import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { listaDecomprasController } from "../controller";
import { validarDados } from "../controller/listaDeCompras/create";

const router = Router();

router.get("/", (req, res) => {
    res.send("testando");
});

router.post("/listadecompras/create",validarDados,listaDecomprasController.createListaDeCompras);

export { router };
