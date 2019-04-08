(() => {

    let slideIndex = 1;


    let showSlides= (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    showSlides(slideIndex);

    let prev = document.getElementsByClassName('prev');
    let next = document.getElementsByClassName('next');
    prev[0].addEventListener('click', ()=>{
        showSlides(slideIndex -= 1);
    });
    next[0].addEventListener('click',()=>{
        showSlides(slideIndex += 1);
    });

})();