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
