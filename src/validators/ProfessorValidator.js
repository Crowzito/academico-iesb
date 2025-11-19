const yup = require("yup");

const store = yup.object({
  nome: yup.string().min(3).max(120).required(),
  email: yup.string().email().required(),
  telefone: yup.string().nullable(),
  titulacao: yup.string().nullable(),
  departamento: yup.string().nullable(),
});

const update = store.partial();

module.exports = { store, update };
