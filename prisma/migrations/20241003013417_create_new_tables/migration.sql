-- CreateTable
CREATE TABLE "Produtobebidas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Produtobebidas_pkey" PRIMARY KEY ("id")
);
