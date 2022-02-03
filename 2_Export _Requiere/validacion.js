function isValidUser(user) {
    return user.name != "" && user.surname != "";
}

// obtencion de los usuarios

const modulo = require("./import")
const users = modulo.Usuario()

// console.log(users)

// console.log(isValidUser(users))


users.forEach((user) => {
    console.log(`El usuario ${user.name}  ${user.surname} is ${isValidUser(user) ? "valido": "Invalido" } `);
})


// //validacion
// for (key in users){
// 	x=users[key].surname 
// 	if (x!="") {
// 		console.log(x ,"is valid ");
// 	}
// 	else{
// 		console.log(x,"    la celda esta vacia");
// 	};
// }

// Operador ternario
var age = 16,
    mensaje = (age >= 18) ? "menor de edad" : "EStas ready";
console.log(mensaje)


//operador ternario
var stop = false,
    age = 16;
age > 18 ? location.assign("continue.html") : stop = true;