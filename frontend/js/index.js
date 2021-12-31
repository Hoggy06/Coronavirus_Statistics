var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burma",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Diamond Princess",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "MS Zaandam",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Summer Olympics 2020",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "US",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "West Bank and Gaza",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Global",
];

let select = document.querySelector("#select");
function country() {
  for (let d = 0; d < country_list.length; d++) {
    const content = `<option class="${country_list[d]}">${country_list[d]}</option>`;
    document.querySelector("#select").innerHTML += content;
  }
}
country();
select.addEventListener("change", function (e) {
  e.preventDefault();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function percent(a, b) {
    let res = Math.round(((a * 100) / b) * 100) / 100;
    return res;
  }

  const obj = {};

  fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${select.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const countryInfos = {
        pays: data.All.country,
        capital: data.All.capital_city,
        continent: data.All.continent,
        location: data.All.location,
        abbreviation: data.All.abbreviation,
        population: data.All.population,
        km2: data.All.sq_km_area,
        latitude: data.All.lat,
        longitude: data.All.long,
        cas_confirmés: data.All.confirmed,
        cas_guéris : data.All.recovered,
        décès: data.All.deaths,
        espérance_de_vie: data.All.life_expectancy,
        élévation_en_mètres: data.All.elevation_in_meters,
        iso: data.All.iso,
        maj: data.All.updated,
      }

      obj.pays = countryInfos;

      const content = ` 

      <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Données</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pays</td>
            <td>${data.All.country ? data.All.country : `<button class="button is-warning">Non communiqué</button>`}</td>
          </tr>
          <tr>
            <td>Capitale</td>
            <td>${
              data.All.capital_city ? data.All.capital_city : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Continent</td>
            <td>${
              data.All.continent ? data.All.continent : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Lieu</td>
            <td>${data.All.location ? data.All.location : `<button class="button is-warning">Non communiqué</button>`}</td>
          </tr>
          <tr>
            <td>Abbreviation</td>
            <td>${
              data.All.abbreviation ? data.All.abbreviation : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>${
              numberWithCommas(data.All.population)
                ? numberWithCommas(data.All.population)
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Superficie</td>
            <td>${
              numberWithCommas(data.All.sq_km_area)
                ? numberWithCommas(data.All.sq_km_area) + ` km<sup>2</sup>`
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Localisation</td>
            <td>${
              data.All.lat && data.All.long
                ? `<a target="_blank" href="https://www.google.com/maps/place/${data.All.lat}+${data.All.long}/@${data.All.lat},${data.All.long},6z">Voir sur Google Maps</a>`
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Cas confirmés</td>
            <td>${
              numberWithCommas(data.All.confirmed)
                ? numberWithCommas(data.All.confirmed)
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Cas guéris</td>
            <td>${
              numberWithCommas(data.All.recovered) !== '0'
                ? numberWithCommas(data.All.recovered)
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Décès</td>
            <td>${
              numberWithCommas(data.All.deaths)
                ? numberWithCommas(data.All.deaths) +
                  " (" +
                  percent(data.All.deaths, data.All.confirmed) +
                  "%) "
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Espérance de vie</td>
            <td>${
              data.All.life_expectancy
                ? data.All.life_expectancy + ` ans`
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Elévation en mètres</td>
            <td>${
              data.All.elevation_in_meters
                ? data.All.elevation_in_meters
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>ISO</td>
            <td>${data.All.iso ? data.All.iso : `<button class="button is-warning">Non communiqué</button>`}</td>
          </tr>
          <tr>
            <td>Mise à jour</td>
            <td>${data.All.updated ? data.All.updated : `<button class="button is-warning">Non communiqué</button>`}</td>
          </tr>
        </tbody>
      </table>`;

      document.querySelector("#cases").innerHTML = content;
    })
    .catch((error) => {
      console.log(error);
    });

  fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${select.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const vaccinesInfos = {
        doses: data.All.administered,
        vaccination_complète: data.All.people_vaccinated,
        vaccination_partielle: data.All.people_partially_vaccinated
      }

      obj.vaccination = vaccinesInfos;

      const content = ` 

      <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Données</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Doses Administrées</td>
            <td>${
              numberWithCommas(data.All.administered)
                ? numberWithCommas(data.All.administered)
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Complètement vacciné</td>
            <td>${
              numberWithCommas(data.All.people_vaccinated)
                ? numberWithCommas(data.All.people_vaccinated) +
                  " (" +
                  percent(data.All.people_vaccinated, data.All.population) +
                  "%) "
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Partiellement vacciné</td>
            <td>${
              numberWithCommas(data.All.people_partially_vaccinated)
                ? numberWithCommas(data.All.people_partially_vaccinated) +
                  " (" +
                  percent(
                    data.All.people_partially_vaccinated,
                    data.All.population
                  ) +
                  "%) "
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
        </tbody>
      </table>`;

      document.querySelector("#vaccines").innerHTML = content;

    })
    .catch((error) => {
      console.log(error);
    });

    console.log(obj);
});
