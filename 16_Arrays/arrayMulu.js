const a=[["A","B"],["C","D"]]
const b=[["C","D"],["E","F"]]

console.log(a+"\n"+b)

console.log(a.toString())
console.log(b.toString())

console.log("***************************************")
const newestArray=[];


for (i=0;i<a.length;i++){
	newestArray.push(a[i])
}
for (i=0;i<b.length;i++){
	newestArray.push(b[i])
}



// newestArray.push(b)
console.log("***************************************")

for ( i = 0; i < newestArray.length; i++) {
	console.log(newestArray[i])
}

console.log("***************************************")

if (newestArray[1]==newestArray[2]) {
	console.log("equal")
} else {
	console.log("false")
}





console.log("***************************************")

console.log(newestArray[0][0])

const ax = [1, 2, 3];
const by = [1, 2, 3];
const equals = (ax, by) => JSON.stringify(ax) === JSON.stringify(by);
console.log(equals(ax,by))



console.log("***************************************")





function getUnique(){
	const arrx=[]
	for (i=0;i<a.length;i++){
		arrx.push(a[i])
	}
	return	arrx
}

console.log(getUnique())

console.log("***************************************")


var arr = [2, 5, 6, 3, 8, 9];
          
var newArr = arr.map(function(val, index){
            return {key:index, value:val*val};
        })
          
console.log(newArr)

console.log(arr.toString())








