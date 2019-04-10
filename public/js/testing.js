(() => {
    "use strict";
    let dataBase = window.dataBase;
    let feedBack = window.feedBack;
    let requestedForOracleId = sessionStorage.getItem('OracleId')

    let value = dataBase.find((val) => {
        return val.OracleId === requestedForOracleId;
    });


    let table = document.getElementById('feedBacks');
    for (let fb of feedBack) {
        if (fb.OracleId == value.OracleId) {
            table.innerHTML +=
                `
            <tr>
                <th>${fb.OverallRating}</th>
                <th>${fb.ClientFocusedDelivery}</th>
                <th>${fb.Creativity}</th>
                <th>${fb.Leadership}</th>
                <th>${fb.Openess}</th>
                <th>${fb.PeopleGrowth}</th>
                <th>${fb.Relationships}</th>
                <th>${fb.MentionTechnicalSkills}</th>
                <th>${fb.MentionSoftSkills}</th>
                <td>${fb.Suggestions}</td>
                <td>${fb.GrowthAreas}</td>
                <th>${Top5Stuff}</th>
                <th>${SenderOracleID}</th>
            </tr>



            `
        }
    }
})();