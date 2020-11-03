import Vue from "vue";
let a = 'aaa';
console.log('other error 1');

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
        }
    }
});
