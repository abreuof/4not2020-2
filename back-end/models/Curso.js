const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    ementa: {
        type: String,
        required: true
    },
    carga_horaria: {
        type: Number,
        required: true,
        min: 4,
        max: 80
    },
    nivel: {
        type: String,
        required: true,
        enum: ['Básico', 'Intermediário', 'Avançado']
    },
    valor_curso: {
        type: Number,
        required: true,
        default: 450,  // Valor assumido se não for informado
        min: 50
    }
})

/*
    Parametros do metodo mongoose.model()
    1 - nome do modelo (sempre igual a nome do arquivo)
    2 - estrutura (esquema) do modelo
    3 - nome da coleção (collection) em que os objetos criados a partir do modelo serão armazenados no mongoDB
    */
   module.exports = mongoose.model('curso', esquema, 'cursos')