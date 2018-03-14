function playAudio() {
  var audio = new Audio('../../../../../static/public_good_kids/audio/Testleiterhilfe v1.mp3');
  audio.play();
}

function checkPassword() {
  if (document.getElementById("password").value == "pgood") {
    document.getElementById("form").submit();
  }
}

function toggleView() {
  if (container.classList.contains('hideThis')) {
    document.getElementById("container").classList.remove("hideThis");
    document.getElementById("container").classList.add("showThis");
    document.getElementById("center").classList.remove("showThis");
    document.getElementById("center").classList.add("hideThis");
  }
}
