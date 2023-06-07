import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(timeUpdate, 1000));
function timeUpdate(data) {
  let currentTime = data.seconds;
  console.log(currentTime);
  localStorage.setItem('storage-currentTime', currentTime);
}

const storedTime = localStorage.getItem('storage-currentTime');
console.log(storedTime);

player.setCurrentTime(storedTime);
