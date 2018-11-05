const dao = require("./estabelecimento.dao")

module.exports = (app) => {

    app.route("/estabelecimento/listar").post( (req, resp) => {

        dao.listar(req.body.nome, (result) => {
            resp.json(result)
        });
    });
}