(function dynRender(){
    "use strict";
    let role = sessionStorage.getItem("Role");
    if (role == "HR") {
        let row = document.getElementById('');
        row.innerHTML += `<div class="card col-md-5" style="width: 15rem;">
        <div class="card-body">
            <h5>Request HR for registration</h5>
            <!-- <button onclick="myFunction()" class="mx-4 notification dropbtn"> <i class="fas fa-bell"></i> -->
            <!-- Button trigger modal -->
            
            <!-- Modal -->
            
        </div>
        </div>
        `
    }
}) ();