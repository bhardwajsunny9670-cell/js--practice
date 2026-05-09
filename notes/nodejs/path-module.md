# Path Module

 **defination:**
It's a built-in Node.js module that provides tools for handling and transforming file paths across different operating systems.

# ✏️ Key Benefits:
- Cross-platform path handling
- Path manipulation and normalization
- Easy file extension extraction
- Path resolution and joining
- Working with relative and absolute paths

## Using path module by both ways
# CommonJS :
const path = require('path');

// Destructure specific methods if needed
const { join, resolve, basename } = require('path');

# ES Module:
import path from 'path';

// Or import specific methods
import { join, resolve, basename } from 'path';

# 📌Best Practices :
- For better tree-shaking and smaller bundle sizes, import only the methods you  need when using ES modules.
- Use path.join() or path.resolve() with __dirname to build file paths in commonJS modules.
- For ES modules, use import.meta.url with fileURLToPath and dirname to get the equivalent functionality.
- When using __dirname with path.join(), you can safely use forward slashes as they'll be normalized to the correct platform separator.

# Note:
- path.join() is preferred over string concatenation with + as it handles different path separators across operating systems.
- path.resolve() is commonly used with __dirname to create absolute paths relative to the current module's location.
- The output of path.parse() can be passed to path.format() to reconstruct the path.
- When using path.format(), if the dir and root properties are provided, root is ignored.

# ✏️Syntax :
 
# Path.join()
 const path = require('path');

// Join path segments
const fullPath = path.join('/users', 'docs', 'file.txt');
console.log(fullPath); // Output depends on OS

// Handle relative paths and navigation
console.log(path.join('/users', '../system', './logs', 'file.txt'));

# path.resolve :
const path = require('path');

// 1. Resolve relative to current working directory
console.log(path.resolve('file.txt'));

// 2. Resolve with multiple segments
console.log(path.resolve('/users', 'docs', 'file.txt'));

// 3. Right-to-left processing
console.log(path.resolve('/first', '/second', 'third')); // '/second/third'

// 4. Using __dirname for module-relative paths
console.log(path.resolve(__dirname, 'config', 'app.json'));

# path.parse()
const path = require('path');

// Parse a file path
const pathInfo = path.parse('/users/docs/file.txt');
console.log(pathInfo);
/* Output on Unix/macOS:
{
  root: '/',
  dir: '/users/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

// Accessing parsed components
console.log('Directory:', pathInfo.dir); // /users/docs
console.log('Filename:', pathInfo.base); // file.txt
console.log('Name only:', pathInfo.name); // file
console.log('Extension:', pathInfo.ext); // .txt