//Import
import { cases } from "./cases.js";
import { vaccines } from "./vaccines.js";
import { country, country_list } from "./functions.js";
//Array of country
let select = document.querySelector("#button");
country_list;
country();
//Event on the select element
select.addEventListener("click", function (e) {
  e.preventDefault();
  //Retrieve cases of covid by country
  cases();
  //Retrieve number of vaccinations by country
  vaccines();
});
