Aqui serão registadas as dúvidas, avanços e resoluções:

# 1. O que é o react?

[Guia Completo React e Ecossistema](https://tableless.com.br/guia-completo-react-ecossistema/)

- Não é um framework, é uma biblioteca
- Serve para criar interfaces visuais

Ecossistema React 

- React 

- JSX (Javascript XML é o que permite escrever HTML dentro do JavaScript e adicioná-los ao DOM sem utilizar métodos como createElement() ou appendChild() )

- ECMAScript 2015... (é como uma ABNT das implementações da linguagem)

- WebPack (Usa um grafo de dependências para decidir quais módulos precisam ser empacotados. Isso significa que o webpack inicia de um único módulo e processa todas as dependências direta e indiretamente para construir o gafo de dependências inteiro e então carregar todos o smódulos necessários)

- Flux/Redux (Uma das mais populares implementações de Flux para gerenciar estado em aplicações React) não entendi muito bem.

- Axios/Fecth (Axios é um cliente HTTP simples baseado em promessas para o navegador e para o node.js.O fetch() permite que você faça solicitações de rede semelhantes a XMLHttpRequest (XHR). )

-Jets/Mocha


# 2. A Segunda questão é sobre a estrutura de arquivos. "onde colocar o quê"

[Estrutura de Arquivos](https://pt-br.reactjs.org/docs/faq-structure.html)

Segundo a documentação do React não há uma estrutura preestabelecida. Mas sim, existem abordagens populares. 

1- Agrupar por funcionalidades ou rotas

ex: 

```
common/
  Avatar.js
  Avatar.css
  APIUtils.js
  APIUtils.test.js
feed/
  index.js
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  FeedAPI.js
profile/
  index.js
  Profile.js
  ProfileHeader.js
  ProfileHeader.css
  ProfileAPI.js


```

2. Agrupar por tipo de arquivo

```
api/
  APIUtils.js
  APIUtils.test.js
  ProfileAPI.js
  UserAPI.js
components/
  Avatar.js
  Avatar.css
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  Profile.js
  ProfileHeader.js
  ProfileHeader.css


```

#3 App.js - é o componente. será nesse arquivo que serão colocadas as alterações
   index.js - é onde estará a estrutura que serão colocados os componentes


#4 criei um novo componente HelloWorld - esse componente irá mostrar em tela a mensagem Hello World

#5 tentei criar dois "export default function" num mesmo componente e bugou

#6 aparentemente, não podem ser utilizados dois elementos html no return

#7 tentei entender melhorar a imagem svg (Scalable vextor graphics = Gráficos Vetoriais Escaláveis )

#8 retirei a linha de código ( <img src={logo} className="App-logo" alt="logo" />) do arquivo src/app.js. 

essa linha de código é responsável por inserir o svg logo na página web

#9 quis colocar uma div na função hello world e parece não funcionar

Acredito que seja o forma da função "export default function...", portanto buscarei mais sobre isso.

26/08/2021

#10 Aprendendo sobre components a partir da documentação reactjs.org

- Componentes do React também podem ser definidos subclassificando:

React.Component ou
React.PureComponent

- Os componentes do React também podem ser definidos como funções que podem ser agrupadas

React.memo

- É recomendado utilizar JSX para descrição de aparência de sua Interface de Usuário.

Criando Elementos:

createElement()
createFactory()

Transformando Elementos, quando se quer manipular elementos

CloneElement()
isValidElement()
React.Children()

Fragmentos, quando se quer renderizar vários elementos sem um invólucro

React.Fragment

Refs, quando se quer mexer com elementos nativos de forma imperativa

React.createRef
React.forwardRef

Suspense, quando se quer esperar algo antes da renderização. É, no momento, só é usando para carregar dinamicamente com React.lazy

React.lazy
React.Suspense

Hooks, quando se quer usar o estado e outros recursos do React sem escrever uma classe. 

Hooks básicos

  useState
  useEffect
  useContext

Hooks adicionais

  useReducer
  useCallback
  useMemo
  useRef
  useImperativeHandle
  useLayoutEffect
  useDebugValue



#11 Resolvi apagar o HelloWorld.js, pois ainda não sei resolver o bug que estava dando

#12 criando diversos componentes e encadeando eles


#13 um passo atrás - Estudando JavasCript

