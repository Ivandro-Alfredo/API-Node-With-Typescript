import create from "./create";
import _delete from "./delete";
import update from "./update";
import select from "./selectLista";

export const listaDecomprasController = {
    ...create,
    ..._delete,
    ...update,
    ...select,
};