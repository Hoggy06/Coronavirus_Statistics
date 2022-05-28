import { numberWithCommas, percent } from "./functions.js";
export async function cases() {
  try {
    let request = await fetch(
      `https://covid-api.mmediagroup.fr/v1/cases?country=${select.value}`
    );
    let response = request;
    let data = await response.json();
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
      cas_guéris: data.All.recovered,
      décès: data.All.deaths,
      espérance_de_vie: data.All.life_expectancy,
      élévation_en_mètres: data.All.elevation_in_meters,
      iso: data.All.iso,
      maj: data.All.updated,
    };
    const obj = {};
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
            <td>${
              data.All.country
                ? data.All.country
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Capitale</td>
            <td>${
              data.All.capital_city
                ? data.All.capital_city
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Continent</td>
            <td>${
              data.All.continent
                ? data.All.continent
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Lieu</td>
            <td>${
              data.All.location
                ? data.All.location
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Abbreviation</td>
            <td>${
              data.All.abbreviation
                ? data.All.abbreviation
                : `<button class="button is-warning">Non communiqué</button>`
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
              numberWithCommas(data.All.recovered) !== "0"
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
            <td>${
              data.All.iso
                ? data.All.iso
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
          <tr>
            <td>Mise à jour</td>
            <td>${
              data.All.updated
                ? data.All.updated
                : `<button class="button is-warning">Non communiqué</button>`
            }</td>
          </tr>
        </tbody>
      </table>`;

    document.querySelector("#cases").innerHTML = content;
  } catch (error) {
    console.log(error);
  }
}
