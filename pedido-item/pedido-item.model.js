const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

var schemaPedidoItem = new Schema({
    qtde : Number,
    valor : Number,
    observacao : String,
    produto : {
        type : Types.ObjectId,
        ref : "Produto"
    },
    pedido : {
        type : Types.ObjectId,
        ref : "Pedido"
    }
});

module.exports = mongoose.model("PedidoItem", schemaPedidoItem);