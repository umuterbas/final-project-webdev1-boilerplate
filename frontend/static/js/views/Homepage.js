import AbstractView from "./AbstractView.js";
// import { countries } from "../index.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }
    async getHTML() {
        const heroPage = `
            <section class="global-container">
                <header>
                    <h1>Country List</h1>
                    <i class="fa-solid fa-moon"></i>
                </header>
                <main>
                    <div class="slider-container">
                        <div class="slider">
                            <div class="slider__slides">
                                <div id="slideshow" class="slider__image active"></div>
                                <div id="slideshow" class="slider__image"></div>
                                <div id="slideshow" class="slider__image"></div>
                                <div id="slideshow" class="slider__image"></div>
                            </div>
                            <span class="link-btn"><a href=${"./Countries"}>Explore the world !!</a></span>
                        </div>
                    </div>
                </main>
            </section>
            `;
      return heroPage;
    }
}
