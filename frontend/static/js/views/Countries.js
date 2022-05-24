import AbstractView from "./AbstractView.js";
import { countries } from "../index.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {

        console.log(countries);

        const countryCards = () =>{
            let card ='';
                countries.forEach(element => {
                    card += `
                    <div class="country-card" >
                        <img class="country-img"src="${
                          element.flags.png
                        }" alt=""></img>
                            <div class="country-info">
                                <h3 class="margin-bottom margin-top" id="nam">${
                                  element.name.common
                                }</h3>
                                <div class="flex"><p class="margin-right"><b>Population:</b> </p><p> ${element.population.toLocaleString(
                                  "en-US"
                                )}</p></div>
                                <div class="flex" ><p class="margin-right" ><b>Region:</b> </p><p>${
                                  element.region
                                }</p></div>
                                <div class="flex" ><p class="margin-right" ><b>Capital:</b> </p><p>${
                                  element.capital
                                }</p></div>
                                <button onclick= "window.location.href = '/countries/${element.cca3.toLowerCase()}'">See more details</button>
                            </div>
                    </div>`;
                });
            return card;
        }

        return `
        <nav>
        <section>
        <i class="fa-solid fa-house home-icon fa-2x"></i>
                
            <h1 class="title">Where in the world?</h1>
            <div class="dark-mode-container">
            <i class="fa-solid fa-moon fa-2x"></i>
                <p class="subtitle">Dark Mode</p>
            </div>
        </section>
    </nav>

            <section class="input-container">
                <div class="input">
                    <div class="search-bar-container center">
                        <figure class="center" id="searchBtn"><i class="fa-solid fa-magnifying-glass search-icon"></i></figure>
                        <input name="word" id="searchBar" class="search-bar" type="text" placeholder="Search for a country..">
                    </div>
                    <div class="dropdown">
                        <div class="dropdown-menu">
                            <button class="dropbtn">Filter by Region</button>
                                <div class="dropdown-content">
                                    <a class="dropdown-item" id="africa">Africa</a>
                                    <a class="dropdown-item"id="america">America</a>
                                    <a class="dropdown-item" id="asia" >Asia</a>
                                    <a  class="dropdown-item" id="europe" >Europe</a>
                                    <a class="dropdown-item" id="oceania" >Oceania</a>
                                </div>
                        </div>
                        <svg class="caret-down"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>
                    </div>
                    </div>
                </div>
            </section>
            <main class="country-list-main">
            ${countryCards()}
            </main>`;
    }

    

}


