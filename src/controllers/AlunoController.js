const Aluno = require("../models/AlunoModel");

module.exports = {
  async index(req, res, next) {
    try {
      const alunos = await Aluno.find().populate("curso");
      return res.json(alunos);
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.findById(id).populate("curso");
      if (!aluno) return res.status(404).json({ message: "Aluno not found" });
      return res.json(aluno);
    } catch (err) {
      return next(err);
    }
  },

  async store(req, res, next) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.status(201).json(aluno);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.findByIdAndUpdate(id, req.body, { new: true });
      if (!aluno) return res.status(404).json({ message: "Aluno not found" });
      return res.json(aluno);
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.findByIdAndDelete(id);
      if (!aluno) return res.status(404).json({ message: "Aluno not found" });
      return res.status(204).send();
    } catch (err) {
      return next(err);
    }
  },
};
