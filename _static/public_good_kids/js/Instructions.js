console.log("instructions.js loaded");

function runInstructions1a(){
  console.log("run 1a");
  let audio = new Audio('../../../../../static/public_good_kids/audio/Instruktion1a.mp3');
  audio.play();
	setTimeout(showPlayers, 3500);

	//call Instruktion1b
  setTimeout(runInstructions1b, 48000);
}

function runInstructions1b(){
  //Instruktion1b
  let audio = new Audio('../../../../../static/public_good_kids/Instruktion1b_v2.mp3');
  audio.play();

  setTimeout(showCoins, 1500);
  setTimeout(highlightCoin, 8000);
  setTimeout(dehighlightCoin, 12000);

  // call Instruktion2
  setTimeout(runInstructions2, 41000);

	/* for debugging purposes only
  showPlayers();
  showCoins();
  showAnimal();
  showOtherAnimals();

  setTimeout(advanceToNextPage, 2500);
	*/

}

function runInstructions2(){
  //Instruktion2
  var audio = new Audio('../../../../../static/public_good_kids/Instruktion2b_v2.mp3');
  audio.play();

  setTimeout(highlightCoins, 6000);
  setTimeout(dehighlight, 10000);
  setTimeout(highlightPots, 10000);
  setTimeout(rotateOwn, 11000);
  setTimeout(rotateMain, 13500);
  setTimeout(dehighlight, 17000);
  /*setTimeout(contributeOneCoin, 21000);
  setTimeout(doubleCoin, 24000);
  setTimeout(othersContribute, 21000);
  setTimeout(doubleCoins, 24000);
  setTimeout(repositionAndDelete, 58000);
	*/
  setTimeout(contributeOneCoin, 21000);
  setTimeout(doubleCoin, 24000);
  setTimeout(distributeFour, 29500);
  setTimeout(repositionAndDelete, 33000);
	/*
  setTimeout(highlightPlayer, 78000);
  setTimeout(dehighlight, 79500);
  setTimeout(highlightOtherPlayers, 80000);
  setTimeout(dehighlight, 81500);
	*/

  //setTimeout(showConfirm, 12000);

  //call Instruktion3
  setTimeout(runInstructions3, 41000);
}

function runInstructions3(){
  var audio = new Audio('../../../../../static/public_good_kids/Instruktion3_v2.mp3');
  audio.play();

  setTimeout(runBeispiel3, 18000);
}

function runBeispiel3() {
  var audio = new Audio('../../../../../static/public_good_kids/Beispiel3_v2.mp3');
  audio.play();
  setTimeout(highlightPlayer, 5000);
  setTimeout(highlightClassAlso, 5000, ['owncoins']);
	setTimeout(highlightIdAlso, 9000, ['partnerBottom']);
  setTimeout(move2ToOwn, 9000);

  setTimeout(highlightIdAlso, 13000, ['mainpot']);
  setTimeout(move3ToMain, 13000);

  setTimeout(highlightIdAlso, 16000, ['partnerLeft']);
  setTimeout(highlightClassAlso, 16000, ['figureLeft']);
  setTimeout(highlightClassAlso, 16000, ['coinsLeft']);
  setTimeout(move2ToOwn2, 17500);
  setTimeout(move3ToMain2, 17500);

  setTimeout(highlightIdAlso, 20500, ['partnerTop']);
  setTimeout(highlightClassAlso, 20500, ['figureTop']);
  setTimeout(highlightClassAlso, 20500, ['coinsTop']);
  setTimeout(move5ToMain, 24000);

  setTimeout(highlightIdAlso, 26000, ['partnerRight']);
  setTimeout(highlightClassAlso, 26000, ['figureRight']);
  setTimeout(highlightClassAlso, 26000, ['coinsRight']);
  setTimeout(move5ToOwn, 31000);

  setTimeout(cloneMaincoins, 36000);
  setTimeout(distributeCoins, 41500);
  setTimeout(distributeCoins, 42000);
  setTimeout(distributeCoins, 42500);
  setTimeout(distributeCoins, 43000);
  setTimeout(distributeCoins, 43500);
  setTimeout(distributeCoins, 44000);

	setTimeout(advanceToNextPage, 79000);

}


