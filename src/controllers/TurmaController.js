const Turma = require("../models/TurmaModel");

module.exports = {
  async index(req, res, next) {
    try {
      const docs = await Turma.find().populate("disciplina professor");
      return res.json(docs);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const doc = await Turma.findById(req.params.id).populate(
        "disciplina professor"
      );
      if (!doc) return res.status(404).json({ message: "Turma not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const doc = await Turma.create(req.body);
      return res.status(201).json(doc);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const doc = await Turma.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!doc) return res.status(404).json({ message: "Turma not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const doc = await Turma.findByIdAndDelete(req.params.id);
      if (!doc) return res.status(404).json({ message: "Turma not found" });
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
