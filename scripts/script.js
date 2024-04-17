// Global state
let colorState = []; // Declare a global array to store the color states

// Store the original background color
let originalBackgroundColor = document.body.style.backgroundColor; // Store the original background color of the body

// Function to change background color based on video time
function changeBackgroundColor(video, startTime, endTime, color) {
  // Add new state
  colorState.push({ startTime, endTime, color }); // Push a new object to the array with the start time, end time, and color
}

// Function to handle timeupdate event
function handleTimeUpdate() {
  // Check the current time against the color state
  for (let state of colorState) {
    // Loop through each state in the colorState array
    if (
      this.currentTime >= state.startTime && // If the current time of the video is greater than or equal to the start time of the state
      this.currentTime < state.endTime // And the current time of the video is less than the end time of the state
    ) {
      // Change the background color
      document.body.style.backgroundColor = state.color; // Set the background color of the body to the color of the state
      return; // Exit the function
    }
  }

  // If no state matches, revert the background color to the original color
  document.body.style.backgroundColor = originalBackgroundColor; // If no state matches the current time, set the background color of the body back to the original color
}

// Select the video element
let video = document.querySelector("video"); // Select the video element from the DOM

// Add event listener
video.addEventListener("timeupdate", handleTimeUpdate); // Add a timeupdate event listener to the video. This will call the handleTimeUpdate function every time the currentTime of the video updates

// Call the function with the desired parameters
changeBackgroundColor(video, 4, 20, "red"); // Call the changeBackgroundColor function with the video element, a start time of 0, an end time of 10, and a color of red
changeBackgroundColor(video, 26, 36, "blue"); // Call the changeBackgroundColor function with the video element, a start time of 10, an end time of 20, and a color of blue
changeBackgroundColor(video, 37, 60, "yellow");
changeBackgroundColor(video, 63, 75, "orange");
changeBackgroundColor(video, 77, 90, "orange");
