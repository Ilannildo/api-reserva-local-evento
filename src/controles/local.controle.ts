import { Request, Response } from "express";
import { clientePrisma } from "../prisma";

export const criarLocal = async (requisicao: Request, resposta: Response) => {
  try {
    const { nome, capacidade } = requisicao.body;

    const local = await clientePrisma.local.create({
      data: {
        nome,
        capacidade,
      },
    });

    return resposta
      .json({
        mensagem: "Local criado com sucesso!",
        evento: local,
      })
      .status(201);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};

export const buscarLocal = async (requisicao: Request, resposta: Response) => {
  try {
    const { id } = requisicao.params;

    const local = await clientePrisma.local.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!local) {
      return resposta
        .json({
          mensagem: "O local não foi encontrado",
        })
        .status(404);
    }

    return resposta
      .json({
        mensagem: "Local encontrado com sucesso",
        local: local,
      })
      .status(200);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};
export const buscarTodos = async (requisicao: Request, resposta: Response) => {
  try {
    const local = await clientePrisma.local.findMany();

    return resposta
      .json({
        locais: local,
      })
      .status(200);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};
