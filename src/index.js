import logo from "./logo.png";
console.log('logo: ');
console.log(logo);
let myImage = new Image();
myImage.src = logo;
document.body.appendChild(myImage);
let str = require('./a.js');
console.log(str);
require('./index.css');
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
