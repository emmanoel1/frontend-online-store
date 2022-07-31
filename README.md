# Boas vindas ao repositório do projeto Front-End Online Store!

Neste projeto é uma versão simplificada, sem persistência no banco de dados, de uma loja online, desenvolvido em grupo suas funcionalidades de acordo com demandas definidas em um quadro Kanban, em um cenário mais próximo ao do mercado de trabalho. A partir dessas demandas, temos uma aplicação onde os usuários poderão:

Buscar produtos por termos e categorias a partir da API do Mercado Livre;
Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
E por fim, finalizar a compra (simulada) dos itens selecionados.



# Quer Testar o APP?

https://emmanoel1-online-store.pages.dev/


# Habilidades

Nesse projeto, foram praticados:

* Métodos Ágeis
* Kanban
* Scrum
* Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz
* Praticar algumas das habilidades desenvolvidas no módulo de Front-End

# Instruções para rodar o projeto Localmente:

1. Clone o repositório
  * `git clone git@github.com:emmanoel1/frontend-online-store.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd frontend-online-store`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start`

## Documentação da API do Mercado Livre

Sua página _web_ irá consumir os dados da API do _Mercado Livre_ para realizar a busca de itens da sua loja online. Para realizar essas buscas, vocês precisarão consultar os seguintes _endpoints_:

- Para listar as categorias disponíveis:
  - Tipo da requisição: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- Para buscar por itens por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- Para buscar itens por categoria:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- Para buscar itens de uma categoria por termo (vale ressaltar, que este endpoint não necessariamente precisa receber ambos os parâmetros para funcionar):
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
- Para buscar detalhes de um item especifico:
  - Tipo de requisição: `GET`
  - Parâmetro de busca $PRODUCT_ID (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Endpoint: https://api.mercadolibre.com/items/$PRODUCT_ID
