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

playButton.addEventListener("click", () => {
  videoPlay(iconPlay);
});
pauseButton.addEventListener("click", () => {
  videoPlay(iconPause);
});
stopButton.addEventListener("click", () => {
  video.load();
  videoPlay(iconPause);
});
slider.addEventListener("change", () => {
  video.currentTime = slider.value;
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
