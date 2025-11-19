// src/validators/UsuarioValidator.js
const yup = require("yup");

const store = yup.object({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().min(6).required(),
  tipo: yup.string().oneOf(["admin", "professor", "aluno"]).required(),
  referencia: yup.string().nullable(), // id para professor/aluno quando aplicavel
});

const update = yup.object({
  nome: yup.string().nullable(),
  email: yup.string().email().nullable(),
  senha: yup.string().min(6).nullable(),
  tipo: yup.string().oneOf(["admin", "professor", "aluno"]).nullable(),
  referencia: yup.string().nullable(),
});

module.exports = { store, update };
