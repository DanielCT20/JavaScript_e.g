//fs.mkdir(path.sync[,mode],callback)
// fs.mkdirSync(path[,mode])

const fs=require("fs");

const dirName = {
	sync:"createdDir0",
	// async:"asyncCreatedDir"
};

fs.mkdirSync(dirName.sync,0o776);  /* 0 solo yo o un grupo de user 776 guest only to red */

