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

const SalaAula = require('../models/SalaAula')

const controller = {} // Objeto vazio

// operação CREATE, função novo()
controller.novo = async (req, res) => {
    // usa os dados que chegam dentro do body da requisição
    // e os envia ao BD para a criação de um novo objeto
    try {
        await SalaAula.create(req.body)
    // HTTP 201: Created
    res.status(201).end()
    }
    catch(erro){
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// operação RETRIEVE (all), função listar()
controller.listar = async (req, res) => {
    try {
    let dados = await SalaAula.find() // Traz todos os cursos cadastrados
    res.send(dados)
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// operação RETRIEVE (one), função obterUm()
controller.obterUm = async (req, res) => {
    try {
        // capturando o parametro ID da url
        const id = req.params.id
        let obj = await SalaAula.findById(id)

        // o objeto existe e foi encontrado
        if (obj) res.send(obj)     // HTTP 200
        // Não encontrado
        else res.status(404).end() // HTTP 404: not found
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// operação UPDATE, função atualizar()
controller.atualizar = async (req, res) => {
    try {
        // Isolar o _id do objeto que está sendo alterado
        const id = req.body._id

        // busca e substituição do conteudo do objeto
        let ret = await SalaAula.findByIdAndUpdate(id, req.body)

        // se encontrou e atualizou, retornamos http 204: no content
        if(ret) res.status(204).end()
        // não encontrou o objeto para ser alteado, retorno http 404: not found
        else res.status(404).end()
    }
    catch(errro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// operação delete, função excluir()
controller.excluir = async (req, res) => {
    try {
        // isolando o ID
        const id = req.body._id

        // busca pelo id e exclusão
        let ret = await SalaAula.findByIdAndDelete(id)

        // encontrou e excluiu, http 204: no content
        if(ret) res.status(204).end()
        // não encontrou, http 404: not found
        else res.status(404).end()
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller