const play = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
const stop = document.querySelector(".fa-stop");
const fullscreenOn = document.querySelector(".fa-expand");
const fullscreenOff = document.querySelector(".fa-compress");

const iconPause = "fa-pause";
const iconPlay = "fa-play";
const hiddenClass = "hidden";

const video = document.querySelector("video");
const duration = video.duration;

play.addEventListener("click", videoPlay.bind(null, iconPlay));
pause.addEventListener("click", videoPlay.bind(null, iconPause));

function videoPlay(command) {
  if (command == "fa-play") {
    console.log("play");
    video.play();
  } else {
    video.pause();
  }

  changeIcon(command);
}

function changeIcon(icon) {
  play.classList.toggle(hiddenClass);
  pause.classList.toggle(hiddenClass);
}
