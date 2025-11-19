// src/controllers/MatriculaController.js
const Matricula = require("../models/MatriculaModel");

module.exports = {
  async index(req, res, next) {
    try {
      const docs = await Matricula.find().populate("aluno turma");
      return res.json(docs);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const doc = await Matricula.findById(req.params.id).populate(
        "aluno turma"
      );
      if (!doc) return res.status(404).json({ message: "Matricula not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const doc = await Matricula.create(req.body);
      return res.status(201).json(doc);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const doc = await Matricula.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!doc) return res.status(404).json({ message: "Matricula not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const doc = await Matricula.findByIdAndDelete(req.params.id);
      if (!doc) return res.status(404).json({ message: "Matricula not found" });
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
