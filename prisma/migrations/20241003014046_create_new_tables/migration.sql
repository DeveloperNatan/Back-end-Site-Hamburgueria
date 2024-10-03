-- CreateTable
CREATE TABLE "Produtoscombos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Produtoscombos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produtoporcoes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Produtoporcoes_pkey" PRIMARY KEY ("id")
);
