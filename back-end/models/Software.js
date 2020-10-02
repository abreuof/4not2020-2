const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    plataforma: { type: String, required: true },
    categoria: { type: String, required: true },
    data: { type: String, required: true }    
})

/*
    Parametros do metodo mongoose.model()
    1 - nome do modelo (sempre igual a nome do arquivo)
    2 - estrutura (esquema) do modelo
    3 - nome da coleção (collection) em que os objetos criados a partir do modelo serão armazenados no mongoDB
*/
   module.exports = mongoose.model('Software', esquema, 'softwares')