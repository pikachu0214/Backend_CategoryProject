const express = require("express");
const category = require("./src/routes/api");
const app = express();
const port = 4000;

app.use("/api", category);

app.listen(port, console.log(`app running on ${port}`));
