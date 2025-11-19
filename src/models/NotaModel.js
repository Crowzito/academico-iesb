// src/models/NotaModel.js
const { Schema, model } = require("mongoose");

const NotaSchema = new Schema(
  {
    aluno: { type: Schema.Types.ObjectId, ref: "Aluno", required: true },
    avaliacao: {
      type: Schema.Types.ObjectId,
      ref: "Avaliacao",
      required: true,
    },
    valor: { type: Number, required: true },
    data_registro: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = model("Nota", NotaSchema);
