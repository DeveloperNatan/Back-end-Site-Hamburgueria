const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rota para criar um produto
app.post("/api/produtos", async (req, res) => {
  console.log(req.body); // Adicione esta linha para verificar o corpo da requisição
  const { nome, descricao, preco, categoria } = req.body;

  try {
    const produto = await prisma.produto.create({
      data: {
        nome,
        descricao,
        preco,
        categoria,
      },
    });
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar produto" });
  }
});

// Rota para listar produtos
app.get("/api/produtos", async (req, res) => {
  const produtos = await prisma.produto.findMany();
  res.json(produtos);
});

// Iniciar o servidor
const PORT = process.env.PORT || 2727;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
