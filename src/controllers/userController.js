const Usuario = require('../models/userModel');
const Produto = require('../models/productModel');

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

async function validarUsuario(req, res){
    const user = {
        email: req.body.email,
        senha: req.body.senha
    }

    try{
        const usuario = await Usuario.findOne({email: user.email, senha: user.senha})

        if(usuario !== null){
            req.session.autorizado = true
            req.session.user = usuario
            res.redirect("/home")
        } else {
            let auth_error = true
            res.render("index.html", {auth_error})
        }
    } catch {
        console.error(err)
    }
}

function verificarAuth(req, res, next) {
    if(req.session.autorizado){
        console.log("user autorizado");
        console.log(`id de sessão do user: ${req.session.user._id}`)
        next();
    }
    else{
        console.log("user não autorizado");
        res.redirect('/');
    }   
}

async function homeview(req, res) {
    try {
        if (!req.session.user) {  
            return res.redirect('/');  
        }

        const produtos = await Produto.find({ usuario: req.session.user._id, indicador_ativo: 1 });

        res.render('home.html', { produtos });
    } catch (erro_recupera_produtos) {
        console.error(erro_recupera_produtos);
        res.render('home.html', { erro_recupera_produtos });
    }
}

function logOut(req, res) {
    req.session.destroy();
    res.redirect('/');
}

module.exports = {
    indexScreen,
    cadastrarUsuario,
    validarUsuario,
    verificarAuth,
    homeview,
    logOut
}