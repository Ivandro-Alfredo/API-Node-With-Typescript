-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_idListaDeCompra_fkey";

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_idListaDeCompra_fkey" FOREIGN KEY ("idListaDeCompra") REFERENCES "lista_de_compras"("id") ON DELETE CASCADE ON UPDATE CASCADE;
