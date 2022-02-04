/*Comparacion de Array*/


const ar=["a","b","c","d","d"]

// Compara todo vs todo hasta con su propio elemento

// for (i=0;i<ar.length;i++){
// 	for (k = 0; k < ar.length; k++) {
// 		console.log(ar[i]+"  "+ar[k])	
// 	}
// }

// compara el elemeto con los otros 

// for (i=0;i<ar.length;i++){
// 	for (k =0; k < ar.length; k++) {
// 		if	(ar[i]!=ar[k]){
// 			console.log(ar[i]+"  "+ar[k])	
// 		}
// 	}
// }


// utilizando set Utilizar Set es un método de orden O(nlogn)

/*const myset=new Set(ar)
console.log(myset)
const newar=Array.from(myset)
console.log(newar)
*/



// filtrando

// devulve todo
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6)
console.log(result)

const newarray=ar.filter(output=>{console.log(output)})

// retorna todo el array no hay filtro 
const uniq=ar.filter(array=>{return array})
console.log(uniq)

// 

const uniq1=ar.filter(
	(item,index,array)=>{return index}
	)
console.log(uniq1)


// https://es.stackoverflow.com/questions/168678/como-encontrar-repetidos-en-un-array-javascript

const uniq2=ar.filter(
	(item,index,array)=>{return array.indexOf(item) === index}
)
console.log(uniq2)