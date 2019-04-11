let role1=sessionStorage.getItem("Role")
if(role1 == "PM"){
 let row = document.getElementById('reqsa');
 row.innerHTML += 

 ` <div class="card mr-3" style="width: 32rem; height:13.2rem;">
     <div class="card-body">
         <h5>Request SA for email</h5>
             <div class="form-group">
                 <!-- <label for="firstName">Oracle ID:</label> -->
                 <input type="text" class="form-control" id="oracleId" style="width:28rem;"
                        placeholder="Candidate's Oracle ID">
             </div>

             <div class="form-group">
                 <!-- <label for="firstName">Oracle ID:</label> -->
                 <input type="email" class="form-control" id="email" placeholder="Your email id">
             </div>

             <!-- <button class="btn btn-danger" onclick="resetFunction()">Reset</button> -->
             <button type="submit" class="btn btn-primary mt-0">Submit request</button>
  
     </div>
 </div>
`
}