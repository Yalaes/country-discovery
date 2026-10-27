// Transform - Parse datas
export function prepareCountry(country) {
  return {
    name: country.name,
    flagIcon: country.flag,
    flagUrl: country.flags.svg,
    capital: country.capital,
    region: country.region,
    currency:
      country.currencies?.[0]?.code ?? country.currencies?.[0]?.symbol ?? "N/A",
    language: country.languages[0].name,
    timeZone: country.timezones,
    population: country.population,
  };
}

// Suffle an array
function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
}

// shuffle and return the correct country + 3 random
export function choices_buttons(countries, country) {
  const others = countries.filter((current) => current.name !== country.name);

  const shuffleOthers = shuffle(others);
  const wrong_guesses = shuffleOthers.slice(0, 3);

  return shuffle([country, ...wrong_guesses]);
}
