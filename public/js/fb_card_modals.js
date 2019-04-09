

var data = window.feedBack;
console.log(data);

var htmltxt=document.getElementById('main_body');
for (var key in data) {
    
    htmltxt.innerHTML += `<div class="row"><div class="card card_one col-md-8" style="width: 50rem;"><div class="card-body"><div class="row fb_card_title"><p><b>Feedback from &nbsp;</b>Gooby<b>&nbsp; to &nbsp;</b>Michael</p>
        </div >
        <div class="row fb_text">
            <p><b>"</b>${data[key].Suggestions}<b>"</b></p>
        </div>
        <div class="row fb_card_links">
            <button class="btn btn-danger" id="growth_btn">Growth Areas</button>&nbsp; &nbsp; <button
                class="btn btn-danger" id="top5_btn">Top 5</button>

            <div id="myModal" class="modal">

                <!-- Modal content -->
                    <div class="modal-content">
                    <div class="close">&times;</div>
                    <h4 style="color: red;">Growth Areas</h4>
                    ${data[key].GrowthAreas}
                    </div>


            </div>

            <div id="myModal2" class="modal">

                <!-- Modal content -->
                    <div class="modal-content">
                    <div class="close2">&times;</div>
                    <h4 style="color: red;">Top 5 stuff</h4>
                    <p>He is wow</p>
                    <p>Amaze core values</p>
                    <p>Full openness</p>
                    <p>super communication</p>
                    <p>Very leadership material</p>

                </div>


            </div>
        </div>
        <div class="row fb_card_rating">
            <b>Rating:&nbsp;</b> <i class="far fa-star"></i> &nbsp;<b>${data[key].Ratings}</b>
        </div>
        </div >
    </div >
</div >
</div >`;

}