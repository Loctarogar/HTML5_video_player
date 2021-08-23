const playButton = document.querySelector(".fa-play");
const pauseButton = document.querySelector(".fa-pause");
const stopButton = document.querySelector(".fa-stop");
const slider = document.querySelector(".slider");
const fullscreenOnButton = document.querySelector(".fa-expand");
const fullscreenOffButton = document.querySelector(".fa-compress");

const iconPause = "fa-pause";
const iconPlay = "fa-play";
const hiddenClass = "hidden";

const video = document.querySelector("video");
const duration = Math.floor(video.duration);
slider.max = duration;
console.log(slider.max);

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

function videoPlay(command) {
  if (command == iconPlay) {
    video.play();
  } else {
    video.pause();
  }

  changeIcon(command);
}

function changeIcon(icon) {
  playButton.classList.toggle(hiddenClass);
  pauseButton.classList.toggle(hiddenClass);
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
}
