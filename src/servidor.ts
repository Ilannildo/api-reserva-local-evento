import express, { Request, Response } from "express";
import cors from "cors";
import { rotas } from "./rotas";

const app = express();

console.log("Inicializando o banco de dados.");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(rotas);

const PORTA_PADRAO = 8000;
app.listen(PORTA_PADRAO, () => {
  console.log(`O app está rodando na porta ${PORTA_PADRAO}`);
});
