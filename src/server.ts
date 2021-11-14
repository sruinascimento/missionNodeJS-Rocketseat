//toda vez que vermos ... pontos '...express'
//yarn add @types/express

import express, { application } from 'express';
 
const app = express();

/**
 * GET => buscar uma informação
 * POST => inserir uma informação
 * PUT => alterar uma informação
 * DELETE => remover um dado
 * PATCH => alterar uma informação específica exemplo(alterar uma senha do user)
 */
app.get("/teste", (request, response) => {
  return response.send('Olá NLW');
} );

app.post("/test-post", (req, res) => {
  return res.send("Rota do post");
});
 app.listen(3000, () => {
   console.log(`Server is run at port ${3000} !`);
 });