import { Request, Response } from "express";
import { clientePrisma } from "../prisma";

export const criarEvento = async (requisicao: Request, resposta: Response) => {
  try {
    const { titulo, descricao } = requisicao.body;

    const evento = await clientePrisma.evento.create({
      data: {
        titulo,
        descricao,
      },
    });

    return resposta
      .json({
        mensagem: "Evento criado com sucesso!",
        evento: evento,
      })
      .status(201);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};

export const buscarEvento = async (requisicao: Request, resposta: Response) => {
  try {
    const { id } = requisicao.params;

    const evento = await clientePrisma.evento.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!evento) {
      return resposta
        .json({
          mensagem: "O evento não foi encontrado",
        })
        .status(404);
    }

    return resposta
      .json({
        mensagem: "Evento encontrado com sucesso",
        evento: evento,
      })
      .status(200);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};
