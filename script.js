const videoPlayer = document.querySelector(".video-player");
const playButton = document.querySelector(".fa-play");
const pauseButton = document.querySelector(".fa-pause");
const stopButton = document.querySelector(".fa-stop");
const slider = document.querySelector(".slider");
const fullscreenOnButton = document.querySelector(".fa-expand");
const fullscreenOffButton = document.querySelector(".fa-compress");
const timePassedMin = document.querySelector("#time-passed-minutes");
const timePassedSec = document.querySelector("#time-passed-seconds");
const timeTotalMin = document.querySelector("#time-total-minutes");
const timeTotalSec = document.querySelector("#time-total-seconds");
const controlBar = document.querySelector(".control-bar");

// console.log(videoPlayer);

const iconPause = "fa-pause";
const iconPlay = "fa-play";
const hiddenClass = "hidden";

const video = document.querySelector("video");
let duration;

playButton.addEventListener("click", () => {
  videoPlay(iconPlay);
  setInterval(sliderMover, 1000);
});
pauseButton.addEventListener("click", () => {
  videoPlay(iconPause);
});
stopButton.addEventListener("click", videoStop);

slider.addEventListener("change", () => {
  video.currentTime = slider.value;
  console.log(slider.value);
});

fullscreenOnButton.addEventListener("click", () => {
  videoPlayer.requestFullscreen();
  changeIcon("fullscreen");
});

fullscreenOffButton.addEventListener("click", () => {
  document.exitFullscreen();
  changeIcon("fullscreen");
});
function videoPlay(command) {
  if (command == iconPlay) {
    video.play();
  } else {
    video.pause();
  }

  setTime();
  changeIcon("play");
}

function changeIcon(element) {
  if (element == "play") {
    playButton.classList.toggle(hiddenClass);
    pauseButton.classList.toggle(hiddenClass);
  } else if (element == "fullscreen") {
    fullscreenOnButton.classList.toggle("hidden");
    fullscreenOffButton.classList.toggle("hidden");
  }
}

function videoStop() {
  video.load();
  slider.value = 0;
  videoPlay(iconPause);
}

function sliderMover() {
  slider.value = Math.floor(video.currentTime);
  if (slider.value == slider.max) {
    videoStop();
  }

  timePassedMin.textContent = Math.floor(slider.value / 60);
  timePassedSec.textContent = slider.value % 60;
}

function setTime() {
  if (duration == null) {
    duration = Math.floor(video.duration);
    slider.max = duration;
  }

  timeTotalMin.textContent = Math.floor(duration / 60);
  timeTotalSec.textContent = duration % 60;
}
