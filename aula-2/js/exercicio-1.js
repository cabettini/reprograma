/*EXERCÍCIO 1*/

var camilla = 20;
var bettini = 2;

camilla + bettini

camilla / bettini

camilla - bettini

/*RESPOSTA 1*/

camilla + bettini
22
camilla / bettini
10
camilla - bettini
18

/*EXERCÍCIO 2*/

3 > 5
5 > 0
5 > 5
0 >= 1
1 > -10

/*RESPOSTA 2*/

3 > 5
false
5 > 0
true
5 > 5
false
0 >= 1
false
1 > -10
true

/*EXERCÍCIO 3*/

(10 + 40) >= (50-10)
1 > -10
(3 > 5) && (5 > 6)
(5 < 0) && (0 == 0)
(5 != 4) || (4 > 4)

/*RESPOSTA 3*/

(10 + 40) >= (50-10)
true
1 > -10
true
(3 > 5) && (5 > 6)
false
(5 < 0) && (0 == 0)
false
(5 != 4) || (4 > 4)
true

/*EXERCÍCIO 4*/

var camillaBettini = 2
var pethallaBrito = 6

if (camillaBettini > pethallaBrito) {
    console.log("é maior");
} else {
    console.log("é menor");
};

/*RESPOSTA 4*/

var camillaBettini = 2
var pethallaBrito = 6

if (camillaBettini > pethallaBrito) {
    console.log("é maior");
} else {
    console.log("é menor");
};
VM1583:7 é menor
undefined

/*EXERCÍCIO 5*/

var numero1 = 10
var numero2 = 5

if (numero1 > numero2) {
    console.log("é maior")
} else if (numero1 == numero2) {
    console.log("é igual");
} else {
    console.log("é menor");
};

---------------------------------------------

var numero1 = 10
var numero2 = 10

if (numero1 > numero2) {
    console.log("é maior")
} else if (numero1 == numero2) {
    console.log("é igual");
} else {
    console.log("é menor");
};

/*RESPOSTA 5*/

var numero1 = 10
var numero2 = 5

if (numero1 > numero2) {
    console.log("é maior")
} else if (numero1 == numero2) {
    console.log("é igual");
} else {
    console.log("é menor");
};
VM1596:5 é maior
undefined

---------------------------------------------

var numero1 = 10
var numero2 = 10

if (numero1 > numero2) {
    console.log("é maior");
} else if (numero1 == numero2) {
    console.log("é igual");
} else {
    console.log("é menor");
};
VM1592:7 é igual
undefined

/*EXERCÍCIO 6*/

var valor1 = prompt("primeiro numero")
var valor2 = prompt("segundo numero")

alert(valor1 * valor2);

/*EXERCÍCIO 7*/

var valor1 = prompt("Qual a sua idade?")

if (valor1 >= 18) {
    alert("Você já pode dirigir :)");
} else {
    alert("Você não pode dirigir ainda :(");
};

/*EXERCÍCIO 8*/

var nome = prompt("Olá! Qual sua graça?")
var genero = prompt("Qual gênero você se identifica?")

if (genero == "feminino") {
    alert("Bem-vinda, " + nome);
} else if (genero == "masculino") {
    alert("Bem-vindo, " + nome)
} else {
    alert("Bem-vindx, " + nome);
};