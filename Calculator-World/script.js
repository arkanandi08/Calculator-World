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



//ignore this 

window.addEventListener("load", function () {

  const schedule = [
    { text: "7-10: MHT CET Book Test", time: "07:00" },
    { text: "10:00-11:45 Physics class + breakfast", time: "10:00" },
    { text: "11:45-12:15 Bath", time: "11:45" },
    { text: "12:15-2:00 Mathematics", time: "12:15" },
    { text: "2:00-2:15 Lunch", time: "14:00" },
    { text: "2:15-4:00 Chemistry", time: "14:15" },
    { text: "4:00-6:00 Homework + Advanced Understanding", time: "16:00" },
    { text: "6:00-9:00 MHT CET Online Test", time: "18:00" },
    { text: "9:00-9:30 Dinner", time: "21:00" },
    { text: "9:30-11:30 CET Mistakes + Revision", time: "21:30" },
    { text: "11:30-12:00 Prepare for Sleep", time: "23:30" },
    { text: "12:00-6:30 Sleep", time: "00:00" }
  ];

  const now = new Date();

  schedule.forEach(item => {
    let [hours, minutes] = item.time.split(":").map(Number);

    let targetTime = new Date();
    targetTime.setHours(hours);
    targetTime.setMinutes(minutes);
    targetTime.setSeconds(0);

    if (targetTime > now) {
      let diff = targetTime - now;
      window.setTimeout(showNotification, diff, item.text);
    }
  });

});

window.addEventListener("load", function () {

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const routine = [
    { text: "MHT CET Book Test 🔥", start: 7 * 60, end: 10 * 60 },
    { text: "Physics Class + Breakfast ⚡", start: 10 * 60, end: 11 * 60 + 45 },
    { text: "Bath 🛁", start: 11 * 60 + 45, end: 12 * 60 + 15 },
    { text: "Mathematics 🧮", start: 12 * 60 + 15, end: 14 * 60 },
    { text: "Lunch 🍛", start: 14 * 60, end: 14 * 60 + 15 },
    { text: "Chemistry 🧪", start: 14 * 60 + 15, end: 16 * 60 },
    { text: "Homework + Advanced 📘", start: 16 * 60, end: 18 * 60 },
    { text: "MHT CET Online Test 🎯", start: 18 * 60, end: 21 * 60 },
    { text: "Dinner 🍽️", start: 21 * 60, end: 21 * 60 + 30 },
    { text: "CET Mistakes + Revision 📈", start: 21 * 60 + 30, end: 23 * 60 + 30 },
    { text: "Prepare for Sleep 🌙", start: 23 * 60 + 30, end: 24 * 60 },
    { text: "Sleep 😴", start: 0, end: 6 * 60 + 30 }
  ];

  routine.forEach(item => {
    if (currentMinutes >= item.start && currentMinutes < item.end) {
      showNotification("Right Now: " + item.text);
    }
  });

});