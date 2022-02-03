console.log("hellow")

function mayor(value){
	if (value>18) {return "grande mijo"} else {throw `error`}
}

function menor(value){
	if (value<18) {return "chiquito"} else {throw `error`}
}

function elideal(value){
	if (value===18) {return "recien llegado"} else {throw `error`}
}


function validate(value){
	try{menor(value);}
	catch(e){`mayor(value)`;}
}

console.log(menor(13))


