# Trabalho A2 de Construção de Backend – Sistema Acadêmico Universitário

## 📖 Descrição

Este projeto consiste na implementação de uma API REST completa com operações CRUD (Create, Read, Update, Delete), utilizando Node.js, Express, Mongoose e Yup.  
O tema escolhido é o **Sistema Acadêmico de Universidade**, abrangendo o gerenciamento de:

- Alunos  
- Professores  
- Cursos  
- Departamentos  
- Disciplinas  
- Turmas  
- Matrículas  
- Avaliações  
- Notas  
- Usuários do Sistema

Este trabalho foi desenvolvido para a disciplina de **Construção de Backend**.

---

## 👥 Alunos e Contribuições

| Aluno(a) | GitHub | Funcionalidade |
| :--- | :--- | :--- |
| Álvaro Matheus Alves da Silva | [alvarotheuzin](https://github.com/alvarotheuzin) | Implementação da funcionalidade de **Alunos** |
| Giovanna Martins Soares | [blackinha](https://github.com/Blackinha) | Implementação da funcionalidade de **Professores** |
| João Victor Pereira de Souza | [JoaooVictor27](https://github.com/JoaooVictor27) | Implementação da funcionalidade de **Cursos** |
| Maria Fernanda Santos Lima de Almeida | [fe705](https://github.com/fe705) | Implementação da funcionalidade de **Departamentos** |
| Pedro Victor Lopes de Souza | [Crowzito](https://github.com/Crowzito) | Implementação da funcionalidade de **Disciplinas, Turmas, Matrículas, Avaliações e Notas** |

---

## 🤝 CONTRIBUTING

Para detalhes sobre como contribuir com este projeto, seguir nosso fluxo de trabalho e padrões de commit, por favor leia nosso guia de contribuição:

➡️ **[CONTRIBUTING.md](CONTRIBUTING.md)**

---

## 🚀 Como Rodar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Crowzito/sistema-academico.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd sistema-academico
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Configure o arquivo `.env`:**

   * Copie o `.env.example` para `.env`
   * Insira sua `MONGO_URI`

5. **Inicie o servidor:**

   ```bash
   npm start
   ```

O servidor estará rodando em:
👉 `http://localhost:3000/api`

---

## 🔌 Endpoints da API

Abaixo estão todos os endpoints disponíveis para as funcionalidades do sistema acadêmico.

---

# 📘 **Alunos** (`/alunos`)

* `GET /alunos` – Lista todos os alunos
* `GET /alunos/:id` – Obtém um aluno pelo ID
* `POST /alunos` – Cria um novo aluno
* `PUT /alunos/:id` – Atualiza um aluno existente
* `DELETE /alunos/:id` – Remove um aluno

---

# 🎓 **Professores** (`/professores`)

* `GET /professores` – Lista todos os professores
* `GET /professores/:id` – Busca um professor pelo seu ID
* `POST /professores` – Cria um novo professor
* `PUT /professores/:id` – Atualiza um professor
* `DELETE /professores/:id` – Remove um professor

---

# 🏫 **Cursos** (`/cursos`)

* `GET /cursos` – Lista todos os cursos
* `GET /cursos/:id` – Obtém um curso pelo ID
* `POST /cursos` – Cria um novo curso
* `PUT /cursos/:id` – Atualiza um curso
* `DELETE /cursos/:id` – Remove um curso

---

# 🏢 **Departamentos** (`/departamentos`)

* `GET /departamentos` – Lista todos os departamentos
* `GET /departamentos/:id` – Obtém um departamento pelo ID
* `POST /departamentos` – Cria um novo departamento
* `PUT /departamentos/:id` – Atualiza um departamento
* `DELETE /departamentos/:id` – Remove um departamento

---

# 📚 **Disciplinas** (`/disciplinas`)

* `GET /disciplinas` – Lista todas as disciplinas
* `GET /disciplinas/:id` – Obtém uma disciplina pelo ID
* `POST /disciplinas` – Cria uma disciplina
* `PUT /disciplinas/:id` – Atualiza uma disciplina
* `DELETE /disciplinas/:id` – Remove uma disciplina

---

# 👨‍🏫 **Turmas** (`/turmas`)

* `GET /turmas` – Lista todas as turmas
* `GET /turmas/:id` – Obtém uma turma específica
* `POST /turmas` – Cria uma nova turma
* `PUT /turmas/:id` – Atualiza uma turma existente
* `DELETE /turmas/:id` – Remove uma turma

---

# 🎓 **Matrículas** (`/matriculas`)

* `GET /matriculas` – Lista todas as matrículas
* `GET /matriculas/:id` – Busca uma matrícula específica
* `POST /matriculas` – Realiza uma nova matrícula
* `PUT /matriculas/:id` – Atualiza uma matrícula
* `DELETE /matriculas/:id` – Remove uma matrícula

---

# 📝 **Avaliações** (`/avaliacoes`)

* `GET /avaliacoes` – Lista todas as avaliações
* `GET /avaliacoes/:id` – Obtém uma avaliação específica
* `POST /avaliacoes` – Cria uma nova avaliação
* `PUT /avaliacoes/:id` – Atualiza uma avaliação
* `DELETE /avaliacoes/:id` – Remove uma avaliação

---

# 📊 **Notas** (`/notas`)

* `GET /notas` – Lista todas as notas
* `GET /notas/:id` – Obtém uma nota pelo ID
* `POST /notas` – Registra uma nova nota
* `PUT /notas/:id` – Atualiza uma nota
* `DELETE /notas/:id` – Remove uma nota

---

# 🔐 **Usuários** (`/usuarios`)

* `GET /usuarios` – Lista todos os usuários
* `GET /usuarios/:id` – Detalha um usuário
* `POST /usuarios` – Cria um usuário (senha é hasheada)
* `PUT /usuarios/:id` – Atualiza um usuário
* `DELETE /usuarios/:id` – Remove um usuário
