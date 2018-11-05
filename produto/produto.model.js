const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

var schemaProduto = new Schema({
    titulo : String,
    descricao : String,
    valor : Number,
    categoria : {
        type : Types.ObjectId,
        ref : 'ProdutoCategoria'
    },
    estabelecimento : {
        type : Types.ObjectId,
        ref : 'Estabelecimento'
    }
});

module.exports = mongoose.model("Produto", schemaProduto);