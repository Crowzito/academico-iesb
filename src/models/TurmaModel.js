// src/models/TurmaModel.js
const { Schema, model } = require("mongoose");

const TurmaSchema = new Schema(
  {
    ano: { type: Number, required: true },
    semestre: { type: Number, required: true },
    horario: { type: String },
    sala: { type: String },
    disciplina: {
      type: Schema.Types.ObjectId,
      ref: "Disciplina",
      required: true,
    },
    professor: { type: Schema.Types.ObjectId, ref: "Professor" },
  },
  { timestamps: true }
);

module.exports = model("Turma", TurmaSchema);
