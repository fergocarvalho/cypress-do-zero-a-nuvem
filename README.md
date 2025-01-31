# 🌲 Cypress, do Zero à Nuvem ☁️

👋 Seja bem-vindo(a)!

Esta é a documentação para executar os testes atutomatizados para do curso 'Cypress, do Zero à Nuvem' da escola Talking About Testing. ❤️

Link para o [curso](https://globant.udemy.com/course/testes-automatizados-com-cypress-basico/)!

## Pré-requisitos:

- git versão `2.44`
- Node.js versão `20.11.1`
- npm versão `10.2.4`

## Instalação:

- Explicar como instalar adicionando exemplo de `código`

## Testes:

- Nesse projeto você pode rodar os testes no browser `npm run cy:open` no cmd
- Para rodar os testes simulando um mobile, utilize `npm run cy:mobile:open` no cmd
- Para alterar largura e altura do mobile, altere as configurações `viewport` no arquivo `package.json`
- Para rodar os testes em formato headless, siga os passos:
    1) No arquivo `cypress.config.js` adicione `video: true,` logo abaixo de `e2e: {},`
    2) Utilize o comando `npm run cy:mobile:headless:open`

> Modo headless é quando os testes rodam sem serem exibidos em tela.

> Uma pasta `videos` é criada na pasta `cypress` do projeto, onde você pode encontrar os vídeos da execução. Remova a configuração `video: true,` para deixar de gravar os vídeos.

## Engajamento:

Se você gostou das soluções e documentação, deixe uma ⭐ neste projeto.

___

Este é um curso da **Escola Talking About Testing**.
