const yup = require("yup");

const store = yup.object({
  nome: yup.string().min(2).max(120).required(),
  descricao: yup.string().nullable(),
});

const update = store.partial();

module.exports = { store, update };
