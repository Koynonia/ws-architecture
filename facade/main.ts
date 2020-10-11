// @ts-ignore
import { Cliente } from "./models/cliente.ts";
// @ts-ignore
import { Facade } from "./facade/cliente-facade.ts";


const fernando = new Cliente(
  "Fernando M. Oliveira",
  "fernandomoliveira",
  "fernando@mail.com"
);

const clienteFacade = new Facade.ClienteFacade(fernando);
clienteFacade.removeConta();
