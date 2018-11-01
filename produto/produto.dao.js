const Produto = require('./produto.model');
const db = require('../db/db');

module.exports = {

    consultar : (estabelecimento, categoria, callback) => {

        // consultar produtos do estabelecimento
        // filtrar por categoria do produto, caso não informada categoria, listar todos
        db.connect()

        if(categoria == null){
            Produto.find( (e, res) => {
                db.disconnect()
                callback(res)
            })
        }else{
            let q = Produto.find({categoria : categoria})
            q.sort("nome")

            q.exec( (e, res) => {
                db.disconnect()
                callback(res)
            })
        }
    }

}