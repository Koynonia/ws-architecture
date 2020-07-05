import criarNegocio, { ClienteRpository, Cliente } from "./negocio.ts";
import framework from "./framework.ts";

const repo: ClienteRpository = {
  obterClientePorId(id: number) {
    return framework.obterPorId(id);
  },
};

const c1: Cliente = criarNegocio(repo).obterClientePorId(3);

console.log(c1);
