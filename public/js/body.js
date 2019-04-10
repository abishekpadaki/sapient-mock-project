(() => {
    let oracleId = sessionStorage.getItem('OracleId');
    let role = sessionStorage.getItem('role');

    let feedBack = window.feedBack;
    let dataBase = window.dataBase;

    let addModal = (modalTxt,modalBtn)=>{
        var modal = document.getElementById(modalTxt);
        var btn = document.getElementById(modalBtn);
        var span = document.getElementsByClassName("close");
        btn.onclick = function () {
            modal.style.display = "block";
        }
        span[0].onclick = function () {
            modal.style.display = "none";
        }
    }

    if (role == "SuperAdmin") {
        // card.innerHTML = `<p><b>Feedback from &nbsp;</b>Gooby<b>&nbsp; to &nbsp;</b>Michael</p>`;        
    } else {
        let feeds = feedBack.filter((val) => {
            return val.OracleId == oracleId;
        });
        let details = dataBase.find((val) => {
            return val.OracleId == feeds[0].SenderOracleID;
        });

        document.getElementById('cardTitle').innerHTML = `<p><b>Feedback from &nbsp;</b>${details.FirstName}</p>`;
        document.getElementById('feedBackCardtxt').innerHTML = feeds[0].Suggestions;

        addModal('growthAreas','growth_btn');

        addModal('top5Stuff','top5_btn');

        window.onclick = function (event) {
            if (event.target == growthAreas) {
                growthAreas .style.display = "none";
            }
            if (event.target == top5Stuff) {
                top5Stuff.style.display = "none";
            }
        }


    }
})();