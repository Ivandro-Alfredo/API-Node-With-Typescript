import { Router } from "express";
import { listaDecomprasController } from "../controller";
import { validarDados } from "../controller/listaDeCompras/create";
import { validarQueryListaDeCompra } from "../controller/listaDeCompras/selectLista";
import { validarIdListaDeCompra } from "../controller/listaDeCompras/selectLista";
import { validarUpdateListaDeCompras } from "../controller/listaDeCompras/update";
import { deleteListaById } from "../controller/listaDeCompras/delete";

const router = Router();

router.get("/", (req, res) => {
    res.send("testando");
});

router.post(
    "/listadecompras/create",
    validarDados,
    listaDecomprasController.createListaDeCompras
);
router.get(
    "/listadecompras/listartudo",
    validarQueryListaDeCompra,
    listaDecomprasController.getTodasListasDeCompras
);
router.get(
    "/listadecompras/:id",
    validarIdListaDeCompra,
    listaDecomprasController.getListaDeComprasById
);

router.put(
    "/listadecompras/:id",
    validarUpdateListaDeCompras,
    listaDecomprasController.updateListaDeCompras
);
router.delete(
    "/listadecompras/:id",
    deleteListaById,
    listaDecomprasController.deletById
);

export { router };
