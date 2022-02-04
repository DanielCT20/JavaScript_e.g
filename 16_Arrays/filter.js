const arrPDF=[1,2,3,[2,4],1,"array","b"]
const arrDownloadFile=["c",[2,4],"b"]


// Funciona para comparar solo un datos no array
/*function filter(){

	const recolect=[];

	for (i=0;i<arrPDF.length;i++){
		recolect.push(arrPDF[i])
	}
	
	for (k=0;k<arrDownloadFile.length;k++){
		recolect.push(arrDownloadFile
			[k])
	}



	return recolect.filter((item,index,array)=>{ return array.indexOf(item)===index})
}
x=filter()
console.log(x)*/

/*PARA ARRAY selecionar el mayor*/
var totals = [
    ['john', 'test', 45],
    ['john', 'test', 46],
    ['john', 'test', 42],
    ['john', 'test', 41]
];
var biggest = totals.reduce((a, b) => a[2] > b[2] ? a : b);

console.log(biggest)