import Vue from "vue";
console.log('other error 1');
import a from "../src/a.js";
import b from "../src/b.js";
a();
b();

// function reqListener () {
//     console.log(this.responseText);
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "/api/user");
//   oReq.send();
let vm = new Vue({
    el: "#app",
    data: {
        user: "Alan"
    },
    methods: {
        sayHello() {
            alert(this.user);
            import('./sayHi.js').then((module) => {
                console.log(module);
                const say = module.default;
                say();
            });
        }
    }
});
