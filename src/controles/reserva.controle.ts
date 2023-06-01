import { Request, Response } from "express";
import { clientePrisma } from "../prisma";

export const criarReserva = async (requisicao: Request, resposta: Response) => {
  try {
    const { id_evento, id_local, data_reserva } = requisicao.body;

    const evento = await clientePrisma.reserva.create({
      data: {
        data_reserva: new Date(data_reserva),
        status: true,
        evento: {
          connect: {
            id: id_evento,
          },
        },
        local: {
          connect: {
            id: id_local,
          },
        },
      },
    });

    return resposta
      .json({
        mensagem: "Reserva criada com sucesso!",
        evento: evento,
      })
      .status(201);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};

export const buscarReservaPorIdEvento = async (
  requisicao: Request,
  resposta: Response
) => {
  try {
    const { id_evento } = requisicao.params;

    const reservas = await clientePrisma.reserva.findMany({
      where: {
        id_evento: Number(id_evento),
      },
      include: {
        evento: true,
        local: true,
      },
    });

    if (!reservas) {
      return resposta
        .json({
          mensagem: "Nenhuma reserva encontrada para esse evento",
        })
        .status(404);
    }

    return resposta
      .json({
        mensagem: "Reservas encontradas com sucesso",
        reservas: reservas,
      })
      .status(200);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};

export const buscarReservaPorIdLocal = async (
  requisicao: Request,
  resposta: Response
) => {
  try {
    const { id_local } = requisicao.params;

    const reservas = await clientePrisma.reserva.findMany({
      where: {
        id_local: Number(id_local),
      },
      include: {
        evento: true,
        local: true,
      },
    });

    if (!reservas) {
      return resposta
        .json({
          mensagem: "Nenhuma reserva encontrada para esse local",
        })
        .status(404);
    }

    return resposta
      .json({
        mensagem: "Reservas encontradas com sucesso",
        reservas: reservas,
      })
      .status(200);
  } catch (error: any) {
    return resposta.json({
      mensagem: "Ocorreu um erro inesperado",
    });
  }
};
