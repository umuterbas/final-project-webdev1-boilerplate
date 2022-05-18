import AbstractView from "./AbstractView.js";

// //Get DOM
// let slides = document.querySelectorAll(".slider__image");
// let navLinks = document.querySelectorAll(".slider__navlink");
// const nextButton = document.querySelector("#nav-button--next");
// const prevButton = document.querySelector("#nav-button--prev");

// let currentSlide = 0;

// const nextSlide = ()=>{
//   (currentSlide == slides.length - 1)? currentSlide = 0 : currentSlide++;
//   // console.log(currentSlide);
//   navLinkChange();
//   changeSlide();
//   resetTimer();
// }

// const prevSlide = () =>{
//   (currentSlide == 0)? currentSlide = slides.length - 1 : currentSlide--;
//   // console.log(currentSlide);
//   navLinkChange();
//   changeSlide();
//   resetTimer();
// }

// const changeSlide = ()=>{
//   for (i = 0; i < slides.length; i++) {
//     slides[i].classList.remove("active");
//   }
//   slides[currentSlide].classList.add("active");
// }

// const navLinkChange = ()=>{
//   for (i = 0; i < navLinks.length; i++) {
//     navLinks[i].classList.remove("active");
//   }
//   navLinks[currentSlide].classList.add("active");
// }

// //Click Events
// nextButton.addEventListener("click", () => {
//   nextSlide();
// });

// prevButton.addEventListener("click", ()=>{
//   prevSlide();
// })

// const autoChange = ()=>{
//   // console.log("auto");
//   navLinkChange();
//   nextSlide();
// }

// let timer = setInterval(autoChange, 5000);

// //when either button or indicator(nav links) are clicked, stop the timer and then start again
// const resetTimer = () =>{
//   clearInterval(timer);
//   timer = setInterval(autoChange, 5000);
// }

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }
    
    async getHTML() {
        // const jumpToCountriesPage = () => {
        //     window.location.href = "./Countries.js";
        // };

        const heroPage = `
            <section class="global-container">
                <header>
                    <h1>Country List</h1>
                    <i class="fa-solid fa-moon"></i>
                </header>
                <main>
                    <div class="container">
                        <div class="slider">
                            <div class="slider__slides">
                                <div id="slideshow" class="slider__image active"></div>
                                <div id="slideshow" class="slider__image"></div>
                                <div id="slideshow" class="slider__image"></div>
                                <div id="slideshow" class="slider__image"></div>
                            </div>
                            <span class="link-btn"><a href=${"./Countries.js"}>Explore the world !!</a></span>
                        </div>
                    </div>
                        <div id="nav-button--prev" class="slider__nav-button"></div>
                        <div id="nav-button--next" class="slider__nav-button"></div>
                        <div class="slider__nav">
                            <div class="slider__navlink active"></div>
                            <div class="slider__navlink"></div>
                            <div class="slider__navlink"></div>
                            <div class="slider__navlink"></div>
                        </div>
                    </div>
                </main>
            </section>
            `;
            
      return heroPage;
    }
}
