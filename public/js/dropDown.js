(function () {
  "use strict"

  let dataBase = window.dataBase;
  let requests = window.requests;

  let dropDwnCnt = document.getElementById('dropDownContent');

  let updateNotifications = () => {
    dropDwnCnt.innerHTML = `<h3 class="requestfb">FeedBack Requests</h3> <hr>`;
    for (let request of requests) {
      let requester = dataBase.findIndex((val) => {
        return val.OracleId == request.Requester;
      });

      let requestedFor = dataBase.findIndex((val) => {
        return val.OracleId == request.RequestedFor;
      });

      dropDwnCnt.innerHTML += `
            <span class="requestCnt">
                <b>${dataBase[requester].FirstName}</b>
                <p hidden>${dataBase[requester].OracleId}</p>
                requested Feedback for
                <b>${dataBase[requestedFor].FirstName}</b>
                <p hidden>${dataBase[requestedFor].OracleId}</p>
            </span>
            <hr>`;
    }
  }

  if (requests.length > 0) {
    let badge = document.getElementsByClassName('badge')[0];
    badge.style.visibility = "visible";
    badge.innerHTML = requests.length;
  }

  updateNotifications();

  dropDwnCnt.addEventListener('click', (event) => {

    if (event.target.tagName === "B") {
      let data = event.target.parentElement.getElementsByTagName('P');

      let badge = document.getElementsByClassName('badge')[0];
      badge.innerHTML = parseInt(badge.innerHTML) - 1;

      sessionStorage.setItem("requesterOracleId", parseInt(data[0].innerHTML));
      sessionStorage.setItem("requestedForOracleId", parseInt(data[1].innerHTML));

      if(parseInt(badge.innerHTML) == 0) {
        badge.style.visibility = "hidden";
      }

      let index = requests.findIndex((val) => {
        return ((parseInt(data[0].innerHTML) == val.Requester) && (parseInt(data[1].innerHTML) == val.RequestedFor));
      });

      requests.splice(index,1);
      updateNotifications();


      document.location.href = "./super_admin_retrive_fb.html";

    }
    if (event.target.className === "requestCnt") {
      let data = event.target.getElementsByTagName('P');

      let badge = document.getElementsByClassName('badge')[0];
      badge.innerHTML = parseInt(badge.innerHTML) - 1;

      sessionStorage.setItem("requesterOracleId", parseInt(data[0].innerHTML));
      sessionStorage.setItem("requestedForOracleId", parseInt(data[1].innerHTML));

      if(parseInt(badge.innerHTML) == 0) {
        badge.style.visibility = "hidden";
      }

      let index = requests.findIndex((val) => {
        return ((parseInt(data[0].innerHTML) == val.Requester) && (parseInt(data[1].innerHTML) == val.RequestedFor));
      });

      requests.splice(index,1);
      updateNotifications();

      // document.location.href = "./super_admin_retrive_fb.html";
    }


  });
})();