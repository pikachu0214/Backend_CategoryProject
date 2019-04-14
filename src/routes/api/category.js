const db = require("../../config/knex");
const express = require("express");
const router = express.Router();

//enables body-parser
router.use(express.json());

//Read category request localhost:3000/api/category
router.get("/", function(req, res) {
  db.select()
    .from("category")
    .then(data => {
      res.status(200);
      res.send(data);
    });
});

//Read category request localhost:3000/api/category
router.get("/:id", function(req, res) {
  const id = req.params.id;
  db.select()
    .from("category")
    .where("id", id)
    .then(data => {
      res.status(200);
      res.send(data);
    });
});

//Add new category request localhost:3000/api/category'
router.post("/", function(req, res) {
  if (req.body.title && req.body.budgetLimit && req.body.isActive) {
    db.insert(req.body)
      .returning("*")
      .into("category")
      .then(data => {
        res.status(200);
        res.send(data);
      });
  }
});

router.delete("/:id", function(req, res) {
  db.delete()
    .from("category")
    .where("id", req.params.id)
    .then(data => {
      res.sendStatus(200);
      res.send(data);
    });
});

router.put("/:id", function(req, res) {
  const id = req.params.id;
  const title = req.body.title;
  const budgetLimit = req.body.budgetLimit;
  const isActive = req.body.isActive;
  db.update({ title, budgetLimit, isActive })
    .from("category")
    .where("id", "=", id)
    .then(data => {
      res.sendStatus(200);
      res.send(data);
    });
});

module.exports = router;
