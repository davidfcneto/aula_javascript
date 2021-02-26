function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //alert("Obrigado por Clicar!")
}

function redirecionar() {
    window.open("http://www.google.com/");
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "<p>Obrigado por passar o mouse</p>";
   // alert("Trocar Texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "<p>passe o mouse aqui</p>";
}

/*
function soma (n1, n2) {
    return n1 + n2;
}
alert (soma(5, 10));
*/


//-----------------------------------------------------------------------------

/*
//§§§§§§    DATA

var d = new Date();
alert (d); // mostra a data completa e o fuso horário
alert (d.getDay()); //a função .get tem várias funções
alert (d.getHours());
*/

//-----------------------------------------------------------------------------

//§§§§§§    ESTRUTURA DE REPETIÇÃO


//forma1************************
/*
var count;
for(count=0; count <=5; count++) {
    alert(count);
};
*/

//forma2*************************

/*var count = 0;
while (count<=5) {
    console.log (count);
    alert(count);
    count++ // ++ tem a mesma função do +1 (pega o item inicial e adiciona +1)
    //count = count+1;
}
/*

//----------------------------------------------------------------------------



/*var idade = prompt("Qual a sua idade?"); //o comando "prompt" exibe uma caixa para preenchimento
 if (idade>=18) { //de acordo com a resposta do usuário se ele tiver 18 anos ou mais aparece a msg maior de idade  
     alert("Maior de idade!")
 } else {
     alert("Menor de idade!") //se tiver menos que 18 anos aparece a mensagem menor de idade.
 }
*/

//-----------------------------------------------------------------------------------

/*var frutas = [{nome:"Maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[0].nome); //seleciona apenas o item "nome" da camada [0]
*/


/*var fruta = {nome:"Maça", cor:"Vermelha"} //traz cada item em linha separada do console
console.log(fruta.nome); //seleciona apenas o item "nome" para aparecer no console
alert(fruta.cor); //seleciona apenas o item "cor" para aparecer no popup
*/


/*var lista = ["maça", "pera", "laranja"];
console.log(lista);
console.log(lista.toString()); //converte os itens da lista em string
console.log(lista.join(" - ")); //.join substitui a virgula pelo simbolo dentro do parenteses
*/

//lista.push("uva"); //o push serve para incluir itens na lista.
//lista.pop(); //o .pop serve para excluir o último i'tem da lista.
//console.log(lista.length); // .length mostra a quantidade de itens da lista
//.console.log(lista.reverse()); //inverte a ordem dos itens da lista
//console.log(lista[1]); //o colchete seleciona apenas o item 1 da lista, as posições começam sempre com [0],[1]...




//alert(lista[1]); //o colchete selecionou como alerta apenas a palavra pera




//var nome = "David Neto";
//var n1 = 5;
//var n2 = 10;
//var frase = "O japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos.") //o comando alert mostra um texto popup no navegador com frases da string.
//console.log(nome); //ao inspecionar o elemento é possível visualizar o console na lateral superior direita de seu navegador
//console.log(n1 + n2);
//console.log(frase.replace("japão","Brasil")); // .replace troca uma palavra por outra e apresenta a frase.
//alert(frase.replace("japão","Brasil")) //.replace funciona tambaém com o comando alert
