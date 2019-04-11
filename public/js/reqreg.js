let role = sessionStorage.getItem("Role")
if (role == "PM") {
    let row = document.getElementById('reqreg');
    
    row.innerHTML += `
<div class="card mr-3" style="width: 32rem; height:13.2rem;">
  <div class="card-body">
  <h5>Request HR for registration</h5>
    
  <!-- modal -->
  <a class="btn btn-primary" href="#openModal" role="button">Register</a>
  <div id="openModal" class="modalDialog">
  <div>
      <a href="#close" title="Close" class="close">X</a>
      <h2>Enter registration details</h2>
      <form id="registerForm" action="" method="post">
            <div class="form-group">
                <!-- <label for="firstName">Oracle ID:</label> -->
                <input type="text" class="form-control" id="firstName"
                    placeholder="First Name" pattern="([A-Za-z ]+)" required>
            </div>
            
            <div class="form-group">
                <!-- <label for="firstName">Oracle ID:</label> -->
                <input type="text" class="form-control" id="lastName"
                    placeholder="Last Name" pattern="([A-Za-z ]+)" required>
            </div>

            <div class="form-group">
                <!-- <label for="firstName">Oracle ID:</label> -->
                <input type="email" class="form-control" id="email"
                    placeholder="Email id" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
            </div>

            <div class="form-group">
                <input type="radio" name="gender" value="male" required>Male
                <input type="radio" name="gender" value="female">Female
                <input type="radio" name="gender" value="others">Others
            </div>

            <div class="form-group">
                <!-- <label for="firstName">Oracle ID:</label> -->
                <input type="password" class="form-control" id="password"
                placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
            </div>

            <div class="form-group">
                <!-- <label for="firstName">Oracle ID:</label> -->
                <input type="password" class="form-control" id="confirmPassword"
                    placeholder="Confirm password" required>
            </div>
            
            <div class="form-group">
                <select name="role" required>
                    <option value="Role" selected></option>
                    <option value="CT">CT</option>
                    <option value="Mentor">Mentor</option>
                    <option value="Trainer">Trainer</option>
                </select>
            </div>

            <!-- <button class="btn btn-danger" onclick="resetFunction()">Reset</button> -->
            <button type="submit" class="btn btn-primary" onclick="return Validate()">Register</button>
        </form>
    </div>
    </div>

  </div>
</div>

`


}
