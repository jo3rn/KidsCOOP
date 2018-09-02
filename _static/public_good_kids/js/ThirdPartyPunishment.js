var figureNotClicked = true;

function initialize() {
  var audio = getAudio('TPP_1.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000 - 2000;
    setTimeout(hideOverlay, 38000);
    setTimeout(showAndHighlightClass.bind(null, 'tppFigure'), 38000);
    setTimeout(flash.bind(null, 'figureLeft'), delay);
    setTimeout(addClickEvent.bind(null, 'figureLeft', instructionsYellow), delay);
    setTimeout(startReminderColor.bind(null, 'TPP_Gelb_Erinnerung.mp3'), delay+8000);
  });

  document.getElementById('arrow-up-left').addEventListener('click', function(){donate('left');});
  document.getElementById('arrow-down-left').addEventListener('click', function(){revoke('left');});
  document.getElementById('arrow-up-middle').addEventListener('click', function(){donate('middle');});
  document.getElementById('arrow-down-middle').addEventListener('click', function(){revoke('middle');});
  document.getElementById('arrow-up-right').addEventListener('click', function(){donate('right');});
  document.getElementById('arrow-down-right').addEventListener('click', function(){revoke('right');});
}

function addClickEvent(element, listener) {
  document.getElementById(element).addEventListener('click', listener);
}

function removeClickEvent(element, listener) {
  document.getElementById(element).removeEventListener('click', listener);
}

function instructionsYellow() {
  hideID('exclamation');
  makeColorful('potLeft');
  changeImage('overlayFigureLeft', 'figureyellow.png');
  showOverlay();

  var audio = getAudio('TPP_2.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000 - 3000;
    setTimeout(moveBottomCoins.bind(null, 'main'), 14500);
    setTimeout(moveTopCoins.bind(null, 'main'), 14500);
    setTimeout(moveRightCoins.bind(null, 'main'), 14500);
    setTimeout(moveLeftCoins.bind(null, 'own'), 17000);

    setTimeout(resetAllCoins, 20000);

    setTimeout(moveBottomCoins.bind(null, 'own'), 22000);
    setTimeout(moveTopCoins.bind(null, 'own'), 22000);
    setTimeout(moveRightCoins.bind(null, 'own'), 22000);
    setTimeout(moveLeftCoins.bind(null, 'own'), 24500);

    setTimeout(hideOverlay, delay-500);
    setTimeout(changeImage.bind(null, 'overlayFigureLeft', 'figuregrey.png'), delay);
    setTimeout(makeGrey.bind(null, 'potLeft'), delay);
    setTimeout(resetAllCoins, delay);
    setTimeout(flash.bind(null, 'figureTop'), delay);
    setTimeout(addClickEvent.bind(null, 'figureTop', instructionsGreen), delay);
    setTimeout(removeClickEvent.bind(null, 'figureLeft', instructionsYellow), delay);
    setTimeout(setFigureUnclicked, delay);
    setTimeout(startReminderColor.bind(null, 'TPP_Grün_Erinnerung.mp3'), delay+8000);
  });
}

function instructionsGreen() {
  hideID('exclamation');
  makeColorful('potTop');
  changeImage('overlayFigureTop', 'figuregreen.png');
  showOverlay();

  var audio = getAudio('TPP_3.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000 - 3000;
    setTimeout(moveBottomCoins.bind(null, 'own'), 14500);
    setTimeout(moveLeftCoins.bind(null, 'own'), 14500);
    setTimeout(moveRightCoins.bind(null, 'own'), 14500);
    setTimeout(moveTopCoins.bind(null, 'main'), 17000);

    setTimeout(resetAllCoins, 20000);

    setTimeout(moveBottomCoins.bind(null, 'main'), 22000);
    setTimeout(moveLeftCoins.bind(null, 'main'), 22000);
    setTimeout(moveRightCoins.bind(null, 'main'), 22000);
    setTimeout(moveTopCoins.bind(null, 'main'), 24500);

    setTimeout(hideOverlay, delay);
    setTimeout(changeImage.bind(null, 'overlayFigureTop', 'figuregrey.png'), delay);
    setTimeout(makeGrey.bind(null, 'potTop'), delay);
    setTimeout(resetAllCoins, delay);
    setTimeout(flash.bind(null, 'figureRight'), delay);
    setTimeout(addClickEvent.bind(null, 'figureRight', instructionsRed), delay);
    setTimeout(removeClickEvent.bind(null, 'figureTop', instructionsGreen), delay);
    setTimeout(setFigureUnclicked, delay);
    setTimeout(startReminderColor.bind(null, 'TPP_Rot_Erinnerung.mp3'), delay+8000);
  });

}

