(()=>{
    "use strict";
    let role = sessionStorage.getItem("Role");
    let oracleId = sessionStorage.getItem("OracleId"); 
    
    let name = document.getElementsByClassName("name")[0];
    
    document.getElementsByClassName("oracleId")[0].innerHTML += oracleId;
    document.getElementsByClassName("roleType")[0].innerHTML += role;

    let person = dataBase.find((val) => {
        return val.OracleId == oracleId;
    });

    name.innerHTML = `<font size=5>${person.FirstName} ${person.LastName}</font>`

})();