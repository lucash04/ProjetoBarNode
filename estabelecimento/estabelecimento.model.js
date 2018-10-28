const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaEstabelecimento = new Schema({
    nome : String,
    capacidade_pessoas : Number,
});

module.exports = mongoose.model("Estabelecimento", schemaEstabelecimento);