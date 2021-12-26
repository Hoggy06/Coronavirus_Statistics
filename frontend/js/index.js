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

  fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${select.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const content = ` 

      <table class="table is-striped">
        <thead>
          <tr>
            <th>Pays</th>
            <th>Capitale</th>
            <th>Continent</th>
            <th>Lieu</th>
            <th>Abbreviation</th>
            <th>Population</th>
            <th>Superficie</th>
            <th>Coordonnées</th>
            <th>ISO</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>${data.All.country}</td>
          <td>${data.All.capital_city}</td>
          <td>${data.All.continent}</td>
          <td>${data.All.location}</td>
          <td>${data.All.abbreviation}</td>
          <td>${numberWithCommas(data.All.population)}</td>
          <td>${numberWithCommas(data.All.sq_km_area)} km²</td>
          <td>
            <a href="http://www.google.com/maps/place/${data.All.lat},${
        data.All.long
      }">Localisation sur Google Maps</a>
          </td>
          <td>${data.All.iso}</td>
        </tr>
      </tbody>
      </table>

      <nav class="level is-full-tablet">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Cas confirmés</p>
      <p class="title">${numberWithCommas(data.All.confirmed)}</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Cas guéris</p>
      <p class="title">${numberWithCommas(data.All.recovered)}</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Décès</p>
      <p class="title">${numberWithCommas(data.All.deaths)}</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Mise à jour</p>
      <p class="title">${data.All.updated}</p>
    </div>
  </div>
</nav>
      
      `;

      document.querySelector("#result").innerHTML = content;
    })
    .catch((error) => {
      console.log(error);
    });
});

/*
"life_expectancy":"78.8",
"elevation_in_meters":375*/
