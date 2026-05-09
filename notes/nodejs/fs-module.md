# 📍 fs Module
fs = File System 
It allows Node.js to:
- Read files
- Write files
- Create files
- Delete files
- Rename files
- Work with folders/directories

## ✏️ Importing fs Module
**CommonJS**:
const fs = require("fs");
**Promise version(modern)**:
const fs = require("fs").promises;

## Two Main styles :
**Type**                   **Syntax**                          **Recommended**
Sync                         readFileSync()                      Small scripts
Async Callback               readFile()                          Old Style
Promise                     fs.promises.readFile()                Best

# 1) Reading Files 

**Sync Version**
const fs = require("fs");

const data = fs.readFileSync("user.json", "utf8");

console.log(data);

**Que**: why "Utf8"
because without it output is : <Buffer 7b 22>. with this output: {"name":"Sunny"}.

**Async Callback Version**:
fs.readFile("user.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

 💫**Promise Version(Modern)**
 const fs = require("fs").promises;

async function main() {
  const data = await fs.readFile("user.json", "utf8");

  console.log(data);
}

main();

# 2) Writing File :

**writeFileSync**:
fs.writeFileSync("test.txt", "Hello World");
👉Create file if not exist.
👉Overwrites existing content

✅ **writeFile (Promise)**:
await fs.writeFile("test.txt", "Hello");

# 3) Appending Data:
👉 **Adds data without deleting old content**
fs.appendFileSync("test.txt", "\nNew Line");

**Promise**:
await fs.appendFile("test.txt", "\nNew Line");

# 4) JSON HAndling (VERY IMP):
✅ **Read JSON**:
const data = fs.readFileSync("user.json", "utf8");

const user = JSON.parse(data);

console.log(user.name);

✅ **Write JSON**:
fs.writeFileSync(
  "user.json",
  JSON.stringify(user, null, 2)
);

🧠 **JSON.stringify Explained**:
JSON.stringify(user, null, 2)

user => object
null => no filtering
2 => pretty formatting

# 5) Creating Folder :

fs.mkdirSync("users");
**Promise**
await fs.mkdir("users");

# 6) Reading Folder :

const files = fs.readdirSync("./");

console.log(files);

# 7) Delete File :

fs.unlinkSync("test.txt");
**Promise**

await fs.unlink("test.txt");

# 8) Delete Folder :

fs.rmdirSync("users");

**Modern:**
await fs.rm("users", { recursive: true });

# 9) Rename File :

fs.renameSync("old.txt", "new.txt");

# 10) Check if File Exists :

if (fs.existsSync("user.json")) {
  console.log("File exists");
}

# 🧠 Sync vs Async

**Sync**
- Block code execution
- Simpler
- Bad for servers

**✅ Async** 
- Non-blocking
- Faster
- Used in real apps


# 🚨 Common Errors 
**Error**                                 **Meaning**
ENOENT                                     File not found
EACCES                                     Permission denied
SynatxError                                 Bad JSON

**🚨Most imp methods**:

**Method**                                 **Work**
readFile	                                read file
writeFile	                                overwrite/write
appendFile	                                add content
unlink	                                    delete file
mkdir	                                    create folder
readdir	                                    read folder
rename	                                     rename


**✅🧠Best Practice**:
- Performance Tip: For large files, consider using streams (fs.createReadStream and fs.createWriteStream) to avoid high memory usage.
-  Always handle errors when working with file operations to prevent your application from crashing.
- Always specify the character encoding (like 'utf8') when reading text files to get a string instead of a Buffer.
- Be extremely careful with file deletion, especially when using recursive options or wildcards. Always validate and sanitize file paths to prevent directory traversal attacks.


**File Flags:** When opening files, you can specify different modes:

- 'w' - Open for writing (file is created or truncated)
- 'wx' - Like 'w' but fails if the path exists
- 'w+' - Open for reading and writing (file is created or truncated)
- 'a' - Open for appending (file is created if it doesn't exist)
- 'ax' - Like 'a' but fails if the path exists
- 'r+' - Open for reading and writing (file must exist)
