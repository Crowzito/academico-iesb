const yup = require("yup");

const store = yup.object({
  ano: yup.number().integer().required(),
  semestre: yup.number().integer().oneOf([1, 2]).required(),
  horario: yup.string().nullable(),
  sala: yup.string().nullable(),
  disciplina: yup.string().required(),
  professor: yup.string().nullable(),
});

const update = store.partial();

module.exports = { store, update };