function showPlayers(){
  // shows pots, figures
  console.log("showPlayers");
  var i;
  var players = document.getElementsByClassName('players');
  for (i=0; i < players.length; i++) {
    players[i].classList.remove('hidden');
  }
}

function showCoins(){
  // shows coins
  console.log("showCoins");
  var j;
  var coins = document.getElementsByClassName('coins');
  for (j=0; j < coins.length; j++) {
    coins[j].classList.remove('hidden');
  }
}

function highlightCoin() {
  // highlights the middle coin pair
  console.log("highlightCoin");
  var elem = document.getElementById("cb3");
  elem.style.top = '35%';
  elem.style.left = '30%';
  elem.style.width = '40%';

  var el = document.querySelectorAll('*');
  for(var i=0;i<el.length;i++){
    if (el[i].id == 'cb3' || el[i].hasChildNodes()) {

    } else {
    el[i].style.opacity = '0.2';
    }
  }
}

function dehighlightCoin() {
  // removes highlighting of middle coin pair
  console.log("dehighlightCoin");
  var el = document.querySelectorAll('*');
  for(var i=0;i<el.length;i++){
    el[i].style.opacity = '1';
  }
  var elem = document.getElementById("cb3");
  elem.style.top = '70%';
  elem.style.left = '48%';
  elem.style.width = '4%';
}

function highlightCoins() {
  // highlights own 5 coin pairs
  console.log("highlightCoins");
  var el = document.querySelectorAll('*');
  for(var i=0;i<el.length;i++){
    if (el[i].classList.contains('owncoins') || el[i].hasChildNodes()) {

    } else {
    el[i].style.opacity = '0.2';
    }
  }
}

function dehighlight() {
  // changes opacity of all elements to normal (1)
  console.log("dehighlight");
  var el = document.querySelectorAll('*');
  for(var i=0;i<el.length;i++){
    el[i].style.opacity = '1';
  }
}

function highlightPots() {
  // highlights own pot and main pots
  console.log("highlightPots");
  var el = document.querySelectorAll('*');
  for(var i=0;i<el.length;i++){
    if (el[i].id == 'mainpot' || el[i].id == 'partnerBottom' || el[i].hasChildNodes()) {

    } else {
    el[i].style.opacity = '0.2';
    }
  }
}

function rotateMain() {
  console.log("rotateMain");
  var div = document.getElementById('mainpot');
  div.style.transition = 'all 2s';
  div.style.transform = 'rotate(360deg)';
}

function rotateOwn() {
  console.log("rotateOwn");
  var div = document.getElementById('partnerBottom');
  div.style.transition = 'all 2s';
  div.style.transform = 'rotate(360deg)';
}

function contributeOneCoin() {
  var cb3 = document.getElementById('cb3');
  cb3.style.top = '61%';
}

function doubleCoin() {
  var cb3 = document.getElementById('cb3');
  var coinClone = cb3.cloneNode();
  coinClone.classList.add('clone');
  coinClone.id = 'cb3clone';
  container.appendChild(coinClone);
  coinClone.style.top = '61%';
  coinClone.style.left = '48%';
  setTimeout(shift, 100);
  function shift() {
    coinClone.style.top = '54%';
  }
}

function othersContribute() {
  var cl3 = document.getElementById('cl3');
  cl3.style.left = '48%';
  cl3.style.top = '54%';
  var ct3 = document.getElementById('ct3');
  ct3.style.left = '48%';
  ct3.style.top = '39%';
  var cr3 = document.getElementById('cr3');
  cr3.style.left = '48%';
  cr3.style.top = '47%';
}

