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

function drop(a) {
  if (document.getElementById("drop").style.display == "none") {
    document.getElementById("drop").style.display = "block";
    document.getElementById("cover").style.display = "block";
    document.getElementById("hed").style.display = "none";
    if (a == "set") {
      document.getElementById("set").style.display = "block";
    }
    else if(a == "ytgt"){
      document.getElementById("ytgt").style.display = "block";
    }
    else if(a == "ytgt"){
      document.getElementById("dtgt").style.display = "block";
    }
  }
}

function create() {
  document.getElementById("f2").style.display = "block";
}

function tmset() {
  var trgt = document.getElementById("trgt").value;
  if (trgt == "") {
    alert("Please Set a Target!!");
    document.getElementById("trgt").focus();
    check();
  }
  else {
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
      document.getElementById("tmp").focus();
    }
    else if (tim <= 0) {
      alert(time + " has been passed away!!")
    }
    else {
      var tg = document.getElementById("trgt").value;
      window.setTimeout(showNotification, tim, tg);
      document.getElementById("notat").innerText = ftm;
      document.getElementById("drop").style.display = "none";
      block();
    }
  }
}

function tim(s) {
  var trgt = document.getElementById("trgt").value;
  if (trgt == "") {
    alert("Please Set a Target!!");
    document.getElementById("trgt").focus();
  }
  else {
    window.setTimeout(showNotification, s, trgt);
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
    window.setTimeout(check, 4000);
    window.setTimeout(nblock, 4000);
    var cl, a0, a1, a2, a3, tg, aa, bb, c, d, e, f, g;
    cl = document.getElementsByClassName("secytgt");
    a0 = cl[0].innerText;
    a1 = cl[1].innerText;
    a2 = cl[2].innerText;
    a3 = cl[3].innerText;
    for (i = 0; i <= 4; i++) {
      a = cl[i].innerText;
      tg = document.getElementById("trgt").value;
      f = document.getElementById("notat").innerText;
      if (a == "") {
        cl[i].innerText = tg + " - " + f;
        break;
      }
      else {
        aa = cl[i].innerText;
        c = aa.substring(aa.length - 8, aa.length);
        d = c.trim();
        let eParts = d.split(":").map(Number);
        e = eParts[0] * 3600 + eParts[1] * 60 + eParts[2];
        let gParts = f.split(":").map(Number);
        g = gParts[0] * 3600 + gParts[1] * 60 + gParts[2];
        if (g < e) {
          cl[i].innerText = tg + " - " + f;
          if (cl[i + 1].innerText == "") {
            cl[i + 1].innerText = aa;
            break;
          }
          else if (cl[i + 2].innerText == "") {
            cl[i + 2].innerText = cl[i + 1].innerText;
            cl[i + 1].innerText = aa;
            break;
          }
          else if (cl[i + 3].innerText == "") {
            cl[i + 3].innerText = cl[i + 2].innerText;
            cl[i + 2].innerText = cl[i + 1].innerText;
            cl[i + 1].innerText = aa;
            break;
          }
          else if (cl[i + 4].innerText == "") {
            cl[i + 4].innerText = cl[i + 3].innerText;
            cl[i + 3].innerText = cl[i + 2].innerText;
            cl[i + 2].innerText = cl[i + 1].innerText;
            cl[i + 1].innerText = aa;
            break;
          }
        }
      }
    }
  }
}

function nblock() {
  document.getElementById("trgt").value = "";
  document.getElementById("block").style.display = "none";
  document.getElementById("cover").style.display = "none";
  for (i = 0; i <= 4; i++) {
    let cl = document.getElementsByClassName("secytgt");
    a = cl[i].innerText;
    if (a != "") {
      cl[i].style.padding = "2vh";
    }
  }
}

async function showNotification(a) {
  let cl = document.getElementsByClassName("secytgt");
  for (let i = 0; i < cl.length - 1; i++) {
    cl[i].innerText = cl[i + 1].innerText;
  }
  cl[cl.length - 1].innerText = "";
  for (i = 0; i <= 4; i++) {
    if (cl[i].innerText == "") {
      cl[i].style.padding = "0";
    }
  }
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



function notes() {
  window.location.href = 'notes.html';
}

window.addEventListener("beforeunload", function(e) {
  var elements = document.getElementsByClassName("secytgt");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerText.trim() !== "") {
      e.preventDefault();
      e.returnValue = "You have unfinished targets. Are you sure you want to leave?";
      return;
    }
  }
});