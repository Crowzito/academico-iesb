// src/validators/AvaliacaoValidator.js
const yup = require('yup');

const store = yup.object({
  titulo: yup.string().required(),
  descricao: yup.string().nullable(),
  data: yup.date().required(),
  tipo: yup.string().oneOf(['prova','trabalho','atividade']).required(),
  turma: yup.string().required(),
});

const update = store.partial();

module.exports = { store, update };
