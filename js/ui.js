import { showNext } from "./main.js";

// get current country
let currentCountry = null;

// Dom manipulation frontend/display
const flag_image_src = document.querySelector(".flag-img");

// Get the current country and display flag
export function display_ui(country) {
  currentCountry = country;
  flag_image_src.src = currentCountry.flagUrl;
}

// Back of the card (details)
export function display_details(country) {
  // must get country from main.js to acces details
  const modal = document.querySelector("#country-dialog");
  const details = document.querySelector("#country-details");
  details.textContent = `${country.name}`;
  modal.showModal();

  // on close
  const closeModalButton = document.querySelector("#close-dialog");

  closeModalButton.addEventListener("click", () => {
    showNext();
    modal.close();
  });
}

export function get_buttons(array, correctName) {
  const buttons = document.querySelectorAll(".choice");
  array.forEach((country, index) => {
    // reset ID for the correct country
    const button = buttons[index];
    button.removeAttribute("id");
    button.textContent = button.dataset.name = country.name;

    // add an id for the correct country
    if (button.dataset.name === correctName.name) {
      button.id = correctName.name;
    }
  });
}

export function listen_buttons(updateScore) {
  const buttons = document.querySelectorAll(".choice");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.currentTarget.id !== "" && currentCountry) {
        updateScore();
        display_details(currentCountry);
      } else {
        event.currentTarget.classList.add("choiceBad");
      }
    });
  });
}
