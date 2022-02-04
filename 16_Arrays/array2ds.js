/*********************************************/ 
// Incremento multiple
// for (i = 0, j = 5; i < 5; i++, j--) {
//   console.log("Valor de i y j:", i, j);
// }
/*********************************************/ 


const desayuno=[["a","b"],["c","d"]]
const desayuno_1=[["c","d"],["e","f"]]

// const desayuno=[["pan","huevo"],["pan","galleta"],["pan","jamon"],["luio","aa"]]
// const desayuno_1=[["pan","huevo"],["pan","mermelada"]]

 // console.log(desayuno.length)
 // console.log(desayuno_1.length)



// Selecciona el array de mayor longitud
function maxLen(arrx,arry){

	if (desayuno.length>desayuno_1.length)
	{
		return desayuno.length
	}else
	{
		return desayuno_1.length
	}

} 
length=maxLen(desayuno,desayuno_1)


// Compara los primeros elementos de un array
// const arrz=[];
// const arrDuplicate=[];
// function pusharrz(){
// 	for (i=0,j=0;i<length;i++,j++)
// 	{
// 		if(JSON.stringify(desayuno[i]) != JSON.stringify(desayuno_1[j]))
// 		{
// 			arrz.push(desayuno[i])
// 			arrz.push(desayuno_1[i]) 
// 		}
// 		else if(JSON.stringify(desayuno[i]) == JSON.stringify(desayuno_1[j]))
// 		{
// 			arrDuplicate.push(desayuno[i])
// 		}
// 	}
// 	return arrDuplicate.concat(arrz).filter(Boolean)
// }
// const x=pusharrz()
// console.log(x)



const ar=[["a","b"],["c","d"],["c","d"]]

// compara el elemeto con los otros 

for (i=0;i<1;i++){
	for (k =0; k < ar.length; k++) {
		if	(JSON.stringify(ar[i])!=JSON.stringify(ar[k]))
		{
			console.log(ar[i]+"  "+ar[k])	
		}
	}
}













