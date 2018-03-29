function distributeOtherCoins(kX) {
	if (kX < 2) {
	  moveLeftCoins('own');
	} else {
	  moveLeftCoins('main');
	}

	if (kX < 1) {
	  moveTopCoins('own');
	} else {
	  moveTopCoins('main');
	}

	if (kX < 3) {
	  moveRightCoins('own');
	} else {
	  moveRightCoins('main');
	}

}


function moveLeftCoins(pot) {
	var cl1 = document.getElementById('cl1');
	var cl2 = document.getElementById('cl2');
	var cl3 = document.getElementById('cl3');
	var cl4 = document.getElementById('cl4');
	var cl5 = document.getElementById('cl5');

  if (pot == 'main') {
    cl1.style.left = '40%';
  	cl2.style.left = '44%';
  	cl3.style.left = '48%';
  	cl4.style.left = '52%';
  	cl5.style.left = '56%';
  	cl1.style.top = '47%';
  	cl2.style.top = '47%';
  	cl3.style.top = '47%';
  	cl4.style.top = '47%';
  	cl5.style.top = '47%';

  } else if (pot == 'own') {
    cl1.style.left = '2.5%';
  	cl2.style.left = '6.5%';
  	cl3.style.left = '10.5%';
  	cl4.style.left = '14.5%';
  	cl5.style.left = '18.5%';
  	cl1.style.top = '55%';
  	cl2.style.top = '55%';
  	cl3.style.top = '55%';
  	cl4.style.top = '55%';
  	cl5.style.top = '55%';
  }
}

function moveTopCoins(pot) {
	var ct1 = document.getElementById('ct1');
	var ct2 = document.getElementById('ct2');
	var ct3 = document.getElementById('ct3');
	var ct4 = document.getElementById('ct4');
	var ct5 = document.getElementById('ct5');
	ct1.classList.remove("rotatedcoin");
	ct2.classList.remove("rotatedcoin");
	ct3.classList.remove("rotatedcoin");
	ct4.classList.remove("rotatedcoin");
	ct5.classList.remove("rotatedcoin");

  if (pot == 'main') {
    ct1.style.left = '40%';
  	ct2.style.left = '44%';
  	ct3.style.left = '48%';
  	ct4.style.left = '52%';
  	ct5.style.left = '56%';
  	ct1.style.top = '40%';
  	ct2.style.top = '40%';
  	ct3.style.top = '40%';
  	ct4.style.top = '40%';
  	ct5.style.top = '40%';

  } else if (pot == 'own') {
    ct1.style.left = '40%';
  	ct2.style.left = '44%';
  	ct3.style.left = '48%';
  	ct4.style.left = '52%';
  	ct5.style.left = '56%';
  	ct1.style.top = '18%';
  	ct2.style.top = '18%';
  	ct3.style.top = '18%';
  	ct4.style.top = '18%';
  	ct5.style.top = '18%';
  }
}

function moveRightCoins(pot) {
	var cr1 = document.getElementById('cr1');
	var cr2 = document.getElementById('cr2');
	var cr3 = document.getElementById('cr3');
	var cr4 = document.getElementById('cr4');
	var cr5 = document.getElementById('cr5');

  if (pot == 'main') {
    cr1.style.left = '40%';
  	cr2.style.left = '44%';
  	cr3.style.left = '48%';
  	cr4.style.left = '52%';
  	cr5.style.left = '56%';
  	cr1.style.top = '54%';
  	cr2.style.top = '54%';
  	cr3.style.top = '54%';
  	cr4.style.top = '54%';
  	cr5.style.top = '54%';

  } else if (pot == 'own') {
    cr1.style.left = '93.5%';
    cr2.style.left = '89.5%';
    cr3.style.left = '85.5%';
    cr4.style.left = '81.5%';
    cr5.style.left = '77.5%';
    cr1.style.top = '55%';
    cr2.style.top = '55%';
    cr3.style.top = '55%';
    cr4.style.top = '55%';
    cr5.style.top = '55%';
  }
}

function moveBottomCoins(pot) {
	var cb1 = document.getElementById('cb1');
	var cb2 = document.getElementById('cb2');
	var cb3 = document.getElementById('cb3');
	var cb4 = document.getElementById('cb4');
	var cb5 = document.getElementById('cb5');
	cb1.classList.remove("rotatedcoin");
	cb2.classList.remove("rotatedcoin");
	cb3.classList.remove("rotatedcoin");
	cb4.classList.remove("rotatedcoin");
	cb5.classList.remove("rotatedcoin");

  if (pot == 'main') {
  	cb1.style.top = '61%';
  	cb2.style.top = '61%';
  	cb3.style.top = '61%';
  	cb4.style.top = '61%';
  	cb5.style.top = '61%';

  } else if (pot == 'own') {
    cb1.style.top = '80%';
    cb2.style.top = '80%';
    cb3.style.top = '80%';
    cb4.style.top = '80%';
    cb5.style.top = '80%';
  }
}
