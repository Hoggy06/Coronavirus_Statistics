import { numberWithCommas, percent } from "./functions.js";
export async function vaccines() {
  try {
    let request = await fetch(
      `https://covid-api.mmediagroup.fr/v1/vaccines?country=${select.value}`
    );
    let response = request;
    let data = await response.json();

    const vaccinesInfos = {
      doses: data.All.administered,
      vaccination_complète: data.All.people_vaccinated,
      vaccination_partielle: data.All.people_partially_vaccinated,
    };
    const obj = {};
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
  } catch (error) {
    console.log(error);
  }
}
