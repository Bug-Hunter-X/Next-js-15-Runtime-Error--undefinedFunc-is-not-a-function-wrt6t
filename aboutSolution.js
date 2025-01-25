```javascript
// pages/about.js

export default function About() {
  const myFunc = definedFunc(); 
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>{myFunc}</p>
    </div>
  );
}

function definedFunc() {
  return "This function is defined!";
}
```