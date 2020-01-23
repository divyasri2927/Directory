const testFolder = '/Home';
const fs = require('fs');
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
	if(file.isDirectory){
		console.log(file);
	}else{
		//console.log(file);
 		printdir(file);
		
      }
  });
});

function printdir(files){
//console.log(files);
fs.readdir(files,(err,files) => {
	//console.log(files);
	for(let i in files) {
		if(files[i].isDirectory){
			//console.log(hii);
			//printdir(files[i]);
		
		}else{
		printdir(files[i]);
		if(i<9){
			console.log("   "+files[i]);
		}
		else{
			console.log("...others");
			break;
		}
	}
	}
	});
}

