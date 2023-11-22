const Usuario = require('../models/userModel');

function indexScreen(req, res){
    res.render("index.html")
}

async function cadastrarUsuario(req, res){
    const User = {
        email: "teste",
        senha: "123" 
    }

    try{
        console.log('antes de salvar')
        const newUser = new Usuario(User);
        await newUser.save();
        let sucess = true;
        console.log("Cadastrado com sucesso")
    } catch (err){
        console.error(err)
    }
}

module.exports = {
    indexScreen,
    cadastrarUsuario
}