var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.pa0w3.gcp.mongodb.net/agora_vai?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const teste = require('./routes/teste')
app.use('/teste', teste)

const curso = require('./routes/curso')
app.use('/curso', curso)

const professor = require('./routes/professor')
app.use('/professor', professor)

const sala_aula = require('./routes/sala_aula')
app.use('/sala-aula', sala_aula)

const turma = require('./routes/turma')
app.use('/turma', turma)

const jogo = require('./routes/jogo')
app.use('/jogo', jogo)

const filme = require('./routes/filme')
app.use('/filme', filme)

const musica = require('./routes/musica')
app.use('/musica', musica)

const software = require('./routes/software')
app.use('/software', software)

const vendedor = require('./routes/vendedor')
app.use('/vendedor', vendedor)

const venda = require('./routes/venda')
app.use('/venda', venda)


module.exports = app;