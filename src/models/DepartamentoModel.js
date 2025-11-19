// src/models/DepartamentoModel.js
const { Schema, model } = require('mongoose');

const DepartamentoSchema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
}, { timestamps: true });

module.exports = model('Departamento', DepartamentoSchema);
