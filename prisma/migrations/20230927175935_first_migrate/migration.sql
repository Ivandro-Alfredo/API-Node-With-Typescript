-- CreateTable
CREATE TABLE "lista_de_compras" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_de_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lista_de_compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome_do_produto" TEXT NOT NULL,
    "quantidade_de_produto" INTEGER NOT NULL,
    "idListaDeCompra" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estoque" (
    "id" TEXT NOT NULL,

    CONSTRAINT "estoque_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "produtos_nome_do_produto_key" ON "produtos"("nome_do_produto");

-- CreateIndex
CREATE UNIQUE INDEX "produtos_idListaDeCompra_key" ON "produtos"("idListaDeCompra");

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_idListaDeCompra_fkey" FOREIGN KEY ("idListaDeCompra") REFERENCES "lista_de_compras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
