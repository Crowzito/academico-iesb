// src/controllers/NotaController.js
const Nota = require("../models/NotaModel");

module.exports = {
  async index(req, res, next) {
    try {
      const docs = await Nota.find().populate("aluno avaliacao");
      return res.json(docs);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const doc = await Nota.findById(req.params.id).populate(
        "aluno avaliacao"
      );
      if (!doc) return res.status(404).json({ message: "Nota not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const doc = await Nota.create(req.body);
      return res.status(201).json(doc);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const doc = await Nota.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!doc) return res.status(404).json({ message: "Nota not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const doc = await Nota.findByIdAndDelete(req.params.id);
      if (!doc) return res.status(404).json({ message: "Nota not found" });
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
