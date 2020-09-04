/*

    Operações básicas sobre dados

    1 - CREATE (criação ou inserção)
        cria um nobo objeto dentro do banco de dados

    2 - RETRIEVE (recuperar ou listar)
        obter de volta um ou mais objetos preexistentes no banco de dados

    3 - UPDATE
        atualizar os dados de um objeto preexistente no banco de dados

    4 - DELETE
        exclusao de um objeto do banco de dados

        (C)reate + (R)etrieve + (U)pdate + (D)elete = CRUD

        =====================================================

        Verbos do protocolo HTTP

        Verbo                           Operação
        POST                            CREATE
        GET                             RETRIEVE
        PUT                             UPDATE
        DELETE                          DELETE

*/

// Controller é um conjunto de funções associadas as operações sobre dados

const Curso = require('../models/Curso')

const controller = {} // Objeto vazio

// operação CREATE, função novo()
controller.novo = async (req, res) => {
    // usa os dados que chegam dentro do body da requisição
    // e os envia ao BD para a criação de um novo objeto
    try {
        await Curso.create(req.body)
    // HTTP 201: Created
    res.status(201).end()
    }
    catch(erro){
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

module.exports = controller