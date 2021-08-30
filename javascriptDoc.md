https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide  

//sintaxe básica 

- javascipt é case-sensitive e usa o conjunto de caracteres Unicode. 

ex.:

var cedo = "foobar"; != var Cedo = "foobar";

- instruções são chamadas de declaração e são separadas por um ponto e vírgula (;).

- o código fonte dos scripts em JS são lidos da esquerda para a direita e são convertidos em uma sequência de elementos de entrada como símbolos, caracteres de controle, terminadores de linha, comentários ou espaço em branco. 

DECLARAÇÕES

var -> declara uma variável, opcionalmente, inicializando-a com um valor. (tem escopo global caso seja declarada fora de uma função e local caso seja declarada dentro de uma função)

quando se declara uma variável global var, está se adicionando essa variável na lista de propriedades do Objeto Global. 

ex.:  (em uma navegador de internet, o objeto global é window)

var a = 10;
console.log(window.a)   //10


se caso fosse usado o let

let a = 10;
console.log(window.a)  //undefined


let -> declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor. (as variáveis que ela declara possui escopo de bloco)

ex.:

let variable_name;

let x = 10;  //o let declara uma variável com escopo de bloco
if (x == 10){
    let x = 20; //portanto, essa é nova variável e sombreia a variável x de cima
    console.log(x);
}
console.log(x); //e essa variável referencia a do começo do script



const -> declara uma constante de escopo de bloco, apenas de leitura.


HOSTING

Em JavaScript, toda variável é "elevada" até o topo do seu contexto de execução. 


