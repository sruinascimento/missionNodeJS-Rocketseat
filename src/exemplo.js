//exemplo
function enviarEmail(_a) {
    var nome = _a.nome, email = _a.email, telefone = _a.telefone;
    console.log("Ol\u00E1 " + nome + " seu email \u00E9 " + email + " o seu telefone \u00E9 " + telefone);
}
enviarEmail({
    nome: 'Rui',
    email: 'sruy19@gmail.com',
    telefone: '94988130501'
});
