const express = require("express");
const router = express.Router();
const cards = require("../data/cards.json");

router.get("/", (req, res) => {
  res.json(cards);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find(c => c.id === id);

  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.json(card);
});

module.exports = router;