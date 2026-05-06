# 📌 Async JavaScript

> **One-line definition:** JS is single-threaded but handles async tasks using the Event Loop, Callbacks, Promises, and async/await without blocking execution.

---

## 🧠 What is it?

JavaScript runs one thing at a time (single thread). But some tasks like fetching data or reading files take time. Async JS lets us start those tasks and move on — then come back when done.

---

## 💡 Why does it matter?

Every Node.js app is built on this. Without understanding async, you'll write buggy servers that block on every DB call or API request.

---

## 🔢 Key Concepts

- **Callback** → function passed into another function, called when done
- **Promise** → object representing future value (pending → fulfilled/rejected)
- **async/await** → cleaner syntax over Promises
- **Event Loop** → picks tasks from queue when call stack is empty

---

## 🧪 Mini Example

```js
// Callback
setTimeout(() => console.log("Done!"), 1000);

// Promise
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// async/await
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

## ⚠️ Common Mistakes / Gotchas

- Forgetting `await` → you get a Promise object, not the value
- Not wrapping await in try/catch → unhandled errors crash your app
- Callback hell → fix with Promises or async/await

---

## 🔗 Resources

- [x] Apna College lecture: Async JS
- [x] MDN: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous

---

## 🗓️ Date Studied: May 2026 ✅
