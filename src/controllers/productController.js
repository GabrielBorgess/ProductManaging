const Produto = require("../models/productModel");

async function cadastrarProduto(req, res){
    try {
        const produto = {
            nome: req.body.name,
            descricao: req.body.description,
            valor: req.body.value,
            usuario: req.session.user._id
        };

        
        await Produto.create(produto);
        console.log("produto criado");
        res.redirect('/home');

    } catch (err) {
        console.error(err);
        let erro_cadastrar_produto = true;
        res.render("home.html", { erro_cadastrar_produto });
    }
}

module.exports = { 
    cadastrarProduto
}