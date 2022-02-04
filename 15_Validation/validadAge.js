function equal18(myEdad){
	return "preadolescente"
}

function menor18(myEdad){
	return "pivito"
}

function mayor18(myEdad){
	return "grande mijo"

}

function validate(value){
	try {
		if (0>value){return "hell monster you don't have this age"}
		else if (18<value){return mayor18(value)}
		else if(18===value){return equal18(value)}
		else if(18>value){return menor18(value)}
		else{ return 'write a number bitch'}
	}catch(e){
	return "hello bitch"
	}
}


console.log(validate("how"))

