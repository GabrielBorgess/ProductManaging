const Usuario = require('../models/userModel');

function indexScreen(req, res){
    res.render("index.html")
}

async function cadastrarUsuario(req, res){
    const User = {
        email: req.body.email,
        senha: req.body.senha 
    }

    try{
        const newUser = new Usuario(User);
        await newUser.save();
        let sucess = true;
        res.render('index.html', {sucess})
        console.log("Cadastrado com sucesso")
    } catch (err){
        let error = true;
        res.render('index.html', {error})
        console.error(err)
    }
}

module.exports = {
    indexScreen,
    cadastrarUsuario
}