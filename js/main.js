// Get JSON from api.js
import { getCountries } from "./api.js";
import { prepareCountry, choices_buttons } from "./countries.js";
import { display_ui, get_buttons, listen_buttons } from "./ui.js";
// for debug only
import { debugCountriesJSON } from "./debug.js";

let score = 0;
const scoreID = document.querySelector("#score-number");
let countries = [];

// Fetch only load page, else countries[] allready assigned
async function start() {
  try {
    countries = await getCountries();
    console.log(`${countries.length}`);
    // game loop
    showNext();
    // add click event to the next button
    nextButton();
    // debugCountriesJSON(countries);
  } catch (error) {
    console.log(error);
  }
}

// get a random contry
function pick_random_country() {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
}

// update the score (first strike streak)
listen_buttons(() => {
  score = document.querySelector(".choiceBad") ? 0 : score + 1;
});

// game loop
export function showNext() {
  scoreID.textContent = score;
  document
    .querySelectorAll(".choiceBad")
    .forEach((b) => b.classList.remove("choiceBad"));

  const rawCountry = pick_random_country();
  //   parse only what we will display
  const country = prepareCountry(rawCountry);

  // show the current flag / front flag-panel
  display_ui(country);

  // populate the buttons with four guesses
  const choices_names = choices_buttons(countries, country);

  // listen while the player is guessing
  // while player click the good one or no more guess
  get_buttons(choices_names, country);

  // then when display_details is closed -> showNext()
}

function nextButton() {
  const nextButton = document.querySelector("#next");
  nextButton.addEventListener("click", () => {
    showNext();
  });
}
start();
