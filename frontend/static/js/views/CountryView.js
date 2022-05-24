import AbstractView from "./AbstractView.js";

import { countries } from "../index.js";

console.log(countries);

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Country");
  }

  async getHTML() {
    console.log(this.params.id);
    const countryParam = this.params.id;

    let targetCountry = [];
    countries.forEach((item) => {
      if (countryParam === item.cca3.toLowerCase()) {
        console.log(item);
        targetCountry = item;
      }
    });
    console.log(targetCountry);
    //Get currency
    
    let curr;
    let Nm;
    const currFunc=()=>{
      if(targetCountry.currencies===undefined){
        return curr="No currency";
      }
      else{
        return targetCountry.currencies[Object.keys(targetCountry.currencies)[0]].name + " "+targetCountry.currencies[Object.keys(targetCountry.currencies)[0]].symbol;
        
      }
    }  
    // console.log(curr);
    const curr = Object.values(targetCountry.currencies);
    //Get language
    const lang = Object.values(targetCountry.languages);
    //Get Native name
    const nativeName = Object.values(targetCountry.name.nativeName);

    // countries.forEach(Element =>{
    //   for(let i = 0; i <= targetCountry.borders.length; i++){
    //     if(Element.cca3 === targetCountry.borders[i]){
    //       console.log(Element.name.common);
    //     }
    //   }
    // })

    // for(let Item of targetCountry.borders){
    //   // console.log(Item);
    //   countries.forEach(Element =>{
    //     if(Item === Element.cca3){
    //       console.log(Element.name.common);
    //     }
    //   })
    // }

    let borderBtn = "";
    let borderCountryName = ""
    const borderCountries = () => {
      if(targetCountry.borders){
        targetCountry.borders.forEach((item) => {
          countries.forEach((Element) => {
            if (item === Element.cca3) {
              borderCountryName = Element.name.common;
              console.log(borderCountryName)
            }
          });
          borderBtn +=
            `
              <button class="buttons border_contry_buttons" onclick= "window.location.href = '/countries/${item.toLowerCase()}';"> ${borderCountryName}</button>
            `;
          })
      }else{
        borderBtn = 'No borders';
      };
      return borderBtn;
    };

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
                <div class="body_except_for_header">
                    <div class="go_back_div">
                        <button class="go_back_button buttons" onclick= "window.location.href = '/countries';">Back</button>
                    </div>
                    <div class="country_details">
                        <div class="flag_view_div">
                            <img class="flag_view" src=${
                              targetCountry.flags.png
                            } alt="flag">
                        </div>
                        <div class="details_all">
                            <div class="details_left">
                                <div class="headings_div country_heading">
                                    <h1 class="h1_classes">${
                                      targetCountry.name.common
                                    }</h1>
                                </div>
                                <div class="headings_div">
                                    <h3 class="h3_classes">Native Name:</h3>
                                    <p class="p_classes">${
                                      nativeName[0].official
                                    }</p>
                                </div>
                                <div class="headings_div">
                                    <h3 class="h3_classes">Population:</h3>
                                    <p class="p_classes">${
                                      targetCountry.population
                                    }</p>
                                </div>
                                <div class="headings_div">
                                    <h3 class="h3_classes">Region:</h3>
                                    <p class="p_classes">${
                                      targetCountry.region
                                    }</p>
                                </div>
                                <div class="headings_div">
                                    <h3 class="h3_classes">Sub Region:</h3>
                                    <p class="p_classes">${
                                      targetCountry.subregion
                                    }</p>
                                </div>
                                <div class="headings_div">
                                    <h3 class="h3_classes">Capital:</h3>
                                    <p class="p_classes">${
                                      targetCountry.capital
                                    }</p>
                                </div>
                                <div class="border_countries">
                                    <div>
                                        <h3 class="h3_classes">Border Countries:</h3>
                                    </div>
                                    <div class="border_buttons_all">
                                        ${borderCountries()}
                                    </div>
                                </div>
                            </div>
                            <div class="details_right">
                                <div class="headings_div">
                                    <h3 class="h3_classes">Top level domain:</h3>
                                    <p class="p_classes">${
                                      targetCountry.tld[0]
                                    }</p>
                                </div>
                                <div class="headings_div">
                                    <h3 class="h3_classes">Currencies:</h3>
                                    <p class="p_classes">${currFunc()}</p>
                                </div>
                                <div class="headings_div">
                                    <h3 class="h3_classes">Languages:</h3>
                                    <p class="p_classes">${lang[0]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `;
  }
}
