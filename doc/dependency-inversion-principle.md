<!-- markdownlint-disable MD033 -->
# DIP — Dependency Inversion Principle (Princípio da Inversão de Dependência)

Em algumas literaturas é possível buscar por Inversão de Controle também, e que tem como diretrizes o seguinte:

> Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações;
> Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

O princípio inverte a forma como algumas pessoas podem pensar sobre o design orientado a objeto, ditando que ambos — os objetos de alto e de baixo nível — devem depender da mesma abstração.

O princípio de inversão de dependência é a raiz de muitos dos benefícios reivindicados para o paradigma da orientação a objetos. A sua aplicação apropriada é extremamente necessária, por exemplo, quando você afirma que o ponto forte da orientação a objeto é a reutilização de componentes.

## Exemplo em TypeScript ([typescript-01](../dependency-inversion-principle/typescript-01))

Neste exemplo, o Negócio é exigente em solicitar o que precisa para efetuar seu trabalho sem depedner do Framework. Pra isso o Negócio estabelece Interfaces que em suas assinaturas estabelecem um contrato de tudo o que precisa.

1. No terminal, inicializar com `npm init -y` (cria o package.json)
2. Instalar o TypeScript com `npm i typescript ts-node-dev`
3. Copiar o comando:<br /> `ts-node-dev --respawn --transpileOnly server.ts` da [página do NPM](https://www.npmjs.com/package/ts-node-dev)
4. Criar o arquivo `index.ts`.
5. Editar o [`package.json`](../dependency-inversion-principle/typescript-01/package.json) adicionando como a tag `start` o comando copiado antiormente, mas finalizando com `index.ts`.
6. Executar o comando no terminal: `npm start`.
7. Criar os arquivos `framewok.ts` e `negocio.ts`.

[![Watch the video](https://img.youtube.com/vi/vOmggR_Bul8/maxresdefault.jpg)](https://youtu.be/vOmggR_Bul8)

### Fontes

- [Erick Carvalho](https://bar8.com.br/abap-oo-dip-inversao-dependencia-principio-aaef37a9ec1d)
- [Cod3r Cursos](https://youtu.be/vOmggR_Bul8)

[Voltar](../README.md)
