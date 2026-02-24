let notes = [];

document.addEventListener("DOMContentLoaded", function() {
  check();
  if (localStorage.getItem("nkd")) {
    notes = JSON.parse(localStorage.getItem("nkd"));
  }
  displayNotes();
});

function edit() {
  let a = notes.length
  for (i = 0; i < a; i++) {
    if (document.getElementsByClassName("delnote")[i].style.display == "none") {
      document.getElementsByClassName("delnote")[i].style.display = "block";
    }
    else {
      document.getElementsByClassName("delnote")[i].style.display = "none";
    }
  }
  document.getElementById("topt").style.display = "none";
  document.getElementById("cover").style.display = "none";
}

function check() {
  document.getElementById("topt").style.display = "none";
  document.getElementById("drop").style.display = "none";
  document.getElementById("inp").style.display = "none";
  document.getElementById("cover").style.display = "none";
  document.getElementById("toptcov").style.display = "none";
  document.getElementById("f1").style.display = "none";
  document.getElementById("f2").style.display = "none";
    document.getElementById("hed").style.display= "block";
      document.getElementById("title").value = "";
  document.getElementById("content").value = "";
    document.getElementById("ctitle").value = "";
  document.getElementById("ccontent").value = "";
  if(document.getElementById("arrow").style.rotate = "180deg"){
    document.getElementById("arrow").style.rotate = "0deg";}
}

function drop() {
  if (document.getElementById("drop").style.display == "none") {
    document.getElementById("drop").style.display = "block";
    document.getElementById("arrow").style.rotate = "180deg";
    document.getElementById("cover").style.display = "block";
    document.getElementById("hed").style.display= "none";
  }
  else {
    document.getElementById("drop").style.display = "none";
    document.getElementById("arrow").style.rotate = "0deg";
    document.getElementById("cover").style.display = "none";
    document.getElementById("hed").style.display= "block";
  }
}

function topt() {
  let el = document.getElementById("topt");
  if (el.style.display === "none") {
    el.style.display = "block";
    document.getElementById("toptcov").style.display = "block";
  } else {
    el.style.display = "none";
    document.getElementById("toptcov").style.display = "none";
  }
}

function sear() {
  document.getElementById("inp").style.display = "block";
  document.getElementById("cover").style.display = "block";
  document.getElementById("hed").style.display= "none";
}

function nnew() {
  document.getElementById("f1").style.display = "block";
  document.getElementById("title").focus();
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

function addNote() {
  let title = document.getElementById("title").value.trim();
  let content = document.getElementById("content").value.trim();
  
  if (title === "" && content === "") {
    alert("Note is empty!");
    return;
  }
  
  let now = new Date();
  let timestamp = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  
  let note = {
    id: Date.now(),
    title: title,
    content: content,
    createdAt: timestamp,
  };
  
  notes.unshift(note);
  localStorage.setItem("nkd", JSON.stringify(notes));
  window.setTimeout(refresh, 200);
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("f1").style.display = "none";
}

function displayNotes() {
  const container = document.getElementById("notes-container");
  const msg = document.getElementById("noNotesMsg");
  container.innerHTML = "";
  
  if (notes.length === 0) {
    msg.style.display = "block";
    return;
  } else {
    msg.style.display = "none";
  }
  
  notes.forEach((note, index) => {
    let noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.addEventListener("click", () => change(index));
    noteDiv.innerHTML = `
      <div class="nn">${index + 1}</div>
      <h3 class="hn">${note.title}</h3>
      <pre class="cn">${note.content}</pre>
      <div class="bn">${note.createdAt}</div>
    `;
    
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delnote";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteNote(note.id);
    });
    
    noteDiv.appendChild(delBtn);
    container.appendChild(noteDiv);
  });
  document.getElementById("count").innerText=notes.length+" notes";
}

function refresh() {
  location.reload();
}

function deleteNote(id) {
  notes = notes.filter(n => n.id !== id);
  localStorage.setItem("nkd", JSON.stringify(notes));
  refresh();
}

function bod() {
  [...document.getElementsByClassName("delnote")].forEach(el => el.style.display = "none");
}

function change(index) {
  if (document.getElementsByClassName("delnote")[0].style.display == "none") {
    var no = document.getElementsByClassName("nn")[index].innerHTML;
    document.getElementById("f2").style.display = "block";
    var a = document.getElementsByClassName("hn")[index].innerText;
    document.getElementById("ctitle").value = a;
    var b = document.getElementsByClassName("cn")[index].innerText;
    document.getElementById("ccontent").value = b;
    let noteId = notes[index].id;
    del(noteId);
  }
}
function del(id) {
  notes = notes.filter(n => n.id !== id);
  localStorage.setItem("nkd", JSON.stringify(notes));
}

function upNote() {
  let title = document.getElementById("ctitle").value.trim();
  let content = document.getElementById("ccontent").value.trim();
  
  if (title === "" && content === "") {
    alert("Note is empty!");
    return;
  }
  
  let now = new Date();
  let timestamp = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  
  let note = {
    id: Date.now(),
    title: title,
    content: content,
    createdAt: timestamp,
  };
  
  notes.unshift(note);
  localStorage.setItem("nkd", JSON.stringify(notes));
  displayNotes();
  refresh();
}
function ccheck(){
  if(confirm("Are you Sure!! Because this action will Delete the Note")){
  refresh();
  }
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