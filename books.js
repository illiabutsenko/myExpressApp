const express = require("express");
const { PrismaClient } = require("@prisma/client");
const Joi = require("joi");

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

const books = [
  {name: "book1"},
  {name: "book2"},
  {name: "book3"},
  {name: "book4"},
  {name: "book5"},
  {name: "book6"},
  {name: "book7"},
  {name: "book8"},
  {name: "book9"},
  {name: "book10"},
  {name: "book11"},
];

app.get("/api/books", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  try {
    const booksSlice = books.slice(startIndex, endIndex);
    res.json(booksSlice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});