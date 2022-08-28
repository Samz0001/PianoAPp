const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
console.log(keys);
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys = document.querySelectorAll(".key.white");

keys.forEach(function (key) {
  key.addEventListener("click", () => {
    playNote(key);
  });
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);

  noteAudio.currentTime = 0;
  noteAudio.play();

  key.classList.add("active");

  noteAudio.addEventListener("ended", function () {
    key.classList.remove("active");
  });
}

document.addEventListener("keydown", function (e) {
  let key = e.key;
  //   console.log(key);
  let whitekeyIndex = WHITE_KEYS.indexOf(key);
  let blackkeyIndex = BLACK_KEYS.indexOf(key);

  if (whitekeyIndex > -1) playNote(whiteKeys[whitekeyIndex]);
  if (blackkeyIndex > -1) playNote(blackKeys[blackkeyIndex]);
});
