# Node Typescript Template

Template de uma aplicação em NodeJS com as principais ferramentas utilizadas normalmente em um projeto já instaladas, como:
- Typescript (incluindo `paths aliases`)
- Express ([link](https://expressjs.com/))
- ts-node-dev ([link](https://github.com/whitecolor/ts-node-dev))
- ESLint ([link](https://eslint.org))
- Babel ([link](https://babeljs.io/))
- Jest ([link](https://jestjs.io/))
- Supertest ([link](https://github.com/visionmedia/supertest))
- Bunyan ([link](https://github.com/trentm/node-bunyan))
- Socket<span></span>.io ([link](https://socket.io))

Ainda existem outras ferramentas que pretendo incluir futuramente, mas fique à vontade para mandar seu PR caso queira contribuir:
- TypeORM
- DotEnv

## Como usar

> **Modo de Produção**:
>
> Para subir o servidor em modo de produção, o template usa automaticamente HTTPS.
>
>  Para tanto, é necessário adicionar seus certificados na pasta `/ssl`, no lugar dos arquivos `server.crt` e `server.key`.crt

De acordo com o ambiente, execute os comandos abaixo:

```bash
# para instalação das dependências
yarn

# para subir o projeto em modo de desenvolvimento
yarn dev

# para subir o projeto em produção
yarn build
yarn start

# para todas os testes
yarn test
```
