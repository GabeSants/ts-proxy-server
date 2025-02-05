# Proxy Server

Este projeto implementa um servidor proxy simples utilizando o Express.js, TypeScript e `http-proxy-middleware`. Ele encaminha as requisições para um servidor de destino configurado via variável de ambiente `TARGET_URL`.

## Tecnologias Utilizadas

- Express.js
- TypeScript
- http-proxy-middleware
- Nodemon (para desenvolvimento)
- CORS
- dotenv

## Pré-requisitos

Antes de rodar o projeto, tenha certeza de que você tem as seguintes dependências instaladas:

- Node.js
- npm (ou yarn)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/GabeSants/ts-proxy-server.git
   ```

2. Configure a URL de destino
    Crie um arquivo .env na raiz do projeto e defina a variável TARGET_URL:
    ```bash
    TARGET_URL=http://seu-destino-aqui.com
    ```

3. Inicie o servidor
    Para desenvolvimento, use:
    ```bash
    npm run dev
    ```
    Para produção, faça o build e inicie o servidor:
    ```bash
    npm run build
    npm start
    ```

4. Agora, você pode testar fazendo uma requisição para http://localhost:3000/api. O proxy irá redirecionar para o URL configurado na variável TARGET_URL.





    