const { Schema, model } = require("mongoose");

const EnderecoSchema = new Schema(
  {
    rua: String,
    numero: String,
    cidade: String,
    estado: String,
    cep: String,
  },
  { _id: false }
);

const AlunoSchema = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    cpf: { type: String, required: true },
    telefone: { type: String },
    data_nascimento: { type: Date },
    endereco: { type: EnderecoSchema },
    curso: { type: Schema.Types.ObjectId, ref: "Curso" },
    status: {
      type: String,
      enum: ["ativo", "trancado", "formado"],
      default: "ativo",
    },
  },
  { timestamps: true }
);

module.exports = model("Aluno", AlunoSchema);
