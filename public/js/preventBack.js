
        function noBack() { window.history.forward(); }
        noBack();
        window.onload = noBack;
        window.onpageshow = function (evt) { if (evt.persisted) noBack(); }
        window.onunload = function () { void (0); }
        window.history.forward(1);


// updated script. add in both admin.html and forgot.html pages.


  

