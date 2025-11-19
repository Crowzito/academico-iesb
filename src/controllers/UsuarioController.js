// src/controllers/UsuarioController.js
const Usuario = require("../models/UsuarioModel");
const bcrypt = require("bcryptjs");

module.exports = {
  async index(req, res, next) {
    try {
      const docs = await Usuario.find().select("-senha_hash");
      return res.json(docs);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const doc = await Usuario.findById(req.params.id).select("-senha_hash");
      if (!doc) return res.status(404).json({ message: "Usuario not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const { senha, ...rest } = req.body;
      const senha_hash = await bcrypt.hash(senha, 10);
      const usuario = await Usuario.create({ ...rest, senha_hash });
      const retorno = usuario.toObject();
      delete retorno.senha_hash;
      return res.status(201).json(retorno);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const updates = { ...req.body };
      if (updates.senha) {
        updates.senha_hash = await bcrypt.hash(updates.senha, 10);
        delete updates.senha;
      }
      const doc = await Usuario.findByIdAndUpdate(req.params.id, updates, {
        new: true,
      }).select("-senha_hash");
      if (!doc) return res.status(404).json({ message: "Usuario not found" });
      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const doc = await Usuario.findByIdAndDelete(req.params.id);
      if (!doc) return res.status(404).json({ message: "Usuario not found" });
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
