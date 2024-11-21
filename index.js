import "./index.css";
import JS_Logo from './assets/JavaScript_logo.png';

console.log('Hello World!');
console.log([1,2,3].map(item => item+1));

const img = document.createElement("img");
img.src = JS_Logo;
document.body.append(img);