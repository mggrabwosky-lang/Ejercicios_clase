// 1. Pedir dos numeros al usuario y  calcule la suma, la resta, la division y la multiplicacion de estos. 
// Para producto no podemos usar el operador * . cON FUNCIONES
let a = parseInt(prompt("Introduce un numero"));
let b =parseInt(prompt("Introduce otro numero"));
//SUMA
const addNumbers =(a,b)=>{
    let result =a +b;
    return result;
}
//RESTA
const abstractNumbers =(a,b)=>{
    let result=a-b;
    return result;
}
//MULTIPLICACION
const multiplyNumbers=(a,b)=>{
let product =a;
for(let i=1;i<b;i++){
    product = product +a;
}
return product;
}
//DIVISION
const divideNumbers =(a,b)=>{
    if(b==0){
        return "ERROR: No se puede dividir entre 0";
    }else{
        let result=a/b;
        return result;
    }
}
//MOSTRAR RESULTADOS
console.log(addNumbers(a,b));
console.log(abstractNumbers(a.b));
console.log(multiplyNumbers(a,b));
console.log(divideNumbers(a,b));
