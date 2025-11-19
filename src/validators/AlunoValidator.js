// src/validators/AlunoValidator.js
const yup = require("yup");

const enderecoSchema = yup
  .object({
    rua: yup.string().required(),
    numero: yup.string().nullable(),
    cidade: yup.string().required(),
    estado: yup.string().required(),
    cep: yup.string().required(),
  })
  .noUnknown();

const store = yup.object({
  nome: yup.string().min(3).max(120).required(),
  email: yup.string().email().required(),
  cpf: yup.string().min(11).max(14).required(),
  telefone: yup.string().nullable(),
  data_nascimento: yup.date().required(),
  endereco: enderecoSchema.required(),
  curso: yup.string().nullable(),
  status: yup.string().oneOf(["ativo", "trancado", "formado"]).default("ativo"),
});

const update = store.noUnknown().partial();

module.exports = { store, update };
