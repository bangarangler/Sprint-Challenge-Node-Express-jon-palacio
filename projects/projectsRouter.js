const express = require("express");

const router = express.Router();
const projectDB = require("../data/helpers/projectModel.js");

router.get("/", (req, res) => {
  projectDB
    .get()
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => {
      res.status(500).json({ message: "Internatl Server Error" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectDB
    .get(id)
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }));
});

router.post("/", (req, res) => {
  projectDB
    .insert(req.body)
    .then(projData => {
      res.status(201).json(projData);
    })
    .catch(err => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const change = req.body;
  projectDB
    .update(id, change)
    .then(proj => {
      res.status(200).json({ message: "Project updated Success!" });
    })
    .catch(err => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.delete("/:id", (req, res) => {
  projectDB
    .remove(req.params.id)
    .then(proj => {
      res.status(200).json({ message: "Project Deleted!" });
    })
    .catch(err => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

module.exports = router;
