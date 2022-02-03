//fs.mkdir(path.sync[,mode],callback)
// fs.mkdirSync(path[,mode])

const fs=require("fs");

const dirName = {
	sync:"createdDir1",
	// async:"asyncCreatedDir"
};

function hellowordl(){
	console.log('helloworld')
}

fs.mkdirSync(dirName.sync,0o776);

fs.writeFileSync(`${dirName.sync}/file.js`,`(${hellowordl.toString()}())`);