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

	setTimeout(startReminder, 28000);

	var warned = false;
	function startReminder() {
		var audio = new Audio('../../../../../static/public_good_kids/audio/Erinnerung v2.mp3');
	  audio.play();

		if (!warned) {
			var img = document.createElement("img");
	    img.src = '../../../../../static/public_good_kids/img/exclamation.png';
			img.classList.add('fixtopright');
			document.body.appendChild(img);
			warned = true;
		}

		setTimeout(startReminder, 25000);
	}
}
