const Pedido = require('./pedido.model');
const db = require('../db/db');

module.exports = {

    consultar : (callback) => {
        // consultar todos os pedidos
        db.connect()

        Pedido.find( (e, res) => {
            db.disconnect()
            callback(res)
        })
    },

    registrar : (pedido, callback) => {

        // registrar os pedidos, com as informações que virão da 'tela'
        db.connect();

        let p = new Pedido(pedido)
        p.data = new Date()

        p.save( (e, res) => {
            db.disconnect()
            callback()
        })
    }

}