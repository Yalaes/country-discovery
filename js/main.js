// Get JSON from api.js
import { getCountries } from "./api.js";
import { prepareCountry } from "./countries.js";
import { display_ui } from "./ui.js";

let countries = [];
// call when page is loaded , else countries[] allready assigned
async function start() {
  try {
    countries = await getCountries();
    console.log(`${countries.length} countries loaded`);
    showNext();
    nextDebugButton();
  } catch (error) {
    console.log(error);
  }
}

// get a random contry
function pick_random_country() {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
}

// game loop
function showNext() {
  const rawCountry = pick_random_country();
  //   parse only what we will display
  const country = prepareCountry(rawCountry);

  display_ui(country);
  console.log(country);
}

function nextDebugButton() {
  const debugButton = document.querySelector("#next");
  debugButton.addEventListener("click", () => {
    showNext();
  });
}
start();
