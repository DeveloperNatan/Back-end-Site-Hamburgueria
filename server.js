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

app.post("/api/produtosbebidas", async (req, res) => {
  console.log(req.body); // Adicione esta linha para verificar o corpo da requisição
  const { nome, descricao, preco, categoria } = req.body;

  try {
    const produto = await prisma.produtobebidas.create({
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

app.post("/api/produtoscombos", async (req, res) => {
  console.log(req.body); // Adicione esta linha para verificar o corpo da requisição
  const { nome, descricao, preco, categoria } = req.body;

  try {
    const produto = await prisma.produtoscombos.create({
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

app.post("/api/produtosporcoes", async (req, res) => {
  console.log(req.body); // Adicione esta linha para verificar o corpo da requisição
  const { nome, descricao, preco, categoria } = req.body;

  try {
    const produto = await prisma.produtoporcoes.create({
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

// app.get("/api/produtosporcoes", async (req, res) => {
//   const produtos = await prisma.produtoporcoes.findMany();
//   res.json(produtos);
// });

// app.get("/api/produtoscombos", async (req, res) => {
//   const produtos = await prisma.produtoscombos.findMany();
//   res.json(produtos);
// });

app.get("/api/produtosbebidas", async (req, res) => {
  const produtos = await prisma.produtobebidas.findMany();
  res.json(produtos);
});

// Iniciar o servidor
const PORT = process.env.PORT || 2727;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
