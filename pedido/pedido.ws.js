const dao = require("./pedido.dao")

module.exports = (app) => {

    app.route("/pedido/listar").get( (req, resp) => {

        dao.consultar((result) => {
            resp.json(result);
        });
    });

    app.route("/pedido/salvar").post( (req, resp) => {
        
        dao.registrar(req.body, () => {
            resp.json({})
        });
    });
}