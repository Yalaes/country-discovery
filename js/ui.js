// Dom manipulation frontend/display
const flag_image_src = document.querySelector(".flag-img");

export function display_ui(country) {
  flag_image_src.src = country.flagUrl;
}
