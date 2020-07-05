export interface Cliente {
    id?: number,
    nome: string
}

// O negocio exibe o contrato do que precisa receber
export interface ClienteRpository {
    obterClientePorId(id: number): Cliente
}

// Definir as dependencias para a funcionalidades de negócio sem dependência direta com o Framework (DIP)
function criarNegocio(repo:ClienteRpository) {
    return {
        obterClientePorId(id: number): Cliente {
            return repo.obterClientePorId(id)
        }
    }
}

export default criarNegocio
