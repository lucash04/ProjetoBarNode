const express = require('express')

const wsEstabelecimento = require('./estabelecimento/estabelecimento.ws')
const wsPedido = require('./pedido/pedido.ws')
const wsProduto = require('./produto/produto.ws')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    
    next()
});

wsEstabelecimento(app)
wsPedido(app)
wsProduto(app)

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000")
})