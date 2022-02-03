/*LOOPS*/
// https://dev.to/arbaoui_mehdi/old-school-loops-in-javascript-for-loop-and-foreach-3e46
const arr=[1,2,3,4]
for (let i=0;i<arr.length;i+=1){
	console.log(arr[i]);
}

arr.forEach(arr => {
 console.log(arr);
});

// https://morioh.com/p/a1ae3522cf7b
const array=[]
for (let i=0;i<10;i+=2){
	array.push(i)
}
console.log(array)


/*FUNCION FLECHA*/
// https://programandoointentandolo.com/2019/05/funciones-flecha-o-arrow-functions-en-javascript.html
// https://www.etnassoft.com/2016/06/22/las-funciones-flecha-en-javascript-parte-1/

const variable=(parametros)=>{'expresion'};
/*1*/
var hi = () => 'Hello World';
console.log(hi)
console.info( hi() );
/*2*/
var suma = (numero1, numero2) => numero1 + numero2
var a = suma(2, 3);
console.log(a)

/*3*/
var saludar = nombre => console.log(`Hola, ${nombre}`)
console.log(saludar("Iván"));