function doubleCoins() {
  var cl3 = document.getElementById('cl3');
  var ct3 = document.getElementById('ct3');
  var cr3 = document.getElementById('cr3');
  var coinClone2 = cl3.cloneNode();
  var coinClone3 = ct3.cloneNode();
  var coinClone4 = cr3.cloneNode();
  coinClone2.id = 'cl3clone';
  coinClone3.id = 'ct3clone';
  coinClone4.id = 'cr3clone';
  coinClone2.classList.add('clone');
  coinClone3.classList.add('clone');
  coinClone4.classList.add('clone');
  container.appendChild(coinClone2);
  container.appendChild(coinClone3);
  container.appendChild(coinClone4);
  coinClone2.style.top = '54%';
  coinClone3.style.top = '39%';
  coinClone4.style.top = '47%';
  coinClone2.style.left = '48%';
  coinClone2.style.left = '48%';
  coinClone2.style.left = '48%';
  setTimeout(shift, 100);
  function shift() {
    coinClone2.style.top = '51%';
    coinClone3.style.top = '36%';
    coinClone4.style.top = '44%';
  }
}

function repositionAndDelete() {
  var clones = document.getElementsByClassName('clone');
  var k = clones.length - 1;
  for (k; k >= 0; k--) {
    clones[k].parentNode.removeChild(clones[k]);
  }
  cb3.style.clipPath = 'none';
  cb3.style.left = '48%';
  cb3.style.top = '70%';
  cl3.style.left = '27%';
  cl3.style.top = '48%';
  ct3.style.left = '48%';
  ct3.style.top = '27%';
  cr3.style.left = '70%';
  cr3.style.top = '48%';
}

function distributeFour() {
  var cb3 = document.getElementById('cb3');
  var cb3clone = document.getElementById('cb3clone');
  var clone2 = cb3.cloneNode(false);
  clone2.classList.add('clone');
  var clone3 = cb3clone.cloneNode(false);
  clone3.classList.add('clone');
  var container = document.getElementById('container');
  container.appendChild(clone2);
  clone2.style.top = window.getComputedStyle(cb3,null).getPropertyValue('top');
  clone2.style.left = window.getComputedStyle(cb3,null).getPropertyValue('left');
  clone2.style.clipPath = "inset(0% 50% 0% 0%)";
  container.appendChild(clone3);
  clone3.style.top = window.getComputedStyle(cb3clone,null).getPropertyValue('top');
  clone3.style.left = window.getComputedStyle(cb3clone,null).getPropertyValue('left');
  clone3.style.clipPath = "inset(0% 50% 0% 0%)";

  // coin to left
  clone3.style.left = '10%';
  clone3.style.top = '48%';
  // coin to top
  cb3clone.style.left = '47%';
  cb3clone.style.top = '15%';
  cb3clone.style.clipPath = "inset(0% 00% 0% 50%)";
  // coin to right
  clone2.style.left = '90%';
  clone2.style.top = '48%';
  // coin to bottom
  cb3.style.left = '47%';
  cb3.style.top = '85%';
  cb3.style.clipPath = "inset(0% 0% 0% 50%)";
}

function highlightPlayer() {
  console.log("highlightPlayer");
  var el = document.querySelectorAll('*');
  for(var i=0;i<el.length;i++){
    if (el[i].classList.contains('highyou') || el[i].hasChildNodes()) {

    } else {
    el[i].style.opacity = '0.2';
    }
  }
}

function highlightOtherPlayers() {
  console.log("highlightOtherPlayers");
  var el = document.querySelectorAll('*');
  for(var i=0;i<el.length;i++){
    if (el[i].classList.contains('highthem') || el[i].hasChildNodes()) {

    } else {
    el[i].style.opacity = '0.2';
    }
  }
}

function highlightClassAlso(theClass) {
  /* highlights elements of the specified class,
  while sth else is already higlighted */
  console.log("highlightClassAlso " + theClass);
  var i;
  var el = document.querySelectorAll('*');
  for(var i=0;i<el.length;i++){
    if (el[i].classList.contains(theClass)) {
      el[i].style.opacity = '1';
    }
  }
}

function highlightIdAlso(id) {
  /* highlights the element with the specified id,
  while sth else is already higlighted */
  console.log("highlightIdAlso " + id);
  document.getElementById(id).style.opacity = '1';
}

