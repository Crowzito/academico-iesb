const { Schema, model } = require("mongoose");

const MatriculaSchema = new Schema(
  {
    aluno: { type: Schema.Types.ObjectId, ref: "Aluno", required: true },
    turma: { type: Schema.Types.ObjectId, ref: "Turma", required: true },
    data_matricula: { type: Date, default: Date.now },
    status: { type: String, enum: ["ativa", "cancelada"], default: "ativa" },
  },
  { timestamps: true }
);

module.exports = model("Matricula", MatriculaSchema);
