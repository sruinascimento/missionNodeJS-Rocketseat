
//exemplo
function enviarEmail({ nome, email, telefone }: Usuario) {
  console.log(`Olá ${nome} seu email é ${email} o seu telefone é ${telefone}`)
}

//definindo uma interface

interface Usuario {
  nome: string;
  email: string;
  telefone?: string; //diz que o parâmetro é opcional
}
enviarEmail({
  nome: 'Rui',
  email: 'sruy19@gmail.com',
  telefone: '94988130501'
})
