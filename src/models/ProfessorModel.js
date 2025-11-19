// src/models/ProfessorModel.js
const { Schema, model } = require("mongoose");

const ProfessorSchema = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: false },
    telefone: { type: String },
    titulacao: { type: String },
    departamento: { type: Schema.Types.ObjectId, ref: "Departamento" },
  },
  { timestamps: true }
);

module.exports = model("Professor", ProfessorSchema);