function instructionsRed() {
  hideID('exclamation');
  makeColorful('potRight');
  changeImage('overlayFigureRight', 'figurered.png');
  showOverlay();

  var audio = getAudio('TPP_4 v2.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000;
    setTimeout(moveBottomCoins.bind(null, 'main'), 16500);
    setTimeout(moveLeftCoins.bind(null, 'main'), 16500);
    setTimeout(moveTopCoins.bind(null, 'main'), 16500);
    setTimeout(moveRightCoins.bind(null, 'main'), 19000);

    setTimeout(resetAllCoins, 22500);

    setTimeout(moveBottomCoins.bind(null, 'own'), 24500);
    setTimeout(moveLeftCoins.bind(null, 'own'), 24500);
    setTimeout(moveTopCoins.bind(null, 'own'), 24500);
    setTimeout(moveRightCoins.bind(null, 'own'), 31000);

    setTimeout(hideOverlay, delay);
    setTimeout(changeImage.bind(null, 'overlayFigureRight', 'figuregrey.png'), delay);
    setTimeout(makeGrey.bind(null, 'potRight'), delay);
    setTimeout(resetAllCoins, delay);
    setTimeout(removeClickEvent.bind(null, 'figureRight', instructionsRed), delay);
    setTimeout(instructionsPunishment, delay);
  });
}

function instructionsPunishment(){
  var audio = getAudio('TPP_5.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000+500;
    setTimeout(showAndHighlightClass.bind(null, 'tpp-coin'), 2000);
    setTimeout(showAndHighlightClass.bind(null, 'tpp-arrow'), 12000);

    setTimeout(instructionsReplay, delay);
  });
}

function instructionsReplay(){
  var audio = getAudio('TPP_6.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000-1000;
    setTimeout(flash.bind(null, 'figureLeft'), 4000);
    setTimeout(flash.bind(null, 'figureTop'), 7000);
    setTimeout(flash.bind(null, 'figureRight'), 10500);

    setTimeout(addListenersToFigures, delay);
  });
}

function addListenersToFigures(){
  addClickEvent('figureLeft', replayYellow);
  addClickEvent('figureTop', replayGreen);
  addClickEvent('figureRight', replayRed);
}

function replayYellow(){
  makeColorful('potLeft');
  changeImage('overlayFigureLeft', 'figureyellow.png');
  showOverlay();

  var audio = getAudio('TPP_Gelb.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000 + 1500;

    setTimeout(moveBottomCoins.bind(null, 'main'), 14000);
    setTimeout(moveTopCoins.bind(null, 'main'), 14000);
    setTimeout(moveRightCoins.bind(null, 'main'), 14000);
    setTimeout(moveLeftCoins.bind(null, 'own'), 16000);

    setTimeout(resetAllCoins, 18000);

    setTimeout(moveBottomCoins.bind(null, 'own'), 20500);
    setTimeout(moveTopCoins.bind(null, 'own'), 20500);
    setTimeout(moveRightCoins.bind(null, 'own'), 20500);
    setTimeout(moveLeftCoins.bind(null, 'own'), 22500);

    setTimeout(hideOverlay, delay);
    setTimeout(changeImage.bind(null, 'overlayFigureLeft', 'figuregrey.png'), delay);
    setTimeout(makeGrey.bind(null, 'potLeft'), delay);
    setTimeout(resetAllCoins, delay);
  });
}

function replayGreen(){
  makeColorful('potTop');
  changeImage('overlayFigureTop', 'figuregreen.png');
  showOverlay();

  var audio = getAudio('TPP_Grün.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000 + 1500;

    setTimeout(moveBottomCoins.bind(null, 'own'), 13000);
    setTimeout(moveLeftCoins.bind(null, 'own'), 13000);
    setTimeout(moveRightCoins.bind(null, 'own'), 13000);
    setTimeout(moveTopCoins.bind(null, 'main'), 15000);

    setTimeout(resetAllCoins, 17000);

    setTimeout(moveBottomCoins.bind(null, 'main'), 19500);
    setTimeout(moveLeftCoins.bind(null, 'main'), 19500);
    setTimeout(moveRightCoins.bind(null, 'main'), 19500);
    setTimeout(moveTopCoins.bind(null, 'main'), 21500);

    setTimeout(hideOverlay, delay);
    setTimeout(changeImage.bind(null, 'overlayFigureTop', 'figuregrey.png'), delay);
    setTimeout(makeGrey.bind(null, 'potTop'), delay);
    setTimeout(resetAllCoins, delay);
  });
}

