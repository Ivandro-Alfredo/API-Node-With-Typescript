import { Router } from "express";
import { listaDecomprasController } from "../controller";
import { validarDados } from "../controller/listaDeCompras/create";
import { validarQueryListaDeCompra } from "../controller/listaDeCompras/selectAll";
import { validarIdListaDeCompra } from "../controller/listaDeCompras/selectLista";
import { validarUpdateListaDeCompras } from "../controller/listaDeCompras/update";
import { deleteListaById } from "../controller/listaDeCompras/delete";

const router = Router();

router.get("/", (req, res) => {
    res.send("testando");
});

router.post(
    "/create",
    validarDados,
    listaDecomprasController.createListaDeCompras
);
router.get(
    "/listall",
    validarQueryListaDeCompra,
    listaDecomprasController.getTodasListasDeCompras
);
router.get(
    "/getlistadecompas/:id",
    validarIdListaDeCompra,
    listaDecomprasController.getListaDeComprasById
);

router.put(
    "/update/:id",
    validarUpdateListaDeCompras,
    listaDecomprasController.updateListaDeCompras
);
router.delete(
    "/delete/:id",
    deleteListaById,
    listaDecomprasController.deletById
);

router.delete("/deleteall", listaDecomprasController.deleteLiestaDeCompras);
export { router };
