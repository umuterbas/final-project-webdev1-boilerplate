import AbstractView from "./AbstractView.js";

import { countries } from "../index.js";

// console.log(countries)

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {
        console.log(this.params.id);
        function findCountry(id) {
            for (let i = 0; i < countries.length; i++) {
                const country = countries[i];
                if (country.cca3.toLowerCase() === id) {
                    return country
                }
                
            }
            
        }
        const selectedCountry = findCountry(this.params.id);
        console.log(selectedCountry)
        
        return `<body>

        <nav>
            <section>
                <svg class="home-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
                </svg>
                <h1 class="title">Where in the world?</h1>
                <div class="dark-mode-container">
                    <svg class="dark-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z" />
                    </svg>
                    <p class="subtitle">Dark Mode</p>
                </div>
            </section>
        </nav>
        <div class="body_except_for_header">
            <div class="go_back_div">
                <button class="go_back_button buttons">Go Back</button>
            </div>
            <div class="country_details">
    
                <div class="flag_view_div">
                    <img class="flag_view" src="./flag-of-belgium-1830-svg.png" alt="flag">
                </div>
                <div class="details_all">
    
                    <div class="details_left">
    
                        <div class="headings_div country_heading">
                            <h1 class="h1_classes">Belgium</h1>
                        </div>
                        <div class="headings_div">
                            <h3 class="h3_classes">Native Name:</h3>
                            <p class="p_classes">blabla</p>
                        </div>
                        <div class="headings_div">
                            <h3 class="h3_classes">Population:</h3>
                            <p class="p_classes">blabla</p>
                        </div>
                        <div class="headings_div">
                            <h3 class="h3_classes">Region:</h3>
                            <p class="p_classes">blabla</p>
                        </div>
                        <div class="headings_div">
                            <h3 class="h3_classes">Sub Region: </h3>
                            <p class="p_classes">blabla</p>
                        </div>
                        <div class="headings_div">
                            <h3 class="h3_classes">Capital:</h3>
                            <p class="p_classes">blabla</p>
                        </div>
                        <div class="border_countries">
                            <div>
                                <h3 class="h3_classes">Border Countries:</h3>
                            </div>
                            <div class="border_buttons_all">
                                <button class="buttons border_contry_buttons">Country 1</button>
                                <button class="buttons border_contry_buttons">Country 2</button>
                                <button class="buttons border_contry_buttons">Country 3</button>
                            </div>
    
                        </div>
    
    
                    </div>
    
                    <div class="details_right">
                        <div class="headings_div">
                            <h3 class="h3_classes">Top level domain:</h3>
                            <p class="p_classes">blabla</p>
                        </div>
                        <div class="headings_div">
                            <h3 class="h3_classes">Currencies:</h3>
                            <p class="p_classes">blabla</p>
                        </div>
                        <div class="headings_div">
                            <h3 class="h3_classes">Languages:</h3>
                            <p class="p_classes">blabla</p>
                        </div>
    
    
    
                    </div>
    
                </div>
            </div>
    
        </div>
    </body>`;
        return "<h1>Country!!!!</h1>";
    }
}