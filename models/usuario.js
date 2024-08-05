import {model, Schema} from "mongoose"; // definir qual o formato do documento, campos, tipo de cada campo

// Objeto que vai intermediar os dados que vamos inserir com o MongoDB
export const Usuario = model("usuario", new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    senha: {
        type: String,
        required: true
    }
}));