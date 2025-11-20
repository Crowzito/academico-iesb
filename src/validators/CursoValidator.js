const yup = require("yup");

const store = yup.object({
  nome: yup.string().min(3).max(150).required(),
  descricao: yup.string().nullable(),
  carga_horaria: yup.number().min(0).required(),
  departamento: yup.string().nullable(),
});

const update = store.partial();

module.exports = { store, update };
