// src/routes.js
const express = require("express");
const router = express.Router();

const validate = require("./middlewares/validate");
const IDValidator = require("./validators/IDValidator");

const AlunoController = require("./controllers/AlunoController");
const ProfessorController = require("./controllers/ProfessorController");
const CursoController = require("./controllers/CursoController");
const DepartamentoController = require("./controllers/DepartamentoController");
const DisciplinaController = require("./controllers/DisciplinaController");
const TurmaController = require("./controllers/TurmaController");
const MatriculaController = require("./controllers/MatriculaController");
const AvaliacaoController = require("./controllers/AvaliacaoController");
const NotaController = require("./controllers/NotaController");
const UsuarioController = require("./controllers/UsuarioController");

const AlunoValidator = require("./validators/AlunoValidator");
const ProfessorValidator = require("./validators/ProfessorValidator");
const CursoValidator = require("./validators/CursoValidator");
const DepartamentoValidator = require("./validators/DepartamentoValidator");
const DisciplinaValidator = require("./validators/DisciplinaValidator");
const TurmaValidator = require("./validators/TurmaValidator");
const MatriculaValidator = require("./validators/MatriculaValidator");
const AvaliacaoValidator = require("./validators/AvaliacaoValidator");
const NotaValidator = require("./validators/NotaValidator");
const UsuarioValidator = require("./validators/UsuarioValidator");

/*
  For each resource: 
    GET /resource
    GET /resource/:id
    POST /resource
    PUT /resource/:id
    DELETE /resource/:id
*/

// Alunos
router.get("/alunos", AlunoController.index);
router.get("/alunos/:id", IDValidator, AlunoController.show);
router.post("/alunos", validate(AlunoValidator.store), AlunoController.store);
router.put(
  "/alunos/:id",
  IDValidator,
  validate(AlunoValidator.update),
  AlunoController.update
);
router.delete("/alunos/:id", IDValidator, AlunoController.destroy);

// Professores
router.get("/professores", ProfessorController.index);
router.get("/professores/:id", IDValidator, ProfessorController.show);
router.post(
  "/professores",
  validate(ProfessorValidator.store),
  ProfessorController.store
);
router.put(
  "/professores/:id",
  IDValidator,
  validate(ProfessorValidator.update),
  ProfessorController.update
);
router.delete("/professores/:id", IDValidator, ProfessorController.destroy);

// Cursos
router.get("/cursos", CursoController.index);
router.get("/cursos/:id", IDValidator, CursoController.show);
router.post("/cursos", validate(CursoValidator.store), CursoController.store);
router.put(
  "/cursos/:id",
  IDValidator,
  validate(CursoValidator.update),
  CursoController.update
);
router.delete("/cursos/:id", IDValidator, CursoController.destroy);

// Departamentos
router.get("/departamentos", DepartamentoController.index);
router.get("/departamentos/:id", IDValidator, DepartamentoController.show);
router.post(
  "/departamentos",
  validate(DepartamentoValidator.store),
  DepartamentoController.store
);
router.put(
  "/departamentos/:id",
  IDValidator,
  validate(DepartamentoValidator.update),
  DepartamentoController.update
);
router.delete(
  "/departamentos/:id",
  IDValidator,
  DepartamentoController.destroy
);

// Disciplinas
router.get("/disciplinas", DisciplinaController.index);
router.get("/disciplinas/:id", IDValidator, DisciplinaController.show);
router.post(
  "/disciplinas",
  validate(DisciplinaValidator.store),
  DisciplinaController.store
);
router.put(
  "/disciplinas/:id",
  IDValidator,
  validate(DisciplinaValidator.update),
  DisciplinaController.update
);
router.delete("/disciplinas/:id", IDValidator, DisciplinaController.destroy);

// Turmas
router.get("/turmas", TurmaController.index);
router.get("/turmas/:id", IDValidator, TurmaController.show);
router.post("/turmas", validate(TurmaValidator.store), TurmaController.store);
router.put(
  "/turmas/:id",
  IDValidator,
  validate(TurmaValidator.update),
  TurmaController.update
);
router.delete("/turmas/:id", IDValidator, TurmaController.destroy);

// Matrículas
router.get("/matriculas", MatriculaController.index);
router.get("/matriculas/:id", IDValidator, MatriculaController.show);
router.post(
  "/matriculas",
  validate(MatriculaValidator.store),
  MatriculaController.store
);
router.put(
  "/matriculas/:id",
  IDValidator,
  validate(MatriculaValidator.update),
  MatriculaController.update
);
router.delete("/matriculas/:id", IDValidator, MatriculaController.destroy);

// Avaliações
router.get("/avaliacoes", AvaliacaoController.index);
router.get("/avaliacoes/:id", IDValidator, AvaliacaoController.show);
router.post(
  "/avaliacoes",
  validate(AvaliacaoValidator.store),
  AvaliacaoController.store
);
router.put(
  "/avaliacoes/:id",
  IDValidator,
  validate(AvaliacaoValidator.update),
  AvaliacaoController.update
);
router.delete("/avaliacoes/:id", IDValidator, AvaliacaoController.destroy);

// Notas
router.get("/notas", NotaController.index);
router.get("/notas/:id", IDValidator, NotaController.show);
router.post("/notas", validate(NotaValidator.store), NotaController.store);
router.put(
  "/notas/:id",
  IDValidator,
  validate(NotaValidator.update),
  NotaController.update
);
router.delete("/notas/:id", IDValidator, NotaController.destroy);

// Usuarios
router.get("/usuarios", UsuarioController.index);
router.get("/usuarios/:id", IDValidator, UsuarioController.show);
router.post(
  "/usuarios",
  validate(UsuarioValidator.store),
  UsuarioController.store
);
router.put(
  "/usuarios/:id",
  IDValidator,
  validate(UsuarioValidator.update),
  UsuarioController.update
);
router.delete("/usuarios/:id", IDValidator, UsuarioController.destroy);

module.exports = router;
