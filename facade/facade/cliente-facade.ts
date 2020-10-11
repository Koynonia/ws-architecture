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
    static removeConta(cliente: Cliente) {
      const clienteAvatar = new ClienteAvatar(cliente);
      const clienteDocumentos = new ClienteDocumentos(cliente);
      const clienteHistoricoAcesso = new ClienteHistoricoAcesso(cliente);
      const clienteService = new ClienteService(cliente);
      const clienteEmail = new ClienteEmail(cliente);

      clienteAvatar.remove();
      clienteDocumentos.delete();
      clienteHistoricoAcesso.remove();
      clienteService.delete();
      clienteEmail.envioRemocaoConta();
    }
  }
}
