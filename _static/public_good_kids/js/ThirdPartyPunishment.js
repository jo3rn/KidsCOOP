function initialize() {
  var audio = getAudio('TPP_1.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000 - 500;
    setTimeout(listenYellow, delay);
  });
}

function listenYellow() {
  document.getElementById('figureLeft').addEventListener('click', instructionsYellow);
}

function listenGreen() {
  document.getElementById('figureTop').addEventListener('click', instructionsGreen);
}

function listenRed() {
  document.getElementById('figureRight').addEventListener('click', instructionsRed);
}

function instructionsYellow() {
  showOverlay();
  makeGrey('potTop');
  makeGrey('potRight');
  makeGrey('potBottom');
}

function instructionsGreen() {
  showOverlay();
  makeGrey('potLeft');
  makeGrey('potRight');
  makeGrey('potBottom');
}

function instructionsRed() {
  showOverlay();
  makeGrey('potTop');
  makeGrey('potLeft');
  makeGrey('potBottom');
}

function getAudio(file){
  return new Audio ('../../../../../static/public_good_kids/audio/' + file);
}

function showOverlay() {
  document.getElementById('overlayOpaque').style.display = 'block';
}

function hideOverlay() {
  document.getElementById('overlayOpaque').style.display = 'none';
}

function makeGrey(element) {
  document.getElementById(element).classList.add('grey');
}
