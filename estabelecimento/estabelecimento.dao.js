const Estabelecimento = require('./estabelecimento.model');
const db = require('../db/db');

module.exports = {

    listar : (nome, callback) => {

        db.connect();

        let q = Estabelecimento.find({nome : new RegExp(nome, 'i') });
        q.sort("nome");

        q.exec( (e, res) => {
            db.disconnect();
            callback(res);
        });
    }

}