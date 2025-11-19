// src/validators/MatriculaValidator.js
const yup = require('yup');

const store = yup.object({
  aluno: yup.string().required(),
  turma: yup.string().required(),
  data_matricula: yup.date().default(() => new Date()),
  status: yup.string().oneOf(['ativa','cancelada']).default('ativa'),
});

const update = store.partial();

module.exports = { store, update };
