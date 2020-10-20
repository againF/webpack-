let a = 'aaa';
console.log('other error 1');

function reqListener () {
    console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "/api/user");
  oReq.send();

