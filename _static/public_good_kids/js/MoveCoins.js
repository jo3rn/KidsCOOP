function showArrows() {
	// make arrows visible
	var arrows = document.getElementsByClassName('arrow');
	var i;
	for (i=0; i < arrows.length; i++) {
		arrows[i].style.visibility = 'visible';
	}
}


function moveToMain(moveAll=false, kStrategy=false) {
	// moves coin in mainpot
	try {
		logClick('u');
    // initialize variables
		var cb1 = document.getElementById('cb1');
		var cb2 = document.getElementById('cb2');
		var cb3 = document.getElementById('cb3');
		var cb4 = document.getElementById('cb4');
		var cb5 = document.getElementById('cb5');

    // if there are coins left between the pots
		if (coinCountdown == 1) {
      cb1.style.top = '61%';
      cb1.classList.add('maincoin');
      cb1.classList.remove("rotatedcoin");
      if (moveAll) {
  			cb2.style.top = '61%';
  			cb2.classList.add('maincoin');
  			cb2.classList.remove("rotatedcoin");
  			cb3.style.top = '61%';
  			cb3.classList.add('maincoin');
  			cb3.classList.remove("rotatedcoin");
  			cb4.style.top = '61%';
  			cb4.classList.add('maincoin');
  			cb4.classList.remove("rotatedcoin");
  			cb5.style.top = '61%';
  			cb5.classList.add('maincoin');
  			cb5.classList.remove("rotatedcoin");
  			coinCountdown = 6;
  			contribution += 5;
        showConfirmButton();
        if (!kStrategy) {
          hideOtherCoins();
        }
      } else {
			coinCountdown += 1;
			contribution += 1;
    }
		} else if (coinCountdown == 2) {
			cb2.style.top = '61%';
			cb2.classList.add('maincoin');
			cb2.classList.remove("rotatedcoin");
			coinCountdown += 1;
			contribution += 1;
		} else if (coinCountdown == 3) {
			cb3.style.top = '61%';
			cb3.classList.add('maincoin');
			cb3.classList.remove("rotatedcoin");
			coinCountdown += 1;
			contribution += 1;
		} else if (coinCountdown == 4) {
			cb4.style.top = '61%';
			cb4.classList.add('maincoin');
			cb4.classList.remove("rotatedcoin");
			coinCountdown += 1;
			contribution += 1;
		} else if (coinCountdown == 5) {
			cb5.style.top = '61%';
			cb5.classList.add('maincoin');
			cb5.classList.remove("rotatedcoin");
			coinCountdown += 1;
			contribution += 1;
			showConfirmButton();
      if (!kStrategy) {
        hideOtherCoins();
      }

    // if all coins are in either one of the pots
		} else {
			if (cb5.style.top != '61%') {
				cb5.style.top = '61%';
				cb5.classList.remove('owncoin');
				cb5.classList.add('maincoin');
        if (moveAll) {
          cb4.style.top = '61%';
  				cb4.classList.remove('owncoin');
  				cb4.classList.add('maincoin');
  				cb3.style.top = '61%';
  				cb3.classList.remove('owncoin');
  				cb3.classList.add('maincoin');
  				cb2.style.top = '61%';
  				cb2.classList.remove('owncoin');
  				cb2.classList.add('maincoin');
  				cb1.style.top = '61%';
  				cb1.classList.remove('owncoin');
  				cb1.classList.add('maincoin');
  				contribution += 5;
        } else {
          contribution += 1;
        }
			} else if (cb4.style.top != '61%') {
				cb4.style.top = '61%';
				cb4.classList.remove('owncoin');
				cb4.classList.add('maincoin');
				contribution += 1;
			} else if (cb3.style.top != '61%') {
				cb3.style.top = '61%';
				cb3.classList.remove('owncoin');
				cb3.classList.add('maincoin');
				contribution += 1;
			} else if (cb2.style.top != '61%') {
				cb2.style.top = '61%';
				cb2.classList.remove('owncoin');
				cb2.classList.add('maincoin');
				contribution += 1;
			} else if (cb1.style.top != '61%') {
				cb1.style.top = '61%';
				cb1.classList.remove('owncoin');
				cb1.classList.add('maincoin');
				contribution += 1;
			}
		}

	}
	catch(err) {
	}
}



