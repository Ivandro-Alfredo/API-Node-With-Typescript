import create from "./create";
import _delete from "./delete";
import update from "./update";

export const listaDecomprasController = {
    ...create,
    ..._delete,
    ...update,
};
