const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    data_inicial: { type: Date, required: true},
    data_final: { 
        type: Date, 
        required: true,
        validate: {
            validator: function(valor){
                return valor >= this.data_inicial
            },
            message: () => 'A data final deve ser maior ou igual a data inicial.'
        }
    },
    dias_semana: [{
        type: String,
        required: true,
        enum: ['dom', 'seg', 'ter', 'quar', 'qui', 'sex', 'sáb']
    }],
    //valores que usam apenas a parte de hora de uma data
    //sao manipulados mais facilmente como string
    horario_inicial: { type: String, required: true },
    horario_final: { type: String, required: true},
    curso: { type: mongoose.ObjectId, ref: 'Curso', required: true},
    professor: { type: mongoose.ObjectId, ref: 'Professor', required: true},
    sala_aula: { type: mongoose.ObjectId, ref: 'SalaAula', required: true}
})

/*
    Parametros do metodo mongoose.model()
    1 - nome do modelo (sempre igual a nome do arquivo)
    2 - estrutura (esquema) do modelo
    3 - nome da coleção (collection) em que os objetos criados a partir do modelo serão armazenados no mongoDB
    */
   module.exports = mongoose.model('Turma', esquema, 'Turmas')