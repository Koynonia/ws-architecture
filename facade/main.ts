// @ts-ignore
import { Cliente } from "./models/cliente.ts";
// @ts-ignore
import { ClienteAvatar } from "./models/cliente-avatar.ts";
// @ts-ignore
import { ClienteDocumentos } from "./models/cliente-documentos.ts";
// @ts-ignore
import { ClienteHistoricoAcesso } from "./models/cliente-historico-acesso.ts";
// @ts-ignore
import { ClienteService } from "./models/cliente-service.ts";
// @ts-ignore
import { ClienteEmail } from "./models/cliente-emails.ts";

const fernando = new Cliente(
  "Fernando M. Oliveira",
  "fernandomoliveira",
  "fernando@mail.com"
);

const clienteAvatar = new ClienteAvatar(fernando);
const clienteDocumentos = new ClienteDocumentos(fernando);
const clienteHistoricoAcesso = new ClienteHistoricoAcesso(fernando);
const clienteService = new ClienteService(fernando);
const clienteEmail = new ClienteEmail(fernando);

clienteAvatar.remove();
clienteDocumentos.delete();
clienteHistoricoAcesso.remove();
clienteService.delete();
clienteEmail.envioRemocaoConta();
