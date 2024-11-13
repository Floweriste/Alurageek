# AluraGeek

Esse projeto não foi feito com fins lucrativos! Ele foi criado como parte de um desafio da Alura, com o objetivo de praticar habilidades de desenvolvimento web.

## Descrição

O **AluraGeek** é um site simples que permite adicionar e remover produtos de uma lista. Os usuários podem inserir informações sobre os produtos, como nome, preço e imagem, e visualizar esses itens em uma tabela. O projeto também valida a URL das imagens, garantindo que apenas links válidos para imagens PNG ou JPG sejam aceitos.

## Funcionalidades

- **Adicionar produto:** Preencha um formulário com o nome, preço e URL da imagem do produto.
- **Remover produto:** Produtos podem ser removidos da lista com um clique no botão de excluir.
- **Validação de dados:** A URL da imagem é validada para garantir que seja um link válido de imagem nos formatos PNG ou JPG.
- **Design Responsivo:** O site é responsivo e ajusta-se tanto para dispositivos desktop quanto mobile.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript** (vanilla JS)
- **API simulada:** Utilizando `json-server` para simular as requisições de back-end.

## Como Usar

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/alurageek.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd alurageek
    ```

3. Instale as dependências do servidor fake (se necessário):
    ```bash
    npm install -g json-server
    ```

4. Inicie o servidor:
    ```bash
    json-server --watch db.json
    ```

5. Abra o arquivo `index.html` no seu navegador para ver o site em funcionamento!

## Licença

Este projeto foi desenvolvido com fins educacionais e não possui fins lucrativos.
