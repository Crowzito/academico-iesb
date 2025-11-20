const { Schema, model } = require("mongoose");

const AvaliacaoSchema = new Schema(
  {
    titulo: { type: String, required: true },
    descricao: { type: String },
    data: { type: Date, required: true },
    tipo: {
      type: String,
      enum: ["prova", "trabalho", "atividade"],
      required: true,
    },
    turma: { type: Schema.Types.ObjectId, ref: "Turma", required: true },
  },
  { timestamps: true }
);

module.exports = model("Avaliacao", AvaliacaoSchema);
