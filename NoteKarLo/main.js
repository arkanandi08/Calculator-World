let notes = [];

document.addEventListener("DOMContentLoaded", function() {
  check();
  if (localStorage.getItem("nkd")) {
    notes = JSON.parse(localStorage.getItem("nkd"));
  }
  displayNotes();
});

function check() {
  document.getElementById("topt").style.display = "none";
  document.getElementById("drop").style.display = "none";
  document.getElementById("inp").style.display = "none";
  document.getElementById("cover").style.display = "none";
  document.getElementById("f1").style.display = "none";
}

function drop() {
  if (document.getElementById("drop").style.display == "none") {
    document.getElementById("drop").style.display = "block";
    document.getElementById("arrow").style.rotate = "180deg";
    document.getElementById("cover").style.display = "block";
  }
  else {
    document.getElementById("drop").style.display = "none";
    document.getElementById("arrow").style.rotate = "0deg";
    document.getElementById("cover").style.display = "none";
  }
}


function topt() {
  let el = document.getElementById("topt");
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}


function sear() {
  document.getElementById("inp").style.display = "block";
  document.getElementById("cover").style.display = "block";
}

function nnew() {
  document.getElementById("f1").style.display = "block";
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
  displayNotes();

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
    noteDiv.onclick = function() {
      change();
    };
    /*noteDiv.style.backgroundColor = "#1E1E1E";
    noteDiv.style.color = "white";
    noteDiv.style.padding = "15px";
    noteDiv.style.borderRadius = "8px";
    noteDiv.style.position = "relative";
    noteDiv.style.top = "20vh";*/

    noteDiv.innerHTML = `
      <h3 class="hn"><div id="nn">${index + 1}</div> ${note.title}</h3>
      <pre id="cn">${note.content}</pre>
      <div id="bn">${note.createdAt}</div>
      <button onclick="deleteNote(${note.id})" class="delnote">Delete</button>
    `;

    container.appendChild(noteDiv);
  });
}

function deleteNote(id) {
  notes = notes.filter(n => n.id !== id);
  localStorage.setItem("nkd", JSON.stringify(notes));
  displayNotes();
}

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
}

function bod() {
[...document.getElementsByClassName("delnote")].forEach(el => el.style.display = "none");
}

function change() {
  if (document.getElementsByClassName("delnote")[1].style.display == "none") {
    var no = document.getElementById("nn").innerHTML;
        alert(no);
    document.getElementById("f1").style.display = "block";
    var a = document.getElementsByClassName("hn")[no].innerText;
    document.getElementById("title").value = a;
    var b = document.getElementById("cn").innerText;
    document.getElementById("content").value = b;
  }
}