import { Router } from "express";
import { Usuario } from "../models/usuario.js";
import { usuarioValidation } from "../utils/validations.js";

export const usuariosRouter = Router();

// INSERÇÃO DE CONTATO [POST]
usuariosRouter.post("/usuarios", async (req, res) => {
    // error -> objeto com detalhes dos erros de validação
    // value -> são os dados do req.body
    const { error, value } = usuarioValidation.validate(req.body, { abortEarly: false });

    if (error) {
        // HTTP 400 - Bad Request - Indica que a requisição tem dados inválidos
        res.status(400).json({ message: "Dados inválidos", error: error.details });
        return;
    }

    // Extrair as informações dos dados que foram validados anteriormente
    const { nome, email, senha } = value;

    try {
        const novoUsuario = new Usuario({
            nome,
            email,
            senha
        });
        await novoUsuario.save();
        res.json({ message: "Usuário criado com sucesso." });
    } catch (err) {
        res
            .status(500)
            .json({ message: "Um erro ocorreu ao adicionar usuário", error: err });
    }
});