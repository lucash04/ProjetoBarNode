const dao = require("./produto.dao")

module.exports = (app) => {

    app.route("/produto/listar").get( (req, resp) => {
        dao.consultar((result) => {
            resp.json(result)
        })
    })
}