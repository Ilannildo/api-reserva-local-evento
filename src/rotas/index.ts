import { Request, Response, Router } from "express";
import * as controleEvento from "../controles/evento.controle";
import * as controleLocal from "../controles/local.controle";
import * as controleReserva from "../controles/reserva.controle";
import * as controleUsuario from "../controles/usuario.controle";

export const rotas = Router();

rotas
  .route("/evento")
  .post((requisicao: Request, resposta: Response) =>
    controleEvento.criarEvento(requisicao, resposta)
  );

rotas
  .route("/evento/:id")
  .get((requisicao: Request, resposta: Response) =>
    controleEvento.buscarEvento(requisicao, resposta)
  );

rotas
  .route("/local")
  .post((requisicao: Request, resposta: Response) =>
    controleLocal.criarLocal(requisicao, resposta)
  )
  .get((requisicao: Request, resposta: Response) =>
    controleLocal.buscarTodos(requisicao, resposta)
  );

rotas
  .route("/local/:id")
  .get((requisicao: Request, resposta: Response) =>
    controleLocal.buscarLocal(requisicao, resposta)
  );

rotas
  .route("/reserva")
  .post((requisicao: Request, resposta: Response) =>
    controleReserva.criarReserva(requisicao, resposta)
  )
  .get((requisicao: Request, resposta: Response) =>
    controleReserva.buscarReservas(requisicao, resposta)
  );

rotas
  .route("/reserva/evento/:id_evento")
  .get((requisicao: Request, resposta: Response) =>
    controleReserva.buscarReservaPorIdEvento(requisicao, resposta)
  );

rotas
  .route("/reserva/local/:id_local")
  .get((requisicao: Request, resposta: Response) =>
    controleReserva.buscarReservaPorIdLocal(requisicao, resposta)
  );

rotas
  .route("/usuario")
  .post((requisicao: Request, resposta: Response) =>
    controleUsuario.criarUsuario(requisicao, resposta)
  );

rotas
  .route("/usuario/:id")
  .get((requisicao: Request, resposta: Response) =>
    controleUsuario.buscarUsuario(requisicao, resposta)
  );

rotas
  .route("/login")
  .post((requisicao: Request, resposta: Response) =>
    controleUsuario.loginUsuario(requisicao, resposta)
  );
