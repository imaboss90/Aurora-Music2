// Used to create a progress bar that moves with the song
/*function playMusic() {
      var music = document.getElementById('music');
      music.play();
 
      // Update progress bar every second
      setInterval(function() {
        var progress = document.getElementById('progress-bar');
        progress.style.width = music.currentTime / music.duration * 100 + '%';
      }, 1000);
    }

}*/

// Creating the music library
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');

const tracks = ['1.mp3', '2.mp3', '4.mp3'];
let currentTrack = 0;

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause';
  } else {
    audio.pause();
    playButton.textContent = 'Play';
  }
});

nextButton.addEventListener('click', () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.play();
  playButton.textContent = 'Pause';
});

previousButton.addEventListener('click', () => {
  currentTrack = (currentTrack + tracks.length - 1) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.play();
  playButton.textContent = 'Pause';
});