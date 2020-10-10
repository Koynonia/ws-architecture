import { Cliente } from "../models/cliente";

export class ClienteEmail {
  constructor(private cliente: Cliente) {}

  envioRemocaoConta(): boolean {
    console.log("Envio de e-mail de remoção de conta de " + this.cliente.nome);

    return true;
  }
}
