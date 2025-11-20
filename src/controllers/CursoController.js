const Curso = require("../models/CursoModel");

module.exports = {
  async index(req, res, next) {
    try {
      const docs = await Curso.find().populate("departamento");
      return res.json(docs);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const doc = await Curso.findById(req.params.id).populate("departamento");
      if (!doc) return res.status(404).json({ message: "Curso not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const doc = await Curso.create(req.body);
      return res.status(201).json(doc);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const doc = await Curso.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!doc) return res.status(404).json({ message: "Curso not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const doc = await Curso.findByIdAndDelete(req.params.id);
      if (!doc) return res.status(404).json({ message: "Curso not found" });
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
