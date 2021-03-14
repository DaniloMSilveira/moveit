<h1 align="center">
  <img width="400px" src="./.github/images/logo-full.svg" />
</h1>

## :page_facing_up: Descrição
O Move.it é um app web disponível para ajudas as pessoas que ficam muito tempo no computador a praticar alguns exercícios (disponibilizados como desafios) para evitar possíveis dores musculares e problemas de visão.

Ele utiliza a <a href="https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro">Ténica de Pomodoro</a> para realizar o gerenciamento do tempo em ciclos, e quando o ciclo se acaba é encaminhado um alerta para o usuário e um novo desafio a ser cumprido.

## :art: Protótipo
Você pode acessar o protótipo pelo <a href="https://www.figma.com/file/ge20pu3ofMOKoliUyKx1Nl/Move.it-1.0">Figma<a>.

## 🛠 Tecnologias
Este projeto foi desenvolvido com as seguintes tecnologias

- [Next.js](https://nextjs.org/)
- [React.js](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## :clipboard: Funcionalidades (NLW)
- [x] Iniciar um ciclo.
- [x] Abadornar ciclo.
- [x] Dispara uma notificação (com som) quando o ciclo acaba.
- [x] Libera um novo desafio quando o ciclo acaba.
- [x] Usuário ganha XP a cada desafio concluído.
- [x] Usuário pode subir de nível.
- [x] Perfil com dados do usuário, seu atual nível e quantidade de desafios concluídos.
- [x] Barra de progressão para o próximo nível e sua XP atual.

## :clipboard: Adicionais e Melhorias (Danilo Martin)
- [x] Criar API para salvar as informações e retirar utilização de cookies.
- [] Criar tela de login com o campo para o usuário preencher seu login do GitHub.
- [x] Criar autenticação no sistema com login do GitHub.
- [] Criar botão para que o usuário consiga mudar o tempo do ciclo.
- [] Criar som para a exibição do modal do Level UP e estilizar com efeito de transição suave.
- [] Melhorar a responsividade do site.
- [] Criar tema dark/light.
- [] Criar pagina de ranking com o level e experiencia de outros usuários (Podendo selecionar entre 5, 10, 30 e 50).
- [] Deixar os desafios salvos no banco de dados e criar página exibindo a quantidade que o usuário concluiu de cada desafio (nova pagina customizada com SSR) ao clicar em sua foto de perfil.


## :closed_book: Instalação

```bash
# Clone este repositório.
$ git clone https://github.com/DaniloMSilveira/moveit.git

# Vá para a pasta client (onde está o projeto WEB)
$ cd client

# Instale as dependências
# NPM
$ npm install 
# YARN
$ yarn

# Execute aplicação
# NPM
$ npm run dev
# YARN
$ yarn dev
 
# O app vai está rodando na porta 3000 - http://localhost:3000
```

## :man: Autor
Feito com ❤️ por Danilo Martin :wave:🚀
