import { Cliente } from "./models/cliente";
import { ClienteAvatar } from "./models/cliente-avatar";
import { ClienteDocumentos } from "./models/cliente-documentos";
import { ClienteHistoricoAcesso } from "./models/cliente-historico-acesso";
import { ClienteService } from "./models/cliente-service";
import { ClienteEmail } from "./models/cliente-emails";

const fernando = new Cliente(
  "Fernando M. Oliveira",
  "fernandomoliveira",
  "fernando@gmail.com"
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
