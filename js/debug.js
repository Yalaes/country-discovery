// looking for currency undefined // spoiler ! it's Antartica

export function debugCountriesJSON(countries) {
  countries.forEach((country) => {
    try {
      console.log(typeof country.currencies[0] !== "undefineds");
    } catch {
      console.log(`Error: ${country.name}'s currency is not define`);
    }
  });
}
