# React + Vite

Neste projeto, desenvolvi um componente de card de perfil utilizando duas abordagens de estilização: Tailwind CSS e Styled-Components. O objetivo foi explorar as diferenças entre essas duas formas de estilizar componentes e entender as vantagens e desvantagens de cada uma, além de integrar o consumo de dados de uma API pública do GitHub para buscar perfis de usuários.

Estrutura do Projeto O projeto foi dividido em duas principais páginas, onde cada uma utiliza uma abordagem diferente de estilização:

Página com Tailwind CSS: Utiliza a biblioteca Tailwind CSS para estilizar o componente de maneira utilitária, criando um design responsivo e flexível com classes prontas.

Página com Styled-Components: Usa a biblioteca Styled-Components para criar componentes com estilos diretamente ligados ao JSX, permitindo que a estilização seja modular e encapsulada.

Funcionalidade A funcionalidade principal do projeto é permitir que o usuário digite o nome de um usuário do GitHub e visualize o card de perfil desse usuário, com informações como nome, bio e foto de perfil. O perfil é buscado por meio da API pública do GitHub, que fornece esses dados em formato JSON.

Como Funciona Input de usuário: O usuário pode digitar o nome do perfil GitHub na barra de pesquisa.

Busca na API: Ao clicar no botão de busca, a aplicação faz uma requisição para a API do GitHub para buscar os dados desse usuário.

Exibição do Card: Assim que os dados são recuperados, o perfil é exibido em um card estilizado de acordo com a página selecionada, seja com Tailwind CSS ou Styled-Components.

O que foi utilizado React para a construção da aplicação.

React Router para gerenciar as rotas e permitir a navegação entre as páginas com as duas abordagens de estilização.

Tailwind CSS para a estilização da primeira versão do card de perfil, utilizando uma abordagem baseada em classes utilitárias.

Styled-Components para a segunda versão, criando componentes de estilo diretamente ligados ao JSX.

API do GitHub para buscar dados de perfil de usuários.
