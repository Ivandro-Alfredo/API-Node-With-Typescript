import create from "./create";
import _delete from "./delete";
import update from "./update";
import select from "./selectLista";
import deleteAll from "./deleteAll";
import selectAll from "./selectAll";

export const listaDecomprasController = {
    ...create,
    ..._delete,
    ...update,
    ...select,
    ...deleteAll,
    ...selectAll
};