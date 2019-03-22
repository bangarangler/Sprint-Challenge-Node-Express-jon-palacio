// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
const express = require("express");
const server = express();
const cors = require("cors");

const projectDB = require("./data/helpers/projectModel.js");
const actionDB = require("./data/helpers/actionModel.js");
const projectsRouter = require("./projects/projectsRouter.js");
const actionsRouter = require("./actions/actionsRouter.js");

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).send(`<h1>Welcome to the API</h1>`);
});

server.use("/projects", projectsRouter);
server.use("/actions", actionsRouter);

server.listen(4000, () => {
  console.log("running on port 4000");
});
