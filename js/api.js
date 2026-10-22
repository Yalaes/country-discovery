// connect et fetch api
// https://countries.dev/docs

const API_URL =
  "https://countries.dev/countries?fields=name%2Ccapital%2Cflag&full=true&sort=name&offset=0";

export async function getCountries() {
  const res = await fetch(API_URL, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }
  return await res.json();
}
