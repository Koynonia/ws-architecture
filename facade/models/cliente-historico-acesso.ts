import { Cliente } from "../models/cliente";

export class ClienteHistoricoAcesso {
  constructor(private cliente: Cliente) {}

  remove(): boolean {
    console.log("Histórico de acesso de " + this.cliente.nome + " removido com sucesso!");

    return true;
  }
}
