# Country Discovery Game — Tasks

## MVP

### Project setup

- [ ] Set up the basic project structure
- [ ] Create the HTML, CSS, and JavaScript files
- [ ] Build a mobile-first base layout

### Game interface

- [ ] Create a compact header with the app name or logo on the left
- [ ] Display the first-try streak in the center of the header
- [ ] Add a help button on the right
- [ ] Display the selected country's flag prominently
- [ ] Display a group of country names as answer choices
- [ ] Make the answer choices easy to tap on mobile
- [ ] Adapt the layout for mobile, tablet, and laptop screens

### Educational design

- [ ] Define the target age range and reading level
- [ ] Use short, age-appropriate instructions and explanations
- [ ] Give encouraging feedback after every answer, including incorrect guesses
- [ ] Present country facts clearly and avoid stereotypes or overgeneralizations
- [ ] Identify reliable sources for the educational facts
- [ ] Keep the game usable without collecting personal information

### Country data

- [ ] Fetch country data from a free API
      https://restcountries.com/
- [ ] Handle loading, error, and empty states
- [ ] Define child-friendly geographic and social facts to display
- [ ] Add a link to view the country's location on a map
- [ ] Credit external APIs and resources in the help section
- [ ] Select APIs that work reliably in mobile browsers (HTTPS, CORS, and suitable usage limits)

### Gameplay

- [ ] Randomly select a country for each round
- [ ] Generate answer choices that include the correct country
- [ ] Let the player select an answer
- [ ] After an incorrect answer, gray out that country name and let the player continue
- [ ] Avoid loser states or humiliating feedback
- [ ] Reveal educational information after the correct answer
- [ ] Track consecutive rounds answered correctly on the first attempt
- [ ] Increase the first-try streak after a correct first answer
- [ ] Reset the first-try streak after an incorrect first answer
- [ ] Add a button to start the next round

### Interaction and accessibility

- [ ] Make gameplay possible with touch and pointer interactions
- [ ] Do not require typing or keyboard shortcuts to play
- [ ] Use accessible controls that also work with a keyboard
- [ ] Respect the user's reduced-motion preference

### Help

- [ ] Explain how to play
- [ ] Add credits for APIs and other resources
- [ ] Add any relevant legal information

## Testing

- [ ] Learn the difference between manual and automated testing
- [ ] Test the game manually on mobile, tablet, and laptop screen sizes
- [ ] Test loading, error, and empty states for country data
- [ ] Test that each round includes the correct country among the choices
- [ ] Test that incorrect answers are disabled and the player can continue
- [ ] Test that the first-try streak increases or resets correctly
- [ ] Choose and set up a lightweight JavaScript test framework
- [ ] Write automated tests for the game logic

## Later ideas

- [ ] Define additional educational content
- [ ] Consider saving a personal best first-try streak
- [ ] Refine the flag and answer-choice animations
