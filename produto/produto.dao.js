const Produto = require('./produto.model');
const db = require('../db/db');

module.exports = {

    listar : (idEstabelecimento, idCategoria, callback) => {

        db.connect();

        let paramsToFind = {};

        if(idEstabelecimento !== undefined){
            paramsToFind.estabelecimento = idEstabelecimento;
        }

        if(idCategoria !== undefined){
            paramsToFind.categoria = idCategoria;
        }

        let q = Produto.find(paramsToFind);
        q.sort("titulo");

        q.exec( (e, res) => {
            db.disconnect();
            callback(res);
        });
    }

}