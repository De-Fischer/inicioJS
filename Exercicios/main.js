/*
Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
*/

alert("Hello word!")

/*
Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
*/

let one = 7;
let two = 5;

alert(`
 A soma das variáveis ${one} e ${two} é: ${one + two}
`)

/*
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
*/

let script = 5.1

if (typeof script === 'number') {
  alert ("A variável declarada é um número.")
} else {
  alert ("A variável declarada não é um número.")
}


/*
Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
*/

let script2 = 4

if (typeof script2 === 'string') {
  alert ("A variável declarada é uma string.")
} else {
  alert ("A variável declarada não é uma string.")
}

/*
Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
*/

let script3 = true

if (typeof script3 === 'boolean') {
  alert ("A variável declarada é um booleano.")
} else {
  alert ("A variável declarada não é um booleano.")
}

/*
Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
*/

let numberOne = 9;
let numberTwo = 4;

alert(`
 A subtração das variáveis ${numberOne} e ${numberTwo} é: ${numberOne - numberTwo}
`)

/*
Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
*/

let number1 = 5;
let number2 = 2;

alert(`
 A multiplicação das variáveis ${number1} e ${number2} é: ${number1 * number2}
`)

/*
Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
*/

let numero1 = 25;
let numero2 = 5;

alert(`
 A divisão das variáveis ${numero1} e ${numero2} é: ${numero1 / numero2}
`)

/*
Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
*/

let pair = 7;

if((pair % 2) == 0) {
  alert("O número declarado é um número par.")
} else {
  alert("O número declarado não é um número par.")
}

/*
Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

let odd = 6;

if((odd % 2) !== 0) {
  alert("O número declarado é um número ímpar.")
} else {
  alert("O número declarado é um número par.")
}