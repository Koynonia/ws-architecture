// @ts-ignore
import { Cliente } from "./models/cliente.ts";
// @ts-ignore
import { Facade } from "./facade/cliente-facade.ts";

const fernando = new Cliente(
  "Fernando M. Oliveira",
  "fernandomoliveira",
  "fernando@mail.com"
);

const adriana = new Cliente(
  "Adriana B. Oliveira",
  "adrianaboliveira",
  "adriana@mail.com"
);

Facade.ClienteFacade.removeConta(fernando);
Facade.ClienteFacade.removeConta(adriana);
