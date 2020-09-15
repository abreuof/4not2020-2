const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    formacao: {type: String, required: true },
    data_nascimento: {type: Date, required: true },
    // indice unico: impede a duplicidade de cpfs no cadastro
    cpf: { type: String, required: true, index: { unique: true } },
    rg: { type: String, required: true },
    valor_hora_aula: { type: Number, required: true, min: 15.0, default: 20.75 },
    endereco: { type: String, required: true },
    telefone: { type: String, required: true},
    // indice unico: impede a duplicidade de cpfs no cadastro
    email: { type: String, required: true, index: { unique: true } }    
})

/*
    Parametros do metodo mongoose.model()
    1 - nome do modelo (sempre igual a nome do arquivo)
    2 - estrutura (esquema) do modelo
    3 - nome da coleção (collection) em que os objetos criados a partir do modelo serão armazenados no mongoDB
*/
   module.exports = mongoose.model('Professor', esquema, 'professores')