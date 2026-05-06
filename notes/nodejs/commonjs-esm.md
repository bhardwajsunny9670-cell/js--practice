# 📌 CommonJS vs ESM (ES Modules)

> **One-line definition:** Two different module systems in JS — CommonJS uses `require/module.exports`, ESM uses `import/export`.

---

## 🧠 What is it?

When your code grows, you split it into files (modules). Node.js supports two systems for this:
- **CommonJS (CJS)** → old, default in Node.js
- **ESM** → modern standard, used in browsers + Node.js (v12+)

---

## 💡 Why does it matter?

Most real-world Node/Express projects mix both. If you don't understand the difference, you'll hit weird errors like `require is not defined` or `Cannot use import statement`.

---

## 🔢 Key Differences

| Feature | CommonJS | ESM |
|--------|----------|-----|
| Syntax | `require()` / `module.exports` | `import` / `export` |
| Loading | Synchronous | Asynchronous |
| File ext | `.js` (default) | `.mjs` or `"type":"module"` in package.json |
| `__dirname` | ✅ Available | ❌ Not available (use `import.meta.url`) |

---

## 🧪 Mini Example

```js
// CommonJS
const fs = require('fs');
module.exports = { greet };

// ESM
import fs from 'fs';
export function greet() {}
```

---

## ⚠️ Common Mistakes / Gotchas

- Using `import` without setting `"type": "module"` in package.json → error
- `__dirname` doesn't work in ESM — use this instead:
```js
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
```

---



