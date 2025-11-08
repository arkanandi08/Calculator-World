function check() {
  document.getElementById("topt").style.display = "none";
  document.getElementById("drop").style.display = "none";
  document.getElementById("trgt").focus();
  document.getElementById("cover").style.display = "none";
  document.getElementById("hed").style.display = "block";
  document.getElementById("set").style.display = "none";
  document.getElementById("ytgt").style.display = "none";
}

function topt() {
  if (document.getElementById("topt").style.display == "none") {
    document.getElementById("topt").style.display = "block";
    document.getElementById("cover").style.display = "block";
  }
  else {
    document.getElementById("topt").style.display = "none";
    document.getElementById("cover").style.display = "none";
  }
}

function drop() {
  if (document.getElementById("drop").style.display == "none") {
    document.getElementById("set").style.display = "block";
    document.getElementById("drop").style.display = "block";
    document.getElementById("cover").style.display = "block";
    document.getElementById("hed").style.display = "none";
  }
}

function create() {
  document.getElementById("f2").style.display = "block";
}

function tmset() {
  let time = document.getElementById("tmp").value;
  let now = new Date();
  var phr = now.getHours();
  var pmn = now.getMinutes();
  var ps = now.getSeconds();
  var hr = time.charAt(0) + time.charAt(1);
  var min = time.charAt(3) + time.charAt(4);
  var hour = hr - phr;
  var minute = min - pmn;
  var tim = hour * 3600000 + minute * 60000;
  var ftm = time + ":" + ps;
  if (time == "") {
    alert("Please Set a Time!!");
  }
  else if (tim <= 0) {
    alert(time + " has been passed away!!")
  }
  else {
    var tg = document.getElementById("trgt").value;
    window.setTimeout(showNotification, tim,tg);
    document.getElementById("drop").style.display = "none";
    block();
    document.getElementById("notat").innerText = ftm;
  }
}

function tim(s) {
  var trgt = document.getElementById("trgt").value;
  if (trgt == "") {
    alert("Please Set a Target!!");
  }
  else {
    window.setTimeout(showNotification, s,trgt);
    let now = new Date();
    var phr = now.getHours();
    var pmn = now.getMinutes();
    var ps = now.getSeconds();
    var sec = s / 1000 + ps;
    if (s % 60 == 0) {
      pmn = Math.floor(pmn + (sec / 60));
      sec = ps;
    }
    if (pmn >= 60) {
      var b = Math.floor(phr + (pmn / 60));
      pmn = pmn - (b - phr) * 60;
      phr = b;
    }
    if (phr >= 24) {
      phr = phr - 24;
    }
    var time = phr + ":" + pmn + ":" + sec;
    document.getElementById("notat").innerText = time;
    block();
  }
}

function block() {
  var b = document.getElementsByClassName("secytgt")[4].innerText;
  if (b != "") {
    alert("You have already created 5 targets first complete them");
  }
  else {
    document.getElementById("block").style.display = "block";
    window.setTimeout(nblock, 4000);
    for (i = 0; i <= 4; i++) {
      var a = document.getElementsByClassName("secytgt")[i].innerText;
      if (a == "") {
        document.getElementsByClassName("secytgt")[i].innerText = document.getElementById("trgt").value +" - "+ document.getElementById("notat").innerText;
        document.getElementsByClassName("secytgt")[i].style.padding = "2vh";
        break;
      }
    }
  }
}

function nblock() {
  document.getElementById("trgt").value = "";
  document.getElementById("block").style.display = "none";
  document.getElementById("cover").style.display = "none";
}

async function showNotification(a) {
  document.getElementsByClassName("secytgt")[0].innerText = "";
  try {
    if (Notification.permission === "granted") {
      new Notification(a, { body: "Its Time Up remainder!! ✅" });
    } else if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        new Notification("Hey User!", { body: "Now you can get notifications like this 🔥" });
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

function trgts() {
  if (document.getElementById("drop").style.display == "none") {
    document.getElementById("drop").style.display = "block";
    document.getElementById("cover").style.display = "block";
    document.getElementById("hed").style.display = "none";
    document.getElementById("ytgt").style.display = "block";
  }
}

function notes() {
  window.location.href = 'notes.html';
}