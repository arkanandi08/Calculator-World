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
