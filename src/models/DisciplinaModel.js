// src/models/DisciplinaModel.js
const { Schema, model } = require('mongoose');

const DisciplinaSchema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  carga_horaria: { type: Number, required: true },
  curso: { type: Schema.Types.ObjectId, ref: 'Curso' },
  professor_responsavel: { type: Schema.Types.ObjectId, ref: 'Professor' },
}, { timestamps: true });

module.exports = model('Disciplina', DisciplinaSchema);
