//Use path.join, path.resolve, path.dirname, path.basename, and path.extname.
// built a function tht always return an absolute path relative to project using __dirname.
//print a "file info" object — name, extension, directory, and full path — for any filename passed in.


const path = require('path');

// console.log(path.dirname(__dirname));
// console.log(path.extname(__filename));
// console.log("filename:", __filename);

function getFileName(filename){

     const fullPath = path.resolve(__dirname, filename);// convert relative filename to absolute path
    const ext = path.extname(fullPath);
    const name = path.basename(fullPath, ext);// filename without ext
    const dir = path.dirname(fullPath);

    const projectRoot = path.join(__dirname, '..');// built a safe cross-platform path to the project root
   //'..' means going one level up.
    return{
        name, ext , dir , fullPath , projectRoot
    }
}

console.log(getFileName('notes.txt'));
console.log(getFileName(__filename));
