const carouseles = document.querySelectorAll(".carousel");

carouseles.forEach(carousel => {

    let slides = carousel.querySelectorAll(".slide");
    let prev = carousel.querySelector(".prev");
    let next = carousel.querySelector(".next");
    let dotsContainer = carousel.querySelector(".dots");

    let index = 0;
    let interval;

    // Crear dots
    slides.forEach((_, i) => {

        let dot = document.createElement("span");

        dot.addEventListener("click", () => {
            showSlide(i);
            resetAuto();
        });

        dotsContainer.appendChild(dot);
    });

    let dots = dotsContainer.querySelectorAll("span");

    function showSlide(i) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        slides[i].classList.add("active");
        dots[i].classList.add("active");

        index = i;
    }

    // NEXT
    next.addEventListener("click", () => {

        index = (index + 1) % slides.length;

        showSlide(index);

        resetAuto();
    });

    // PREV
    prev.addEventListener("click", () => {

        index = (index - 1 + slides.length) % slides.length;

        showSlide(index);

        resetAuto();
    });

    // AUTO
    function autoSlide() {

        index = (index + 1) % slides.length;

        showSlide(index);
    }

    function startAuto() {

        interval = setInterval(autoSlide, 4000);
    }

    function resetAuto() {

        clearInterval(interval);

        startAuto();
    }

    // INIT
    showSlide(0);

    startAuto();

});