function move2ToOwn(){
  document.getElementById('cb1').style.top = '80%';
	document.getElementById('cb1').classList.remove("rotatedcoin");
  document.getElementById('cb2').style.top = '80%';
	document.getElementById('cb2').classList.remove("rotatedcoin");
}

function move3ToMain() {
  document.getElementById('cb3').style.top = '61%';
  document.getElementById('cb3').classList.add('maincoin');
  document.getElementById('cb4').style.top = '61%';
  document.getElementById('cb4').classList.add('maincoin');
  document.getElementById('cb5').style.top = '61%';
  document.getElementById('cb5').classList.add('maincoin');
	document.getElementById('cb3').classList.remove("rotatedcoin");
	document.getElementById('cb4').classList.remove("rotatedcoin");
	document.getElementById('cb5').classList.remove("rotatedcoin");

}

function move2ToOwn2() {
  document.getElementById('cl1').style.left = '2.5%';
  document.getElementById('cl1').style.top = '55%';
  document.getElementById('cl2').style.left = '6.5%';
  document.getElementById('cl2').style.top = '55%';
}

function move3ToMain2() {
  document.getElementById('cl3').style.left = '40%';
  document.getElementById('cl3').style.top = '54%';
  document.getElementById('cl3').classList.add('maincoin');
  document.getElementById('cl4').style.left = '44%';
  document.getElementById('cl4').style.top = '54%';
  document.getElementById('cl4').classList.add('maincoin');
  document.getElementById('cl5').style.left = '48%';
  document.getElementById('cl5').style.top = '54%';
  document.getElementById('cl5').classList.add('maincoin');
}

function move5ToMain() {
  document.getElementById('ct1').style.top = '47%';
  document.getElementById('ct2').style.top = '47%';
  document.getElementById('ct3').style.top = '47%';
  document.getElementById('ct4').style.top = '54%';
  document.getElementById('ct5').style.top = '54%';
  document.getElementById('ct1').classList.add('maincoin');
  document.getElementById('ct2').classList.add('maincoin');
  document.getElementById('ct3').classList.add('maincoin');
  document.getElementById('ct4').classList.add('maincoin');
  document.getElementById('ct5').classList.add('maincoin');
	document.getElementById('ct1').classList.remove("rotatedcoin");
  document.getElementById('ct2').classList.remove("rotatedcoin");
  document.getElementById('ct3').classList.remove("rotatedcoin");
  document.getElementById('ct4').classList.remove("rotatedcoin");
  document.getElementById('ct5').classList.remove("rotatedcoin");
}

function move5ToOwn() {
  document.getElementById('cr1').style.left = '77.5%';
  document.getElementById('cr2').style.left = '81.5%';
  document.getElementById('cr3').style.left = '85.5%';
  document.getElementById('cr4').style.left = '89.5%';
  document.getElementById('cr5').style.left = '93.5%';
  document.getElementById('cr1').style.top = '55%';
  document.getElementById('cr2').style.top = '55%';
  document.getElementById('cr3').style.top = '55%';
  document.getElementById('cr4').style.top = '55%';
  document.getElementById('cr5').style.top = '55%';
}

function cloneMaincoins() {
  var maincoins = document.getElementsByClassName('maincoin');
  var i;
  var amount = maincoins.length;

  for (i=0; i < amount; i++) {
    // prepare cloning of coins
    var top = window.getComputedStyle(maincoins[i],null).getPropertyValue('top');
    var left = window.getComputedStyle(maincoins[i],null).getPropertyValue('left');

    // rename IDs of coins in mainpot
    maincoins[i].id = 'maincoin' + i;
    maincoins[i].style.top = top;
    maincoins[i].style.left = left;

    // clone coins in mainpot
    var coinClone = maincoins[i].cloneNode();
    // rename IDs of clones
    coinClone.id = 'maincoin' + (amount + i);
    container.appendChild(coinClone);
    // put clones on already existing coins
    coinClone.style.top = top;
    coinClone.style.left = left;
  }

  // reassign variable so that also doubled coins are included
  var maincoins = document.getElementsByClassName('maincoin');
  var j;

  // shift the original coins slightly above the doubled coins
  for (j=0; j < amount; j++) {
    if (2 < j && j < 6) {
      maincoins[j].style.top = '44%';
    } else if (7 < j && j < 11) {
      maincoins[j].style.top = '58%';
    } else {
      maincoins[j].style.top = '51%';
    }
  }

}

