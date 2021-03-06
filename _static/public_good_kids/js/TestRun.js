function releaseCoins() {
	// sets players coins in place
	// also needed to initialize global variables
	try {
		if (typeof coinCountdown === 'undefined') {
			// make arrows visible
			var arrows = document.getElementsByClassName('arrow');
			var i;
			for (i=0; i < arrows.length; i++) {
				arrows[i].style.visibility = 'visible';
			}

			// make coins visible
			var coins = document.getElementsByClassName('coins');
			var j;
			for (j=0; j < coins.length; j++) {
				coins[j].style.visibility = 'visible';
			}

      // start instructions
      setTimeout(runInstructions4, 2000);

			// coin countdown to indicate if all coins are distributed
			coinCountdown = 1;

      // variable to deduct if Instructions5 are ready to be played
      instructions4Done = false;
      instructions5Played = false;
      allDistributed = false;

		}

	}
	catch(err) {
	}
}


function runInstructions4() {
  var audio = new Audio('../../../../../static/public_good_kids/audio/Instruktion4 v2.mp3');
  audio.play();

  setTimeout(highlightArrowUp, 6000);
  setTimeout(highlightArrowDown, 11000);
  setTimeout(showTimer, 22000);
	setTimeout(addOnClickEvent, 38000);
  setTimeout(decreaseTimer, 39000);
  setTimeout(switchToTrue, 39000);


  setTimeout(runInstructions5, 41000);

}

function highlightArrowUp() {
  var elem = document.getElementById("arrow-up");
  elem.style.transform = 'rotate(360deg)';
  elem.style.left = '43%';
  elem.style.height = '15%';
  elem.style.top = '60%';

  setTimeout(dehighlightArrowUp, 3200);
}

function dehighlightArrowUp() {
  var elem = document.getElementById("arrow-up");
  elem.style.transform = 'rotate(-360deg)';
  elem.style.left = '46.25%';
  elem.style.height = '7.5%';
  elem.style.top = '62%';
}

function highlightArrowDown() {
  var elem = document.getElementById("arrow-down");
  elem.style.transform = 'rotate(360deg)';
  elem.style.left = '43%';
  elem.style.height = '15%';
  elem.style.top = '72%';

  setTimeout(dehighlightArrowDown, 3200);
}

function dehighlightArrowDown() {
  var elem = document.getElementById("arrow-down");
  elem.style.transform = 'rotate(-360deg)';
  elem.style.left = '46.25%';
  elem.style.height = '7.5%';
  elem.style.top = '73.5%';
}

function showTimer() {
  document.getElementById("timeleft").style.visibility = 'visible';
	setTimeout(function(){document.getElementById("timeleft").style.transform = 'scale(2,2)'; }, 100);
	setTimeout(function(){document.getElementById("timeleft").style.transform = 'scale(1,1)'; }, 2000);
}

function addOnClickEvent() {
	document.getElementById('arrow-up').addEventListener("click", moveToMain, false);
	document.getElementById('arrow-down').addEventListener("click", moveToOwn, false);
}

function decreaseTimer() {
  var elem = document.getElementById("timeleft");
  var width = 100;
  var id = setInterval(frame, 300); // decrease by 1% every 0.3 sec
  function frame() {
    if (width <= 0) {
        clearInterval(id);
    } else {
        width--;
        elem.style.width = width + '%';
    }
  }
}

function switchToTrue() {
  instructions4Done = true;
}

function runInstructions5() {
  if (instructions4Done && !instructions5Played && allDistributed) {
    instructions5Played = true;
    var audio = new Audio('../../../../../static/public_good_kids/audio/Instruktion5 v2.mp3');
    audio.play();
    document.getElementById('confirmbutton').style.visibility = 'visible';
    setTimeout(highlightArrow, 3000, ['arrow-up']);
		setTimeout(highlightArrow, 5000, ['arrow-down']);
		setTimeout(highlightArrow, 13000, ['confirmbutton']);
  }
}

function highlightArrow(element) {
  var elem = document.getElementById(element);
  elem.style.transform = 'scale(3,3)';
  setTimeout(dehighlightArrow, 1500, [element]);
}

function dehighlightArrow(element) {
  var elem = document.getElementById(element);
  elem.style.transform = 'scale(1,1)';
}

function moveToMain() {
	// moves coin in mainpot
	try {
		var cb1 = document.getElementById('cb1');
		var cb2 = document.getElementById('cb2');
		var cb3 = document.getElementById('cb3');
		var cb4 = document.getElementById('cb4');
		var cb5 = document.getElementById('cb5');

		if (coinCountdown == 1) {
			cb1.style.top = '61%';
			cb1.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 2) {
			cb2.style.top = '61%';
			cb2.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 3) {
			cb3.style.top = '61%';
			cb3.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 4) {
			cb4.style.top = '61%';
			cb4.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 5) {
      allDistributed = true;
			cb5.style.top = '61%';
			cb5.classList.remove("rotatedcoin");
			coinCountdown += 1;

			// hide coins of other participants
			var othercoins = document.getElementsByClassName('hidaway');
			for (k=0; k < othercoins.length; k++) {
				othercoins[k].style.visibility = 'hidden';
			}
      // play further instructions
      runInstructions5();

		} else {
			if (cb5.style.top != '61%') {
				cb5.style.top = '61%';
			} else if (cb4.style.top != '61%') {
				cb4.style.top = '61%';
			} else if (cb3.style.top != '61%') {
				cb3.style.top = '61%';
			} else if (cb2.style.top != '61%') {
				cb2.style.top = '61%';
			} else if (cb1.style.top != '61%') {
				cb1.style.top = '61%';
			}
		}
	}
	catch(err) {
	}
}

function moveToOwn() {
	// moves coin in own pot
	try {
		var cb1 = document.getElementById('cb1');
		var cb2 = document.getElementById('cb2');
		var cb3 = document.getElementById('cb3');
		var cb4 = document.getElementById('cb4');
		var cb5 = document.getElementById('cb5');

		if (coinCountdown == 1) {
			cb1.style.top = '80%';
			cb1.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 2) {
			cb2.style.top = '80%';
			cb2.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 3) {
			cb3.style.top = '80%';
			cb3.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 4) {
			cb4.style.top = '80%';
			cb4.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 5) {
      allDistributed = true;
			cb5.style.top = '80%';
			cb5.classList.remove("rotatedcoin");
			coinCountdown += 1;

			// hide coins of other participants
			var othercoins = document.getElementsByClassName('hidaway');
			for (k=0; k < othercoins.length; k++) {
				othercoins[k].style.visibility = 'hidden';
			}

      // play further instructions
      runInstructions5();
		} else {
			if (cb5.style.top != '80%') {
				cb5.style.top = '80%';
			} else if (cb4.style.top != '80%') {
				cb4.style.top = '80%';
			} else if (cb3.style.top != '80%') {
				cb3.style.top = '80%';
			} else if (cb2.style.top != '80%') {
				cb2.style.top = '80%';
			} else if (cb1.style.top != '80%') {
				cb1.style.top = '80%';
			}
		}
	}
	catch(err) {
	}
}

function confirm() {
	try {
		// hide arrows
		document.getElementById('arrow-up').style.visibility = 'hidden';
		document.getElementById('arrow-down').style.visibility = 'hidden';

		// hide confirm button
		document.getElementById('confirmbutton').style.visibility = 'hidden';
	}
	catch(err) {
	}
}
