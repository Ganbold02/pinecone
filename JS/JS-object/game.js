let isTimeOut = false;
let score = 0;
const scoreTarget = document.querySelector("#scoreTarget");

function updateScore(point) {
  score += point;
  scoreTarget.innerHTML = score;
}

const parent = document.querySelector("ul");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomColor() {
  //RGB
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return [red, green, blue];
}
function getDifferentColor(colors) {
  const random = getRandomNumber(0, 2);
  const newColors = [...colors];
  let color = newColors[random];
  if (color > 126) {
    color -= 100;
  } else {
    color += 100;
  }
  newColors[random] = color;
  return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
}

function reDraw() {
  parent.innerHTML = "";
  const colors = getRandomColor();

  const randomIndex = getRandomNumber(0, 3);
  const tileCount = 9; //if - this score, add more tiles etc.
  for (let i = 0; i < tileCount; i++) {
    const li = document.createElement("li");
    const isNormal = i !== randomIndex;
    if (isNormal) {
      li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    } else {
      li.style.backgroundColor = getDifferentColor(colors);
    }
    li.addEventListener("click", function () {
      if (!isTimeOut) {
        if (!isNormal) {
          updateScore(1);
          reDraw();
        } else {
          updateScore(-2);
        }
      } else "time run out your score is:" + score;
    });
    parent.appendChild(li);
  }
}

reDraw();
isTimeOut(
  function () {
    isTimeOut = true;
  } * 10000
);
