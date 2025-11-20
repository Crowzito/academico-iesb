const yup = require("yup");

const store = yup.object({
  nome: yup.string().min(2).max(150).required(),
  descricao: yup.string().nullable(),
  carga_horaria: yup.number().min(0).required(),
  curso: yup.string().nullable(),
  professor_responsavel: yup.string().nullable(),
});

const update = store.partial();

module.exports = { store, update };