function moveToOwn(moveAll=false) {
	// moves coin in own pot
	try {
		logClick('d');
    // initialize variables
		var cb1 = document.getElementById('cb1');
		var cb2 = document.getElementById('cb2');
		var cb3 = document.getElementById('cb3');
		var cb4 = document.getElementById('cb4');
		var cb5 = document.getElementById('cb5');

    // if there are coins left between the pots
		if (coinCountdown == 1) {
			cb1.style.top = '80%';
			cb1.classList.add('owncoin');
			cb1.classList.remove("rotatedcoin");
      if (moveAll) {
        cb2.style.top = '80%';
  			cb2.classList.add('owncoin');
  			cb2.classList.remove("rotatedcoin");
  			cb3.style.top = '80%';
  			cb3.classList.add('owncoin');
  			cb3.classList.remove("rotatedcoin");
  			cb4.style.top = '80%';
  			cb4.classList.add('owncoin');
  			cb4.classList.remove("rotatedcoin");
  			cb5.style.top = '80%';
  			cb5.classList.add('owncoin');
  			cb5.classList.remove("rotatedcoin");
  			coinCountdown = 6;
        showConfirmButton();
        if (!kStrategy) {
          hideOtherCoins();
        }
      } else {

        coinCountdown += 1;
      }
		} else if (coinCountdown == 2) {
			cb2.style.top = '80%';
			cb2.classList.add('owncoin');
			cb2.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 3) {
			cb3.style.top = '80%';
			cb3.classList.add('owncoin');
			cb3.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 4) {
			cb4.style.top = '80%';
			cb4.classList.add('owncoin');
			cb4.classList.remove("rotatedcoin");
			coinCountdown += 1;
		} else if (coinCountdown == 5) {
			cb5.style.top = '80%';
			cb5.classList.add('owncoin');
			cb5.classList.remove("rotatedcoin");
			coinCountdown += 1;
			showConfirmButton();
      if (!kStrategy) {
        hideOtherCoins();
      }

    // if all coins are in either one of the pots
		} else {
			if (cb5.style.top != '80%') {
				cb5.style.top = '80%';
				cb5.classList.remove('maincoin');
				cb5.classList.add('owncoin');
        if (moveAll) {
          cb4.style.top = '80%';
  				cb4.classList.remove('maincoin');
  				cb4.classList.add('owncoin');
  				cb3.style.top = '80%';
  				cb3.classList.remove('maincoin');
  				cb3.classList.add('owncoin');
  				cb2.style.top = '80%';
  				cb2.classList.remove('maincoin');
  				cb2.classList.add('owncoin');
  				cb1.style.top = '80%';
  				cb1.classList.remove('maincoin');
  				cb1.classList.add('owncoin');
  				contribution -= 5;
        } else {
          contribution -= 1;
        }
			} else if (cb4.style.top != '80%') {
				cb4.style.top = '80%';
				cb4.classList.remove('maincoin');
				cb4.classList.add('owncoin');
				contribution -= 1;
			} else if (cb3.style.top != '80%') {
				cb3.style.top = '80%';
				cb3.classList.remove('maincoin');
				cb3.classList.add('owncoin');
				contribution -= 1;
			} else if (cb2.style.top != '80%') {
				cb2.style.top = '80%';
				cb2.classList.remove('maincoin');
				cb2.classList.add('owncoin');
				contribution -= 1;
			} else if (cb1.style.top != '80%') {
				cb1.style.top = '80%';
				cb1.classList.remove('maincoin');
				cb1.classList.add('owncoin');
				contribution -= 1;
			}
		}
	}
	catch(err) {
	}
}


function showConfirmButton() {
  // show confirm button when all coins are distributed
  document.getElementById('confirmbutton').style.visibility = 'visible';
}

function hideOtherCoins() {
  // hide coins of other participants
  var othercoins = document.getElementsByClassName('hidaway');
  for (k=0; k < othercoins.length; k++) {
    othercoins[k].style.visibility = 'hidden';
  }
}

function logClick(direction) {
	log = document.getElementById('distPattern');
	log.value += direction;
}
