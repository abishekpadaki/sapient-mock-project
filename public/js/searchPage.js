var data = window.searchCards;
console.log(data);

var htmltxt=document.getElementById('main_body');
for (var key in data) {
    
    htmltxt.innerHTML +=`<div class="row">


<div class="card card_one col-md-6" style="width: 50rem;">
    <div class="card-body">
        <div class="row">
            <div class="profile_pic col-md-6">
                <img src="${data[key].profilePic}" style="width:100px;height:100px;" align="left">
                <div style="text-align: center; font-size: 20px;">
                <b>${data[key].FirstName}&nbsp;${data[key].LastName}</b><br>
                ${data[key].OracleID}<br>
                ${data[key].role}

            </div>

            </div>
            

            <div class="search_card_buttons col-md-4">
                <div class="self_fb_button" >
                    <button type="button" class="btn btn-info">Request Feedback for Self</button>
                </div>
                <div class="other_fb_button">
                                    <button type="button" class="btn btn-info">Request Feedback for someone else</button>
                </div>
            </div>

        </div>


    </div>

</div>
</div>`;
}