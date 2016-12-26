## NPM

- `npm start`: inicia o servidor em desenvolvimento.
- `npm run start:prod`: inicia o servidor em produção.
- `npm run start:mock`: inicia o servidor mock.
- `npm test`: roda os testes unitários
-
## Módulos

Para criar um novo módulo, execute:

`yo digital-backend:module <nome do módulo>`

> Se você não informar o nome do módulo, você será perguntado no próximo passo

#### options

- `--nr` : remove o arquivo de rotas
- `--nc` : remove o controller
- `--nd` : remove a classe DAO
- `--nm` : remove o arquivo model
- `--nt` : remove o arquivo de teste
- `--nrm` : remove o arquivo README
- `--routes` : **boolean**. Define se o módulo deve ou não conter um arquivo de rotas
- `--controller` : **boolean**. Define se o módulo deve ou não conter um controller
- `--dao` : **boolean**. Define se o módulo deve ou não conter uma classe DAO
- `--model` : **boolean**. Define se o módulo deve ou não conter um arquivo model
- `--test` : **boolean**. Define se o módulo deve ou não conter um arquivo de teste
- `--readme` : **boolean**. Define se o módulo deve ou não conter um arquivo README
