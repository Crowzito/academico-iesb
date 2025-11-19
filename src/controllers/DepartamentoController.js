// src/controllers/DepartamentoController.js
const Departamento = require("../models/DepartamentoModel");

module.exports = {
  async index(req, res, next) {
    try {
      const docs = await Departamento.find();
      return res.json(docs);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const doc = await Departamento.findById(req.params.id);
      if (!doc)
        return res.status(404).json({ message: "Departamento not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const doc = await Departamento.create(req.body);
      return res.status(201).json(doc);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const doc = await Departamento.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!doc)
        return res.status(404).json({ message: "Departamento not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const doc = await Departamento.findByIdAndDelete(req.params.id);
      if (!doc)
        return res.status(404).json({ message: "Departamento not found" });
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
