const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

var schemaPedido = new Schema({
    data : Date,
    valor : Number,
    hora_chegada : String,
    pessoas : Number,
    estabelecimento : {
        type : Types.ObjectId,
        ref : 'Estabelecimento'
    },
    itens : Object
});

module.exports = mongoose.model("Pedido", schemaPedido);