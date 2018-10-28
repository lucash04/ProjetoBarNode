const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaProdutoCategoria = new Schema({
    titulo : String,
});

module.exports = mongoose.model("ProdutoCategoria", schemaProdutoCategoria);