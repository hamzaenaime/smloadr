const express = require("express");
const downloadsFolder = require("downloads-folder");
const cors = require("cors");
const app = express();
const port = 8000;
const { exec } = require("child_process");

app.use(cors());

app.get("/:id", (req, res) => {
  const url = "https://www.deezer.com/en/track/" + req.params.id;
  exec(
    "node SMLoadr.js -u " +
      url +
      " -p " +
      downloadsFolder() +
      "/SMLoadrDonwloads -q MP3_128",
    () => console.log("downoaded")
  );
  console.log("downoaded");
});

app.listen(port, () => console.log("server start at port 8000"));
