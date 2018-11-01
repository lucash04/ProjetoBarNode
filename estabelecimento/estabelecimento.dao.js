const Estabelecimento = require('./estabelecimento.model');
const db = require('../db/db');

module.exports = {

    consultar : (nome, callback) => {

        // Consultar estabelecimentos por nome, caso não informado nome listar todos
        db.connect()

        if(nome == null){
            Estabelecimento.find( (e, res) => {
                db.disconnect()
                callback(res)
            })
        }else{
            let q = Estabelecimento.find({nome : nome})
            q.sort("nome")

            q.exec( (e, res) => {
                db.disconnect()
                callback(res)
            })
        }
    }

}