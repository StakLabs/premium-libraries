# 🔺 Pyramid.js

**Pyramid.js v1.0** is a powerful all-in-one JavaScript utility library developed by **StakLabs**.

Pyramid combines commonly needed developer tools into a single lightweight library, including UI helpers, charts, random generators, string utilities, data validation, storage management, formatting, browser utilities, and more.

---

# ✨ Features

- 📊 Chart.js integration
- 🔔 SweetAlert2 modal support
- 📧 Email & phone validation
- 🌐 URL validation
- 🎲 Random generators
- 🔤 String utilities
- 📦 Array & object helpers
- 💾 LocalStorage wrapper
- 📅 Date & time formatting
- 📋 Clipboard utilities
- ⬇️ File downloading
- 🎨 Color conversion tools
- 🧮 Mathematical helpers
- ⏱️ Async utilities
- 🌐 Network information logging
- ⚡ Lightweight and easy to use

---

# Installation

Pyramid.js requires the following dependencies:

### Chart.js

```
https://cdn.jsdelivr.net/npm/chart.js
```

### SweetAlert2

```
https://cdn.jsdelivr.net/npm/sweetalert2@11
```

Include them before Pyramid.js.

Example:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://staklabs.github.io/premium-libraries/pyramid.js"></script>
```

You may also simply add the code

---

# Getting Started

```javascript
pyramid.log("Hello Pyramid!");
```

Output:

```
Hello Pyramid!
```

---

# Documentation

## 🔔 Alerts & Modals

### `basicModal(message)`

Creates a basic SweetAlert popup.

```javascript
pyramid.basicModal("Hello!");
```

---

### `modal(title, text, icon)`

Creates a customizable modal.

```javascript
pyramid.modal(
    "Success",
    "Your data was saved!",
    "success"
);
```

---

### `alert(message)`

Uses the default browser alert.

```javascript
pyramid.alert("Hello!");
```

---

# 📊 Charts

## `createChart(type, labels, label, data, responsive, legendDisplay, titleDisplay)`

Creates a Chart.js chart.

```javascript
pyramid.createChart(
    "bar",
    ["January", "February"],
    "Sales",
    [20, 50],
    true,
    true,
    true
);
```

---

# 📧 Validation

## `isEmail(email)`

Checks if an email is valid.

```javascript
pyramid.isEmail("test@example.com");
```

Returns:

```javascript
true
```

---

## `isPhoneNumber(phone)`

Checks phone number format.

```javascript
pyramid.isPhoneNumber("+61412345678");
```

---

## `isURL(url)`

Checks URL validity.

```javascript
pyramid.isURL("https://staklabs.com");
```

---

# 🎲 Random Utilities

Available under:

```javascript
pyramid.random
```

---

## `pick(array)`

Selects a random array item.

```javascript
pyramid.random.pick([
    "Red",
    "Blue",
    "Green"
]);
```

---

## `number(min, max)`

Generates a random number.

```javascript
pyramid.random.number(1, 100);
```

---

## `uuid()`

Creates a UUID.

```javascript
pyramid.random.uuid();
```

---

## `string(length)`

Generates a random string.

```javascript
pyramid.random.string(10);
```

---

## `shuffle(array)`

Randomly shuffles an array.

```javascript
pyramid.random.shuffle([1,2,3,4]);
```

---

## `color()`

Generates a random hex color.

```javascript
pyramid.random.color();
```

Example:

```
#ff44aa
```

---

# 🔤 String Utilities

Available under:

```javascript
pyramid.string
```

---

## `capitalize(string)`

```javascript
pyramid.string.capitalize("hello");
```

Returns:

```
Hello
```

---

## `kebab(string)`

```javascript
pyramid.string.kebab("Hello World");
```

Returns:

```
Hello-World
```

---

## `truncate(string, length)`

```javascript
pyramid.string.truncate(
    "Long text here",
    5
);
```

Returns:

```
Long ...
```

---

# 📦 Data Types

Available under:

```javascript
pyramid.dataType
```

---

## `length(value)`

Gets the length of a value.

```javascript
pyramid.dataType.length("Hello");
```

---

## `hasValue(value)`

Checks if a value is not empty.

```javascript
pyramid.dataType.hasValue("Test");
```

---

## `isEmpty(value)`

Checks if a value is empty.

```javascript
pyramid.dataType.isEmpty("");
```

---

## `isObject(object)`

Checks if a value is an object.

---

## `isArray(array)`

Checks if a value is an array.

---

## `convert(value)`

Converts strings to numbers and numbers to strings.

```javascript
pyramid.dataType.convert("123");
```

---

## `parity(number)`

Returns:

```
Odd
```

or

```
Even
```

---

# 🧮 Array Utilities

Available under:

```javascript
pyramid.array
```

---

## `length(array)`

Returns array length.

---

## `hasValue(array)`

Checks if array contains values.

---

## `pick(array)`

Gets a random array item.

---

# ⏱️ Async Utilities

## `wait(milliseconds)`

Waits before continuing.

```javascript
await pyramid.wait(1000);
```

---

## `debounce(code, delay)`

Runs code after a delay.

```javascript
await pyramid.debounce(
`
console.log("Done");
`,
1000
);
```

---

# 📅 Formatting

Available under:

```javascript
pyramid.format
```

---

## `formatDate(date)`

Formats dates.

```javascript
pyramid.format.formatDate(new Date());
```

Example:

```
July 15, 2026
```

---

## `formatTime(date)`

Formats time.

```javascript
pyramid.format.formatTime(new Date());
```

---

# 🛠️ Object Utilities

## `unique(array)`

Removes duplicates.

```javascript
pyramid.unique([1,1,2,3]);
```

Returns:

```javascript
[1,2,3]
```

---

## `chunk(array, size)`

Splits arrays into groups.

```javascript
pyramid.chunk([1,2,3,4], 2);
```

Returns:

```javascript
[
 [1,2],
 [3,4]
]
```

---

## `clone(object)`

Creates a deep copy.

```javascript
const copy = pyramid.clone(original);
```

---

## `keys(object)`

Gets object keys.

---

## `values(object)`

Gets object values.

---

# 💾 Storage

Available under:

```javascript
pyramid.storage
```

---

## `setItem(name, value)`

Stores data.

```javascript
pyramid.storage.setItem(
"user",
{
name:"Ayaan"
}
);
```

---

## `getItem(name)`

Retrieves stored data.

---

## `removeItem(name)`

Deletes stored data.

---

## `clearItems()`

Clears all LocalStorage.

---

# 🌐 Browser Utilities

## `copy(text)`

Copies text to clipboard.

```javascript
await pyramid.copy("Copied!");
```

---

## `download(content, filename)`

Downloads content as a file.

```javascript
pyramid.download(
"Hello World",
"hello.txt"
);
```

---

## `hexToRGB(hex)`

Converts HEX colors to RGB.

```javascript
pyramid.hexToRGB("#ffffff");
```

Returns:

```javascript
{
 r:255,
 g:255,
 b:255
}
```

---

## `networkLogs()`

Displays browser network information.

```javascript
pyramid.networkLogs();
```

---

# 🧮 Math Utilities

## `average(array)`

Calculates the average value.

```javascript
pyramid.average([10,20,30]);
```

Returns:

```
20
```

---

# ⚠️ Security Notes

- `run()` and `debounce()` use JavaScript execution functions.
- Never execute untrusted user input.
- Clipboard utilities require browser permissions.
- Chart functionality requires Chart.js.
- Modal functionality requires SweetAlert2.

---

# Requirements

- Modern browser
- JavaScript ES6+
- Chart.js (optional)
- SweetAlert2 (optional)

---

# License

© StakLabs. All rights reserved.

Please do not remove StakLabs branding from Pyramid.js.

For free libraries:

https://github.com/StakLabs/Libraries

For more premium libraries:

staklabsofficial@gmail.com
