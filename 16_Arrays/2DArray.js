const name = [1, 2, 4]
const perfil = ["a", "b", "c"]

var values = [];
for (let i = 0; i < name.length; i++) {
    values.push([name[i], perfil[i]])
}

console.log(values)