// src/models/UsuarioModel.js
const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha_hash: { type: String, required: true },
  tipo: { type: String, enum: ['admin','professor','aluno'], required: true },
  referencia: { type: Schema.Types.ObjectId }, // optional: id of Aluno or Professor
}, { timestamps: true });

module.exports = model('Usuario', UsuarioSchema);
