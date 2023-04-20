// Get all the elements we need
const video = document.querySelector('.player__video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const playBtn = document.querySelector('.player__button');
const volumeRange = document.querySelector('[name="volume"]');
const speedRange = document.querySelector('[name="playbackRate"]');
const skipBtns = document.querySelectorAll('[data-skip]');

// Function to toggle play/pause
function togglePlay() {
  const icon = this.paused ? '►' : '❚ ❚';
  playBtn.textContent = icon;
  this.paused ? this.play() : this.pause();
}

// Function to update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Function to handle volume change
function handleVolumeChange() {
  video.volume = this.value;
}

// Function to handle playback speed change
function handleSpeedChange() {
  video.playbackRate = this.value;
}

// Function to handle skip buttons
function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
playBtn.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
volumeRange.addEventListener('change', handleVolumeChange);
volumeRange.addEventListener('mousemove', handleVolumeChange);
speedRange.addEventListener('change', handleSpeedChange);
speedRange.addEventListener('mousemove', handleSpeedChange);
skipBtns.forEach(button => button.addEventListener('click', handleSkip));
