const dao = require("./estabelecimento.dao")

module.exports = (app) => {

    app.route("/estabelecimento/listar").get( (req, resp) => {
        dao.consultar((result) => {
            resp.json(result)
        })
    })
}