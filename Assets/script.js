var timeDisplay = document.querySelector("#currentDay");

var timeNow = moment();

// will display time on header
timeDisplay.textContent = timeNow.format("dddd, MMMM Do");
