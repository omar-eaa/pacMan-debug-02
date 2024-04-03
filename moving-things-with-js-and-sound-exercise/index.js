// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// arrow right 👇
// exercise 01
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

  if (e.key === "moveDodgerDown") {
    moveDodgerDown();
  }
});

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", ""); // unchanged
  const left = parseInt(leftNumbers, 10); // unchanged

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

// exercise 02

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < window.innerHeight - dodger.offsetHeight) {
    dodger.style.bottom = `${bottom + 1}px`;
  }
}

// new code
