// src/controllers/DisciplinaController.js
const Disciplina = require("../models/DisciplinaModel");

module.exports = {
  async index(req, res, next) {
    try {
      const docs = await Disciplina.find().populate(
        "curso professor_responsavel"
      );
      return res.json(docs);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const doc = await Disciplina.findById(req.params.id).populate(
        "curso professor_responsavel"
      );
      if (!doc)
        return res.status(404).json({ message: "Disciplina not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const doc = await Disciplina.create(req.body);
      return res.status(201).json(doc);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const doc = await Disciplina.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!doc)
        return res.status(404).json({ message: "Disciplina not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const doc = await Disciplina.findByIdAndDelete(req.params.id);
      if (!doc)
        return res.status(404).json({ message: "Disciplina not found" });
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
