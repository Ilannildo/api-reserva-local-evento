import { Request, Response } from "express";
import { clientePrisma } from "../prisma";

export const criarUsuario = async (requisicao: Request, resposta: Response) => {
  try {
    const { email, nome, senha } = requisicao.body;

    const usuario = await clientePrisma.usuario.create({
      data: {
        email,
        nome,
        senha,
      },
    });

    return resposta
      .json({
        mensagem: "Usuário cadastrado com sucesso!",
        usuario: usuario,
      })
      .status(201);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};

export const buscarUsuario = async (
  requisicao: Request,
  resposta: Response
) => {
  try {
    const { id } = requisicao.params;

    const usuario = await clientePrisma.usuario.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!usuario) {
      return resposta
        .json({
          mensagem: "O usuário não foi encontrado",
        })
        .status(404);
    }

    return resposta
      .json({
        mensagem: "Usuário encontrado com sucesso",
        usuario: usuario,
      })
      .status(200);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};

export const loginUsuario = async (requisicao: Request, resposta: Response) => {
  try {
    const { email, senha } = requisicao.body;

    const usuario = await clientePrisma.usuario.findFirst({
      where: {
        email,
      },
    });

    if (!usuario) {
      return resposta
        .json({
          mensagem: "Email ou senha inválidos",
        })
        .status(404);
    }

    if (usuario.senha !== senha) {
      return resposta
        .json({
          mensagem: "Email ou senha inválidos",
        })
        .status(404);
    }

    return resposta
      .json({
        mensagem: "Login feito com sucesso",
        usuario: usuario,
      })
      .status(200);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};
