(function () {
    'use strict';
    let dataBase = window.dataBase;
    let requests = window.requests;
    console.log(dataBase[0].OracleId)

    var btn = document.getElementById("loginButton");
    btn.addEventListener('click', function (e) {
        var loginId = document.getElementById("loginId").value;
        var loginPassword = document.getElementById("loginPassword").value;
        // console.log(loginId)
        // alert(loginId+" "+loginPassword);
        dataBase.forEach(function (user) {
            // console.log(user);
            if (loginId === user.OracleId && loginPassword === user.password) {
                sessionStorage.setItem("loginId", parseInt(loginId));
                sessionStorage.setItem("loginPassword", parseInt(loginPassword));
                // sessionStorage.setItem("requestedForOracleId", parseInt(data[1].innerHTML));
                if (user.role === "HR") {
                    // go to Hr dashboard
                    document.location.href = "./boards/admin.html";
                }
                else if (user.role === "PM") {
                    // go to pm dashboard
                    document.location.href = "./boards/admin.html";
                }
                else if (user.role === "CT") {
                    // go to ct dashboard
                    document.location.href = "./boards/admin.html";
                }
                else if (user.role === "Mentor") {
                    // go to ct dashboard
                    document.location.href = "./boards/admin.html";
                }
                else if (user.role === "SuperAdmin") {
                    // go to ct dashboard
                    document.location.href = "./boards/super_admin.html";
                }
            }
        });
    });
})();