function replayRed(){
  makeColorful('potRight');
  changeImage('overlayFigureRight', 'figurered.png');
  showOverlay();

  var audio = getAudio('TPP_Rot.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000 + 1000;

    setTimeout(moveBottomCoins.bind(null, 'main'), 12000);
    setTimeout(moveLeftCoins.bind(null, 'main'), 12000);
    setTimeout(moveTopCoins.bind(null, 'main'), 12000);
    setTimeout(moveRightCoins.bind(null, 'main'), 14000);

    setTimeout(resetAllCoins, 16500);

    setTimeout(moveBottomCoins.bind(null, 'own'), 19500);
    setTimeout(moveLeftCoins.bind(null, 'own'), 19500);
    setTimeout(moveTopCoins.bind(null, 'own'), 19500);
    setTimeout(moveRightCoins.bind(null, 'own'), 25000);

    setTimeout(hideOverlay, delay);
    setTimeout(changeImage.bind(null, 'overlayFigureRight', 'figuregrey.png'), delay);
    setTimeout(makeGrey.bind(null, 'potRight'), delay);
    setTimeout(resetAllCoins, delay);
  });
}

function getAudio(file){
  return new Audio ('../../../../../static/public_good_kids/audio/' + file);
}

function showOverlay() {
  document.getElementById('overlayOpaqueTPP').style.display = 'block';
}

function hideOverlay() {
  document.getElementById('overlayOpaqueTPP').style.display = 'none';
}

function makeGrey(element) {
  document.getElementById(element).classList.add('grey');
}

function makeColorful(element) {
  document.getElementById(element).classList.remove('grey');
}

function changeImage(imgID, newImage) {
  document.getElementById(imgID).src='../../../../../static/public_good_kids/img/' + newImage;
}

function showAndHighlightClass(theClass) {
  var elements = document.getElementsByClassName(theClass);
  for(var i = 0; i < elements.length; i++){
    element = elements.item(i);
    element.style.visibility = 'visible';
    element.style.transform = 'scale(1,1)';
  }
}

function flash(element){
  var elem = document.getElementById(element);
  elem.style.transform = 'scale(3,3)';
  setTimeout(function(){elem.style.transform = 'scale(1,1)';}, 1100);
}

function donate(direction){
  var coins = document.getElementById('coinsToDonate').children;
  try {
    document.getElementById('donation-' + direction).appendChild(coins[0]);
    var oldCont = parseInt(document.getElementById("contribution").value);
    switch(direction){
      case 'left':
        document.getElementById("contribution").value = oldCont + 100;
        logClick('ul');
        break;
      case 'middle':
        document.getElementById("contribution").value = oldCont + 10;
        logClick('um');
        break;
      case 'right':
        document.getElementById("contribution").value = oldCont + 1;
        logClick('ur');
        break;
    }
    if (coins.length == 0) {
      showConfirmButton();
    }
  } catch(err){
  }
}

function revoke(direction){
  var revokableCoins = document.getElementById('donation-' + direction).children;
  try {
    document.getElementById('coinsToDonate').appendChild(revokableCoins[0]);
    var oldCont = parseInt(document.getElementById("contribution").value);
    switch(direction){
      case 'left':
        document.getElementById("contribution").value = oldCont - 100;
        logClick('dl');
        break;
      case 'middle':
        document.getElementById("contribution").value = oldCont - 10;
        logClick('dm');
        break;
      case 'right':
        document.getElementById("contribution").value = oldCont - 1;
        logClick('dr');
        break;
    }
    hideConfirmButton();
  } catch(err){
  }
}

function startReminderColor(fileName){
  console.log("startReminderColor");
  if (figureNotClicked) {
    var audio = getAudio(fileName);
    audio.addEventListener('loadedmetadata', function() {
      audio.play();
      showID('exclamation');
      var delay = audio.duration*1000 + 7000;
      setTimeout(startReminderColor.bind(null, fileName), delay);
    });
  }
}

function showID(theID){
  var elem = document.getElementById(theID);
  elem.classList.remove('hidden');
}

function hideID(theID){
  figureNotClicked = false;
  var elem = document.getElementById(theID);
  elem.classList.add('hidden');
}

function setFigureUnclicked(){
  figureNotClicked = true;
}
