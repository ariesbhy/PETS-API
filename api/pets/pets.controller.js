const PetstSchema = require("../../models/PetSchema");
const PetSchema = require("../../models/PetSchema");
const Pet = require("../../models/PetSchema");
let pets = require("../../models/PetSchema");

const createPet = async (req, res, next) => {
  try {
    const id = pets[pets.lenght - 1].id + 1;
    const petInfo = req.body;
    console.log(req.file);
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newPet = await PetSchema.create(petInfo);
    return res.status(201).json({ data: newPet });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deletePet = async (req, res, next) => {
  try {
    const { petId } = req.params;
    const deletedPet = await PetSchema.findByIdAndDelete(petId);
    return res.status(200).json({ data: deletedPet });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updatePet = async (req, res, next) => {
  try {
    const { petId } = req.params;
    const updatedPet = await PetSchema.findByIdAndUpdate(petId, req.body);

    const updatedPet2 = await PetSchema.findById(petId);
    if (!updatePosts) {
      return res.status(404).json({ error: "Pet doesn't exists" });
    }
    return res.status(200).json({ data: updatedPet2 });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPets = async (req, res, next) => {
  try {
    const posts = await PetSchema.find();
    res.status(200).json({ data: pets });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getOnePet = async (req, res, next) => {
  try {
    const pet = await PetSchema.findById(req.params.id);
    if (!pet) return res.status(404).json({ error: "Pet not found" });
    return res.status(200).json(pet);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPet,
  deletePet,
  updatePet,
  getPets,
  getOnePet,
};
