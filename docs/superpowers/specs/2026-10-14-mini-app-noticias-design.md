# Design Mini App de Notícias

## Contexto e objetivo

O projeto está no Expo SDK 57 e ainda exibe somente a tela inicial padrão. O objetivo é entregar o exercício anexado como um app Expo/React Native funcional: navegar por Notícias e Sobre, alternar entre Tecnologia e Esportes e abrir a leitura completa de qualquer notícia. O aplicativo deve seguir o uso de Expo Router definido em `AGENTS.md` e a direção visual descrita em `DESIGN.md`.

## Navegação

Expo Router será a única camada de navegação, usando layouts aninhados e rotas em `src/app/`:

- Drawer raiz com somente **Notícias** e **Sobre** como opções visíveis.
- Notícias abre abas inferiores **Tecnologia** e **Esportes**; cada aba tem seu próprio Stack.
- Cada Stack inicia na lista de sua categoria e empilha uma tela de detalhe ao selecionar um cartão. O detalhe recebe o identificador da notícia pela rota, mostra o título daquela notícia no cabeçalho e conserva a ação de voltar oferecida pelo Stack.
- A rota inicial encaminha para a lista de Tecnologia. A tela Sobre apresenta uma descrição, uma imagem local e um botão que retorna à lista inicial.
- Ícones próprios identificam as duas abas e as entradas do Drawer. Os rótulos continuam visíveis, e os botões de navegação têm área de toque confortável.

O cabeçalho do Drawer não deve duplicar os cabeçalhos dos Stacks. As telas de lista e detalhe terão acesso visível para abrir o Drawer, e os detalhes manterão o botão de voltar do Stack.

## Conteúdo e componentes

- As notícias serão fixtures locais, sem API ou conexão de rede. Cada item contém categoria, título, resumo e corpo completo.
- Um único componente reutilizável `CardNoticia` renderiza itens nas listas de Tecnologia e Esportes e recebe os dados do item por propriedade.
- Os dois arquivos de detalhe usam o identificador de rota para procurar o item na coleção da própria categoria. Um identificador desconhecido mostra uma mensagem de notícia indisponível e uma ação para voltar à lista.
- A tela Sobre inclui a imagem como asset local; não depende de carregamento remoto.

## Direção visual e acessibilidade

O app usa a paleta preto, branco e dourado e os cartões angulares descritos em `DESIGN.md`, adaptados à leitura em telas pequenas. O texto de conteúdo permanece legível e misto; o uso de caixa alta fica restrito a títulos curtos e rótulos de interface. Imagens têm descrições acessíveis, controles têm rótulos para leitores de tela e contraste suficiente para texto e ícones.

## Escopo e limites

Inclui navegação local, conteúdo de exemplo, tela Sobre e estilização suficiente para demonstrar o fluxo pedido. Não inclui backend, notícias ao vivo, pesquisa, favoritos, autenticação, notificações ou suporte a conteúdo remoto. `DESIGN.md` não será alterado; `RTK.md` não foi encontrado no projeto nem nos diretórios pais verificados.

## Critérios de aceite

1. O app abre em Notícias > Tecnologia.
2. O Drawer tem exatamente Notícias e Sobre, ambos com ícones.
3. As abas inferiores Tecnologia e Esportes têm ícones e mostram listas de suas categorias.
4. Cada cartão abre o conteúdo completo correto; o cabeçalho do detalhe mostra o título da notícia e o botão voltar retorna à lista da mesma categoria.
5. `CardNoticia` serve às duas listas.
6. Sobre mostra descrição, imagem local e um botão que volta à lista inicial.
7. O layout permanece utilizável em Android, iOS e Web e em larguras móveis.
8. `npx expo lint` e `npx tsc --noEmit` terminam sem erros.
