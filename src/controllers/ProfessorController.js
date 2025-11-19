const Professor = require("../models/ProfessorModel");

module.exports = {
  async index(req, res, next) {
    try {
      const data = await Professor.find().populate("departamento");
      return res.json(data);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const doc = await Professor.findById(req.params.id).populate(
        "departamento"
      );
      if (!doc) return res.status(404).json({ message: "Professor not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const doc = await Professor.create(req.body);
      return res.status(201).json(doc);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const doc = await Professor.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!doc) return res.status(404).json({ message: "Professor not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const doc = await Professor.findByIdAndDelete(req.params.id);
      if (!doc) return res.status(404).json({ message: "Professor not found" });
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};

