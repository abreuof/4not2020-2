const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    data: { type: String, required: true },  
    vendedor: { type: mongoose.ObjectId, ref: 'Vendedor', required: true },
    jogo: { type: mongoose.ObjectId, ref: 'Jogo' },
    filme: { type: mongoose.ObjectId, ref: 'Filme' },
    musica: { type: mongoose.ObjectId, ref: 'Musica' },
    software: { type: mongoose.ObjectId, ref: 'Software' }      
})

/*
    Parametros do metodo mongoose.model()
    1 - nome do modelo (sempre igual a nome do arquivo)
    2 - estrutura (esquema) do modelo
    3 - nome da coleção (collection) em que os objetos criados a partir do modelo serão armazenados no mongoDB
*/
   module.exports = mongoose.model('Venda', esquema, 'vendas')