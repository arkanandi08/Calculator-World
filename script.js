window.addEventListener("load", function() {
  const minDelay = 4500;
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, minDelay);
});

function navback() {
  window.history.back();
}

function trav() {
  setTimeout(function() {
    window.history.back();
  }, 4800);
}

function more() {
  if (document.getElementById("more").style.display == "none") {
    document.getElementById("more").style.display = "block";
  }
  else {
    document.getElementById("more").style.display = "none";
  }
}

function whi() {
  if (document.getElementById("which").style.display == "none") {
    document.getElementById("which").style.display = "block";
  }
  else {
    document.getElementById("which").style.display = "none";
  }
}

function clwh() {
  document.getElementById("which").style.display = "none";
  document.getElementById("more").style.display = "none";
}

function trig(func) {
  let currentValue = parseFloat(display.innerText);
  let radians = currentValue * (Math.PI / 180);
  if (func === 'sin') {
    result = Math.sin(radians);
  } else if (func === 'cos') {
    result = Math.cos(radians);
  } else if (func === 'tan') {
    result = Math.tan(radians);
  } else if (func === 'sec') {
    result = 1 / Math.cos(radians);
  } else if (func === 'cosec') {
    result = 1 / Math.sin(radians);
  } else if (func === 'cot') {
    result = 1 / Math.tan(radians);
  }
  display.innerText = result.toFixed(8);
}