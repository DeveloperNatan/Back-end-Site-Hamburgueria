const pool = require("./db");
const express = require("express");
const router = express.Router();

// api para os produtos
router.get("/produtos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM produtos");
    res.json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar produtos!", err);
    res.status(500).send("Erro ao buscar os produtos!");
  }
});

router.get("/produtosbebidas", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM produtosbebidas");
    res.json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar produtos!", err);
    res.status(500).send("Erro ao buscar os produtos!");
  }
});

router.get("/produtoscombos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM produtoscombos");
    res.json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar produtos!", err);
    res.status(500).send("Erro ao buscar os produtos!");
  }
});

router.get("/produtosporcoes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM produtosporcoes");
    res.json(result.rows);
  } catch (err) {
    console.error("Erro ao consultar os produtos", err);
    res.status(500).send("Erro ao buscar os produtos");
  }
});

module.exports = router;
