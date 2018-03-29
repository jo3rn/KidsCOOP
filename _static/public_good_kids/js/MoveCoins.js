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

function hideConfirmButton() {
  // show confirm button when all coins are distributed
  document.getElementById('confirmbutton').style.visibility = 'hidden';
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

function resetAllCoins() {
	var cl1 = document.getElementById('cl1');
	var cl2 = document.getElementById('cl2');
	var cl3 = document.getElementById('cl3');
	var cl4 = document.getElementById('cl4');
	var cl5 = document.getElementById('cl5');
	var ct1 = document.getElementById('ct1');
	var ct2 = document.getElementById('ct2');
	var ct3 = document.getElementById('ct3');
	var ct4 = document.getElementById('ct4');
	var ct5 = document.getElementById('ct5');
	var cr1 = document.getElementById('cr1');
	var cr2 = document.getElementById('cr2');
	var cr3 = document.getElementById('cr3');
	var cr4 = document.getElementById('cr4');
	var cr5 = document.getElementById('cr5');
	var cb1 = document.getElementById('cb1');
	var cb2 = document.getElementById('cb2');
	var cb3 = document.getElementById('cb3');
	var cb4 = document.getElementById('cb4');
	var cb5 = document.getElementById('cb5');

	cl1.style.top = '41%';
	cl1.style.left = '27%';
	cl2.style.top = '44.5%';
	cl2.style.left = '27%';
	cl3.style.top = '48%';
	cl3.style.left = '27%';
	cl4.style.top = '51.5%';
	cl4.style.left = '27%';
	cl5.style.top = '55%';
	cl5.style.left = '27%';

	ct1.style.top = '27%';
	ct1.style.left = '40%';
	ct1.classList.add("rotatedcoin");
	ct2.style.top = '27%';
	ct2.style.left = '44%';
	ct2.classList.add("rotatedcoin");
	ct3.style.top = '27%';
	ct3.style.left = '48%';
	ct3.classList.add("rotatedcoin");
	ct4.style.top = '27%';
	ct4.style.left = '52%';
	ct4.classList.add("rotatedcoin");
	ct5.style.top = '27%';
	ct5.style.left = '56%';
	ct5.classList.add("rotatedcoin");

	cr1.style.top = '41%';
	cr1.style.left = '70%';
	cr2.style.top = '44.5%';
	cr2.style.left = '70%';
	cr3.style.top = '48%';
	cr3.style.left = '70%';
	cr4.style.top = '51.5%';
	cr4.style.left = '70%';
	cr5.style.top = '55%';
	cr5.style.left = '70%';

	cb1.style.top = '70%';
	cb1.style.left = '40%';
	cb1.classList.add("rotatedcoin");
	cb2.style.top = '70%';
	cb2.style.left = '44%';
	cb2.classList.add("rotatedcoin");
	cb3.style.top = '70%';
	cb3.style.left = '48%';
	cb3.classList.add("rotatedcoin");
	cb4.style.top = '70%';
	cb4.style.left = '52%';
	cb4.classList.add("rotatedcoin");
	cb5.style.top = '70%';
	cb5.style.left = '56%';
	cb5.classList.add("rotatedcoin");
}
