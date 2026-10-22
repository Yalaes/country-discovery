// Transform - Parse datas
export function prepareCountry(country) {
  return {
    name: country.name,
    flagUrl: country.flags.svg,
    capital: country.capital,
    region: country.region,
    currency: country.currencies[0].code,
    language: country.languages[0].name,
    timeZone: country.timezones,
    population: country.population,
  };
}
