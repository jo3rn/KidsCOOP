function initialize() {
  var audio = getAudio('DG_1.mp3');
  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    var delay = audio.duration*1000 - 2000;
    setTimeout(showAndHighlightClass.bind(null, 'tppFigure'), 16000);
    setTimeout(flash.bind(null, 'figureLeft'), 18500);
    setTimeout(flash.bind(null, 'figureRight'), 21500);
    setTimeout(showAndHighlightClass.bind(null, 'tpp-coin'), 27500);
    setTimeout(flash.bind(null, 'figureLeft'), 45500);
    setTimeout(flash.bind(null, 'figureRight'), 50500);
    setTimeout(showAndHighlightClass.bind(null, 'tpp-arrow'), 56000);
  });

  document.getElementById('arrow-up-left').addEventListener('click', function(){donate('blue');});
  document.getElementById('arrow-down-left').addEventListener('click', function(){revoke('blue');});
  document.getElementById('arrow-up-right').addEventListener('click', function(){donate('grey');});
  document.getElementById('arrow-down-right').addEventListener('click', function(){revoke('grey');});
}

function getAudio(file){
  return new Audio ('../../../../../static/public_good_kids/audio/' + file);
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
      case 'blue':
        document.getElementById("contribution").value = oldCont + 10;
        logClick('ub');
        break;
      case 'grey':
        document.getElementById("contribution").value = oldCont + 1;
        logClick('ug');
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
      case 'blue':
        document.getElementById("contribution").value = oldCont - 10;
        logClick('db');
        break;
      case 'grey':
        document.getElementById("contribution").value = oldCont - 1;
        logClick('dg');
        break;
    }
    hideConfirmButton();
  } catch(err){
  }
}
