// Select the div element
let div = document.querySelector("#weather");

// Define colorState array and originalBackgroundColor
let colorState = [];
let originalBackgroundColor = document.body.style.backgroundColor;

// Function to change background color and add class based on video time
function changeBackgroundColor(video, startTime, endTime, color, className) {
  // Add new state
  colorState.push({ startTime, endTime, color, className });
}

// Function to handle timeupdate event
function handleTimeUpdate() {
  // Check the current time against the color state
  for (let state of colorState) {
    if (
      this.currentTime >= state.startTime &&
      this.currentTime < state.endTime
    ) {
      // Change the background color and add class
      document.body.style.backgroundColor = state.color;
      div.classList.add(state.className);
      return;
    } else {
      // If the current time is not within the state's time range, remove the class
      div.classList.remove(state.className);
    }
  }

  // If no state matches, revert the background color to the original color and remove class
  document.body.style.backgroundColor = originalBackgroundColor;
  div.className = "";
}

// Select the video element
let video = document.querySelector("video");

// Add event listener for timeupdate event
video.addEventListener("timeupdate", handleTimeUpdate);

// Call the function with the desired parameters
changeBackgroundColor(video, 4, 20, "red", "stormy");
changeBackgroundColor(video, 26, 36, "rgb(19, 19, 128)", "rain");
changeBackgroundColor(video, 37, 60, "rgb(207, 194, 1)", "sunshine");
changeBackgroundColor(video, 63, 75, "rgb(235, 130, 11)", "sunshine");
changeBackgroundColor(video, 77, 90, "rgb(235, 130, 11)", "sunshine");
