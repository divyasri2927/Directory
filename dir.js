//REQUIREMENTS
// 1. Pass the directory name using command line argument
// 2. Access the input directory in such a way that it should read all the files and subdirectories in it but with a condition that it should not exceed 10 contents .
// 3. If the accessed one is a sub directory repeat the accessing process as in step2
// 4. the output should be in the following manner
// mainDir
//      SubDir1
//              file11
//              file12
//              file13
//              ...others(if there are more than 10 contents)
//      subDir2
//              file21
//              file22
//      file1
//      file2
//      ...others(if there are more than 10 contents)

const testFolder = './';
const fs = require('fs');
fs.readdir(testFolder,(err, files) => {
	if(err){
	console.log(err);
	return;
	}
  	files.forEach(file => {
		if(file.isDirectory){
			console.log(file);
		}else{
 			fs.readdir(file,(err,files) => {
			console.log(file);
			for(let i in files) {
				if(i<9){
					console.log("   "+files[i]);
				}
				else{
					console.log("...others");
					break;
					}
   	 			}
    		});
	}
  });
});

