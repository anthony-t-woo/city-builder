/* Imports */

/* Get DOM Elements */
// dropdown elements
const architectureDropdown = document.getElementById('architecture-dropdown');
const locationDropdown = document.getElementById('location-dropdown');
const featuresDropdown = document.getElementById('features-dropdown');
// image elements
const architectureEL = document.getElementById('architecture-img');
const locationEL = document.getElementById('location-img');
const featuresEL = document.getElementById('features-img');
// user input elements
const welcomeMatInputEl = document.getElementById('welcome-mat-phrase-input');
const welcomeMatButtonEl = document.getElementById('welcome-mat-phrase-button');
// report element
const reportEl = document.getElementById('report-div');
const welcomeMatMessagesEL = document.getElementById('welcome-messages');

/* State */
let welcomeMessages = [];
let architectureChange = 0;
let locationChange = 0;
let featuresChange = 0;
// Dropdown menu options arrays
let architectureOptions = [
    { display: 'Select an option', value: '' },
    { display: 'Bungalow', value: 'bungalow-house' },
    { display: 'Farmhouse', value: 'farmhouse-house' },
    { display: 'Modern', value: 'modern-house' },
];
let locationOptions = [
    { display: 'Select an option', value: '' },
    { display: 'Urban City', value: 'city-location' },
    { display: 'Suburban', value: 'suburban-location' },
    { display: 'rural', value: 'rural-location' },
];
let featuresOptions = [
    { display: 'Select an option', value: '' },
    { display: 'Swimming Pool', value: 'pool-feature' },
    { display: 'Workshop', value: 'workshop-feature' },
    { display: 'Sport Court', value: 'sport-feature' },
];
// create option elements from arrays
for (let architectureOption of architectureOptions) {
    const archOptionEL = document.createElement('option');
    archOptionEL.textContent = architectureOption.display;
    archOptionEL.value = architectureOption.value;
    architectureDropdown.append(archOptionEL);
}
for (let locationOption of locationOptions) {
    const locOptionEL = document.createElement('option');
    locOptionEL.textContent = locationOption.display;
    locOptionEL.value = locationOption.value;
    locationDropdown.append(locOptionEL);
}
for (let featuresOption of featuresOptions) {
    const featOptionEL = document.createElement('option');
    featOptionEL.textContent = featuresOption.display;
    featOptionEL.value = featuresOption.value;
    featuresDropdown.append(featOptionEL);
}

/* Events */
architectureDropdown.addEventListener('change', () => {
    architectureChange++;
    architectureEL.src = `./assets/${architectureDropdown.value}.jpeg`;
    displayStats();
});

locationDropdown.addEventListener('change', () => {
    locationChange++;
    locationEL.src = `./assets/${locationDropdown.value}.jpeg`;
    displayStats();
});

featuresDropdown.addEventListener('change', () => {
    featuresChange++;
    featuresEL.src = `./assets/${featuresDropdown.value}.jpeg`;
    displayStats();
});

welcomeMatButtonEl.addEventListener('click', () => {
    if (welcomeMatInputEl.value === 0) {
        alert('how will you greet your guests?');
    } else {
        const currentWelcome = welcomeMatInputEl.value;
        welcomeMessages.push(currentWelcome);
        welcomeMatInputEl.value = '';
        displayWelcomeMessages();
    }
    console.log(welcomeMessages);
});

/* Display Functions */

function displayStats() {
    reportEl.textContent = `You have changed the architecture ${architectureChange} times, the location ${locationChange} times, and the features ${featuresChange} times. How should we greet your guests?`;
}

function displayWelcomeMessages() {
    welcomeMatMessagesEL.textContent = '';
    for (let welcomeMessage of welcomeMessages) {
        const p = document.createElement('p');
        p.textContent = welcomeMessage;
        welcomeMatMessagesEL.append(p);
    }
}
// (don't forget to call any display functions you want to run on page load!)
