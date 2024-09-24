const express = require("express");
const {
  getPets,
  createPet,
  deletePet,
  updatePet,
  getOnePet,
} = require("./Pets.controllers");
const upload = require("../../middleware/multer");
const petrouter = express.Router();

petrouter.get("/pets", getPets);
petrouter.post("/pet", upload.single("image"), createPet);
petRouter.get("/pet:id", getOnePet);
petrouter.delete("/pet/:petId", deletePet);

petrouter.put("/pet/:petId", updatePet);

module.exports = petrouter;
