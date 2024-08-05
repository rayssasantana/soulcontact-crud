import express from "express";
import { config } from "dotenv"; // carrega as variáveis do meu .env
config();
import mongoose from "mongoose";
import { contatosRouter } from "./routes/contatos.js"
import { usuariosRouter } from "./routes/usuarios.js";

mongoose // gerencia a conexão internamente
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongo DB conectado!");
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();

app.use(express.json());

app.use(contatosRouter);
app.use(usuariosRouter);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});