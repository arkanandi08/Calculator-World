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
  let lastMissedReminder = localStorage.getItem("lastMissedReminder");

  // Function to notify about missed tasks
  function showMissedTaskNotification(task) {
    window.setTimeout(() => {
      alert(`Missed Task: ${task}`);
      showNotification(task);
    }, 500);
  }

  schedule.forEach(item => {
    let [hours, minutes] = item.time.split(":").map(Number);
    let targetTime = new Date();
    targetTime.setHours(hours);
    targetTime.setMinutes(minutes);
    targetTime.setSeconds(0);

    let diff = targetTime - now;

    if (diff > 0 && (!lastMissedReminder || targetTime.getTime() !== lastMissedReminder)) {
      // Set the timeout for future reminders
      window.setTimeout(showNotification, diff, item.text);
    } else if (diff <= 0 && (!lastMissedReminder || targetTime.getTime() !== lastMissedReminder)) {
      // If reminder is missed and it's the first one
      showMissedTaskNotification(item.text);
      localStorage.setItem("lastMissedReminder", targetTime.getTime()); // Store the time of missed reminder
    }
  });
});