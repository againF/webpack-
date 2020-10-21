// import logo from "./asset/image/logo.png";
import logo from "Image/logo.png";
console.log('mode: ', MODE);

console.log('logo3: ');
console.log(logo);
let myImage = new Image();
myImage.src = logo;
document.body.appendChild(myImage);
let str = require('./a.js');
console.log(str);
require('./asset/css/index.css');
// require('./index.less')

let fn = () => {
    console.log('箭头函数');
};
fn();
// @log
// class A {
//     a = 1;
// }
// let a = new A();
// console.log(a);
// function log(target) {
//     console.log(target, '23')
    
// }
