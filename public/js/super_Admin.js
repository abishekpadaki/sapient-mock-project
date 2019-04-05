(function(){
  "use strict"
  var notificationDropDwn = document.getElementById('dropDownBtn');
  notificationDropDwn.addEventListener('click',()=>{
    var dropDwnCnt = document.getElementById('dropDownContent');
    dropDwnCnt.innerHTML += `<p>Sup<p>`;  
  });
})();