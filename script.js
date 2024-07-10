const $ = document.querySelector.bind(document);

const audio = $('#audio');
const playButton = $('#play');
const pauseButton = $('#pause');
const seekBar = $('.seek-bar');

// Cập nhật giá trị của thanh trượt khi phát nhạc
audio.ontimeupdate = function() {
    const value = (audio.currentTime / audio.duration) * 100;
    seekBar.value = value;
};

playButton.onclick = function() {
    audio.play();
    playButton.classList.add('hidden');
    pauseButton.classList.remove('hidden');
}
 
pauseButton.onclick = function() {
    audio.pause();
    playButton.classList.remove('hidden');
    pauseButton.classList.add('hidden');
}
seekBar.oninput = function() {
    const seekTo = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTo;
}

// phần chuyển bài hát
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






