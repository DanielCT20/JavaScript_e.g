//fs.mkdir(path.sync[,mode],callback)
// fs.mkdirSync(path[,mode])

//link de video
// https://www.youtube.com/watch?v=Vpb4v4G4N-c&list=PLL1UEcDHVPjkGjqM4mvAb2z9meV7jWmbd&index=9

const fs=require("fs");

const dirName = {
	sync:"createdDir1",
	async:"asyncCreatedDir"
};

function hellowordl(){
	console.log('helloworld')
}

fs.mkdir(dirName.async,(err)=>{
	if (err) {
		console.log(err.message);
	}else{
		console.log(`${dirName.asyn} created!!`)
		fs.writeFileSync(`${dirName.async}/files.js`,`(${hellowordl.toString()}())`);
	}
})
