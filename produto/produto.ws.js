const dao = require("./produto.dao")

module.exports = (app) => {

    app.route("/produto/listar").post( (req, resp) => {

        let idEstabelecimento   = req.body.estabelecimento;
        let idCategoria         = req.body.categoria;

        dao.listar(idEstabelecimento, idCategoria, (result) => {
            resp.json(result)
        })
    })
}