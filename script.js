const $ = document.querySelector.bind(document);

// Select elements for Coban section
const audioCoban = $("#audioCoban");
const playButtonCoban = $("#playCoban");
const pauseButtonCoban = $("#pauseCoban");
const seekBarCoban = $(".seek-bar-coban");

// Select elements for Totnghiep section
const audioTotnghiep = $("#audioTotnghiep");
const playButtonTotnghiep = $("#playTotnghiep");
const pauseButtonTotnghiep = $("#pauseTotnghiep");
const seekBarTotnghiep = $(".seek-bar-totnghiep");

// Update seek bar value when playing for Coban section
audioCoban.ontimeupdate = function () {
  const value = (audioCoban.currentTime / audioCoban.duration) * 100;
  seekBarCoban.value = value;
};

// Update seek bar value when playing for Totnghiep section
audioTotnghiep.ontimeupdate = function () {
  const value = (audioTotnghiep.currentTime / audioTotnghiep.duration) * 100;
  seekBarTotnghiep.value = value;
};

// Play button click handler for Coban section
playButtonCoban.onclick = function () {
  audioCoban.play();
  playButtonCoban.classList.add("hidden");
  pauseButtonCoban.classList.remove("hidden");
};

// Pause button click handler for Coban section
pauseButtonCoban.onclick = function () {
  audioCoban.pause();
  playButtonCoban.classList.remove("hidden");
  pauseButtonCoban.classList.add("hidden");
};

// Play button click handler for Totnghiep section
playButtonTotnghiep.onclick = function () {
  audioTotnghiep.play();
  playButtonTotnghiep.classList.add("hidden");
  pauseButtonTotnghiep.classList.remove("hidden");
};

// Pause button click handler for Totnghiep section
pauseButtonTotnghiep.onclick = function () {
  audioTotnghiep.pause();
  playButtonTotnghiep.classList.remove("hidden");
  pauseButtonTotnghiep.classList.add("hidden");
};

// Seek bar input handler for Coban section
seekBarCoban.oninput = function () {
  const seekTo = (seekBarCoban.value / 100) * audioCoban.duration;
  audioCoban.currentTime = seekTo;
};

// Seek bar input handler for Totnghiep section
seekBarTotnghiep.oninput = function () {
  const seekTo = (seekBarTotnghiep.value / 100) * audioTotnghiep.duration;
  audioTotnghiep.currentTime = seekTo;
};

// Navigation and show content logic
document.addEventListener("DOMContentLoaded", function () {
  const links = document.getElementById("links");
  const coban = document.getElementById("coban");
  const totnghiep = document.getElementById("totnghiep");

  function showContent(id) {
    links.classList.add("hidden");
    coban.classList.add("hidden");
    totnghiep.classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
  }

  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (hash === "coban" || hash === "totnghiep") {
      showContent(hash);
    }
  }

  document
    .getElementById("showCoban")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.hash = "coban";
      showContent("coban");
    });

  document
    .getElementById("showTotnghiep")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.hash = "totnghiep";
      showContent("totnghiep");
    });
});
