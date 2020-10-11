// @ts-ignore
import { Cliente } from "../models/cliente.ts";
// @ts-ignore
import { ClienteAvatar } from "../models/cliente-avatar.ts";
// @ts-ignore
import { ClienteDocumentos } from "../models/cliente-documentos.ts";
// @ts-ignore
import { ClienteHistoricoAcesso } from "../models/cliente-historico-acesso.ts";
// @ts-ignore
import { ClienteService } from "../models/cliente-service.ts";
// @ts-ignore
import { ClienteEmail } from "../models/cliente-emails.ts";

export module Facade {
  export class ClienteFacade {
    private clienteAvatar: ClienteAvatar;
    private clienteDocumentos: ClienteDocumentos;
    private clienteHistoricoAcesso: ClienteHistoricoAcesso;
    private clienteService: ClienteService;
    private clienteEmail: ClienteEmail;

    constructor(private cliente: Cliente) {
      this.clienteAvatar = new ClienteAvatar(cliente);
      this.clienteDocumentos = new ClienteDocumentos(cliente);
      this.clienteHistoricoAcesso = new ClienteHistoricoAcesso(cliente);
      this.clienteService = new ClienteService(cliente);
      this.clienteEmail = new ClienteEmail(cliente);
    }

    removeConta() {
      this.clienteAvatar.remove();
      this.clienteDocumentos.delete();
      this.clienteHistoricoAcesso.remove();
      this.clienteService.delete();
      this.clienteEmail.envioRemocaoConta();
    }
  }
}
