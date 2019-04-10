(() => {
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

    if (role === "HR") {
        document.getElementsByClassName('dropdownRegister')[0].innerHTML += `<button class="btn btn-primary notification" id="dropDownBtn">
        <i class="fas fa-plus-square"></i>
        <span style="visibility:hidden" class="badge">0</span>
        </button>
        <div class="dropdown-content" id="dropDownContentRegister">
            <h3 class="requestfb">FeedBack Requests</h3>
        </div>`;
    }

})();