function distributeCoins() {
	try {
		var maincoins = document.getElementsByClassName('maincoin');

    // determine new position of coins
		if (maincoins.length > 39) {
			// coin to left
			maincoins[0].style.left = '18.5%';
			maincoins[0].style.top = '50%';
			// coin to top
			maincoins[1].style.left = '56%';
			maincoins[1].style.top = '13%';
			// coin to right
			maincoins[2].style.left = '93.5%';
			maincoins[2].style.top = '50%';
			// coin to bottom
			maincoins[3].style.left = '56%';
			maincoins[3].style.top = '90%';

			maincoins[3].classList.remove('maincoin');
			maincoins[2].classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		} else if (maincoins.length > 35) {
			// coin to left
			maincoins[0].style.left = '14.5%';
			maincoins[0].style.top = '50%';
			// coin to top
			maincoins[1].style.left = '52%';
			maincoins[1].style.top = '13%';
			// coin to right
			maincoins[2].style.left = '89.5%';
			maincoins[2].style.top = '50%';
			// coin to bottom
			maincoins[3].style.left = '52%';
			maincoins[3].style.top = '90%';

			maincoins[3].classList.remove('maincoin');
			maincoins[2].classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		} else if (maincoins.length > 31) {
			// coin to left
			maincoins[0].style.left = '10.5%';
			maincoins[0].style.top = '50%';
			// coin to top
			maincoins[1].style.left = '48%';
			maincoins[1].style.top = '13%';
			// coin to right
			maincoins[2].style.left = '85.5%';
			maincoins[2].style.top = '50%';
			// coin to bottom
			maincoins[3].style.left = '48%';
			maincoins[3].style.top = '90%';

			maincoins[3].classList.remove('maincoin');
			maincoins[2].classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		} else if (maincoins.length > 27) {
			// coin to left
			maincoins[0].style.left = '6.5%';
			maincoins[0].style.top = '50%';
			// coin to top
			maincoins[1].style.left = '44%';
			maincoins[1].style.top = '13%';
			// coin to right
			maincoins[2].style.left = '81.5%';
			maincoins[2].style.top = '50%';
			// coin to bottom
			maincoins[3].style.left = '44%';
			maincoins[3].style.top = '90%';

			maincoins[3].classList.remove('maincoin');
			maincoins[2].classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		} else if (maincoins.length > 23) {
			// coin to left
			maincoins[0].style.left = '2.5%';
			maincoins[0].style.top = '50%';
			// coin to top
			maincoins[1].style.left = '40%';
			maincoins[1].style.top = '13%';
			// coin to right
			maincoins[2].style.left = '77.5%';
			maincoins[2].style.top = '50%';
			// coin to bottom
			maincoins[3].style.left = '40%';
			maincoins[3].style.top = '90%';

			maincoins[3].classList.remove('maincoin');
			maincoins[2].classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		} else if (maincoins.length > 19) {
			// coin to left
			maincoins[0].style.left = '18.5%';
			maincoins[0].style.top = '45%';
			// coin to top
			maincoins[1].style.left = '56%';
			maincoins[1].style.top = '8%';
			// coin to right
			maincoins[2].style.left = '93.5%';
			maincoins[2].style.top = '45%';
			// coin to bottom
			maincoins[3].style.left = '56%';
			maincoins[3].style.top = '85%';

			maincoins[3].classList.remove('maincoin');
			maincoins[2].classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		} else if (maincoins.length > 15) {
			// coin to left
			maincoins[0].style.left = '14.5%';
			maincoins[0].style.top = '45%';
			// coin to top
			maincoins[1].style.left = '52%';
			maincoins[1].style.top = '8%';
			// coin to right
			maincoins[2].style.left = '89.5%';
			maincoins[2].style.top = '45%';
			// coin to bottom
			maincoins[3].style.left = '52%';
			maincoins[3].style.top = '85%';

			maincoins[3].classList.remove('maincoin');
			maincoins[2].classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		} else if (maincoins.length > 11) {
			// coin to left
			maincoins[0].style.left = '10.5%';
			maincoins[0].style.top = '45%';
			// coin to top
			maincoins[1].style.left = '48%';
			maincoins[1].style.top = '8%';
			// coin to right
			maincoins[2].style.left = '85.5%';
			maincoins[2].style.top = '45%';
			// coin to bottom
			maincoins[3].style.left = '48%';
			maincoins[3].style.top = '85%';

			maincoins[3].classList.remove('maincoin');
			maincoins[2].classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		} else if (maincoins.length > 7) {
			// coin to left
			maincoins[0].style.left = '6.5%';
			maincoins[0].style.top = '45%';
			// coin to top
			maincoins[1].style.left = '44%';
			maincoins[1].style.top = '8%';
			// coin to right
			maincoins[2].style.left = '81.5%';
			maincoins[2].style.top = '45%';
			// coin to bottom
			maincoins[3].style.left = '44%';
			maincoins[3].style.top = '85%';

			maincoins[3].classList.remove('maincoin');
			maincoins[2].classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		} else if (maincoins.length > 3) {
			// coin to left
			maincoins[0].style.left = '2.5%';
			maincoins[0].style.top = '45%';
			// coin to top
			maincoins[1].style.left = '40%';
			maincoins[1].style.top = '8%';
			// coin to right
			maincoins[2].style.left = '77.5%';
			maincoins[2].style.top = '45%';
			// coin to bottom
			maincoins[3].style.left = '40%';
			maincoins[3].style.top = '85%';

			maincoins[3].classList.remove('maincoin');
			maincoins[2].classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		} else if (maincoins.length > 0) {
      // split coins if only 4 coins (2 coin pairs) are left
			maincoins[0].removeAttribute("id");
			maincoins[1].removeAttribute("id");
			var clone0 = maincoins[0].cloneNode(false);
			var clone1 = maincoins[1].cloneNode(false);
			var container = document.getElementById('container');
			container.appendChild(clone0);
			clone0.style.top = window.getComputedStyle(maincoins[0],null).getPropertyValue('top');
			clone0.style.left = window.getComputedStyle(maincoins[0],null).getPropertyValue('left');
			clone0.style.clipPath = "inset(0% 50% 0% 0%)";
			container.appendChild(clone1);
			clone1.style.top = window.getComputedStyle(maincoins[1],null).getPropertyValue('top');
			clone1.style.left = window.getComputedStyle(maincoins[1],null).getPropertyValue('left');
			clone1.style.clipPath = "inset(0% 50% 0% 0%)";

			// coin to left
			maincoins[0].style.left = '18.5%';
			maincoins[0].style.top = '50%';
			maincoins[0].style.clipPath = "inset(0% 0% 0% 50%)";
			// coin to top
			maincoins[1].style.left = '56%';
			maincoins[1].style.top = '13%';
			maincoins[1].style.clipPath = "inset(0% 0% 0% 50%)";
			// coin to right
			clone0.style.left = '93.5%';
			clone0.style.top = '50%';
			// coin to bottom
			clone1.style.left = '56%';
			clone1.style.top = '90%';

			clone1.classList.remove('maincoin');
			clone0.classList.remove('maincoin');
			maincoins[1].classList.remove('maincoin');
			maincoins[0].classList.remove('maincoin');
		}

	}
	catch(err) {
	}
}

function highlightClass(theClass) {
  // highlights only the specified class
  console.log("highlightClass");
  var el = document.querySelectorAll('*');
  for(var i=0;i<el.length;i++){
    if (el[i].classList.contains(theClass)) {

    } else {
    el[i].style.opacity = '0.2';
    }
  }
}

function advanceToNextPage() {
  document.getElementById("form").submit();
}

function showConfirm() {
  // shows confirm button (green tick)
  console.log("showConfirm");
  document.getElementById('confirmbutton').style.visibility = 'visible';
}
