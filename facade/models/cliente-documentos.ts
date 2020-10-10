import { Cliente } from "../models/cliente";

export class ClienteDocumentos {
  constructor(private cliente: Cliente) {}

  delete(): boolean {
    console.log("Documentos de " + this.cliente.nome + " deletados com sucesso!");

    return true;
  }
}
