import {model, Schema} from "mongoose"; // definir qual o formato do documento, campos, tipo de cada campo

// Objeto que vai intermediar os dados que vamos inserir com o MongoDB
export const Contato = model("contato", new Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    telefone: {
        type: String,
        unique: true,
        required: true
    },
    observacoes: {
        type: String
    },
    favorito: {
        type: Boolean,
        default: false
    }
}));