document.getElementById("confirmbutton").addEventListener("click", confirm);

function confirm() {
	try {
		// hide arrows
		document.getElementById('arrow-up').style.visibility = 'hidden';
		document.getElementById('arrow-down').style.visibility = 'hidden';

		// hide confirm button
		document.getElementById('confirmbutton').style.visibility = 'hidden';

    // write contribution in input field for database
    document.getElementById("contribution").value = contribution;

	}
	catch(err) {
	}
}
