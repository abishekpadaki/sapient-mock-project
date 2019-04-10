let role = sessionStorage.getItem("Role")
if (role == "PM") {
    let row = document.getElementById('reqreg');
    row.innerHTML += `                    <div class="card mr-5 col-md-5" style="width: 15rem;">
    <div class="card-body">
        <h5>Request HR for registration</h5>
        <button type="button" class="btn btn-primary" data-toggle="modal"
            data-target="#registerModal">
            Register
        </button>

        <!-- Modal -->
        <div class="modal fade" id="registerModal" tabindex="-1" role="dialog"
            aria-labelledby="registerModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="registerModalLabel">Enter registration details
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="registerForm" action="" method="post">
                            <div class="form-group">
                                <!-- <label for="firstName">Oracle ID:</label> -->
                                <input type="text" class="form-control" id="firstName"
                                    placeholder="First Name">
                            </div>

                            <div class="form-group">
                                <!-- <label for="firstName">Oracle ID:</label> -->
                                <input type="text" class="form-control" id="lastName"
                                    placeholder="Last Name">
                            </div>

                            <div class="form-group">
                                <!-- <label for="firstName">Oracle ID:</label> -->
                                <input type="email" class="form-control" id="email"
                                    placeholder="Email id">
                            </div>

                            <div class="form-group">
                                <input type="radio" name="gender" value="male">Male
                                <input type="radio" name="gender" value="female">Female
                                <input type="radio" name="gender" value="others">Others
                            </div>

                            <div class="form-group">
                                <!-- <label for="firstName">Oracle ID:</label> -->
                                <input type="password" class="form-control" id="password"
                                    placeholder="Password">
                            </div>

                            <div class="form-group">
                                <!-- <label for="firstName">Oracle I
                                D:</label> -->
                                <input type="password" class="form-control" id="confirmPassword"
                                    placeholder=" Confirm password">
                            </div>
                            <!-- <button class="btn btn-danger" onclick="resetFunction()">Reset</button> -->
                            <button type="submit" class="btn btn-primary">Register</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-secondary"
                            data-dismiss="modal">Close</button> -->
                        <button class="btn btn-danger" onclick="resetFunction()">Reset</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
`
}
