import Usuario from "./Usuario.js";

let usuarios = []

const Usuario1 = new Usuario("Pedro", "abc@gmail.com", "ola123")
usuarios.push(Usuario1)
const Usuario2 = new Usuario("Maria", "lalala@gmail.com", "M@r1a")
usuarios.push(Usuario2)
const Usuario3 = new Usuario("Carlos", "carlos_12@gmail.com", "444loop")
usuarios.push(Usuario3)

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (evento) =>{
    let sucesso = false
    evento.preventDefault();
    usuarios.forEach(usuario => {
        if (usuario.autenticar(evento.target.email.value, evento.target.senha.value)){
            sucesso = true
            console.log(usuario.nome)
        }
    });
    sucesso ? alert("Sucesso em acessar a conta!") : alert("Credenciais inválidas!")
})