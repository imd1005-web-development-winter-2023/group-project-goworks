//

// Constants
/*const appID = "app";
const headingText = "Develop. Preview. Ship.";
const headingTextIcon = "🚀";
const projectDueDate = "11 April 2023 11:59";

// Variables
let countdownDate = new Date(projectDueDate);

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

function calculateDaysLeft(countdownDate) {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  // Countdown passed already
  if (difference < 1) {
    return null;
  }

  const days = Math.floor(difference / (60 * 60 * 24));

  return days;
}

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  const daysLeft = calculateDaysLeft(countdownDate);
  let headingTextCalculated = headingText;

  if (daysLeft) {
    headingTextCalculated = headingTextCalculated.concat(
      " In ",
      daysLeft.toString(),
      " days "
    );
  }
  h1.textContent = headingTextCalculated.concat(headingTextIcon);
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();*/




/*///   SLIDESHOW    -start  --rasha ///

// Get the slideshow container and images
const slideshowContainer = document.querySelector('.slideshow-container');
const images = slideshowContainer.querySelectorAll('img');

// Set the first image to active
let index = 0;
images[index].classList.add('active');

// Switch between images every 5 seconds
setInterval(() => {
  // Remove the active class from the current image
  images[index].classList.remove('active');
  
  // Increment the index to switch to the next image
  index++;
  
  // Reset the index to 0 if it exceeds the number of images
  if (index >= images.length) {
    index = 0;
  }
  
  // Add the active class to the next image
  images[index].classList.add('active');
}, 5000);
///  SLIDESHOW - END     ///

