let dataBase = window.dataBase;
let requests = window.requests;


function Validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    console.log(password, confirmPassword);
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    window.dataBase.push({
        "OracleId": "0000",
        "FirstName": document.getElementById("firstName").value,
        "LastName": document.getElementById("lastName").value,
        "EmailId": document.getElementById("email").value,
        "gender": document.getElementsByName("gender").value,
        "password": document.getElementById("password").value,
        "role": document.getElementById("role").value
    });


    console.log(dataBase)

    return true;
}


//admin_pm k andar form waala
function resetFunction() {
    document.getElementById("registerForm").reset();
}

console.log(dataBase);