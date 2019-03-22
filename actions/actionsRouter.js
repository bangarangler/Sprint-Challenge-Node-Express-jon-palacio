const express = require("express");

const router = express.Router();
const actionDB = require("../data/helpers/actionModel.js");

router.get("/", (req, res) => {
  actionDB
    .get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionDB
    .get(id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }));
});

router.post("/", (req, res) => {
  actionDB
    .insert(req.body)
    .then(actionData => {
      res.status(201).json(actionData);
    })
    .catch(err => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const change = req.body;
  actionDB
    .update(id, change)
    .then(action => {
      res.status(200).json({ message: "Action updated success!" });
    })
    .catch(err => {
      res.status(500).json({ message: "Internal error updating action" });
    });
});

router.delete("/:id", (req, res) => {
  actionDB
    .remove(req.params.id)
    .then(action => {
      res.status(200).json({ message: "Action Deleted!" });
    })
    .catch(err => {
      res.status(500).json({ message: "Internal server error" });
    });
});

module.exports = router;
