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
  if (document.getElementById("topt").style.display == "none") {
    document.getElementById("topt").style.display = "block";
  }
  else {
    document.getElementById("topt").style.display = "none";
  }
}

function sear() {
  document.getElementById("inp").style.display = "block";
  document.getElementById("cover").style.display = "block";
}

function nnew() {
  document.getElementById("f1").style.display = "block";
}

function ent() {
  for (let i = 1; i <= 10; i++) {
    const note = document.createElement("div");
    note.className = "notes";
    note.id = "n" + i;
    document.getElementById("bodyy").appendChild(note);
  }

  for (let i = 1; i <= 10; i++) {
    let note = document.getElementById("n" + i);
    if (note.innerHTML === "") {
      let today = new Date();
      let date = today.getDate();
      let day = today.getMonth();
      let year = today.getFullYear();
      var mon = day + 1;
      var d = date + "/" + mon + "/" + year;
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      var t = h + ":" + m + ":" + s;
      var end = f1.t1.value + "<br><br><font color='grey' style='position: absolute; right:1vh;bottom:0;'><br>" + d + " " + t + "</font>";
      note.innerHTML = end;
      break;
    }
    if (document.getElementById("n9").innerHTML != "") {
      document.getElementById("new").style.display = "none"
    }
  }
  document.getElementById("f1").style.display = "none";
  f1.t1.value = "";
  let a = document.getElementsByClassName("notes");
  for (let i = 0; i < a.length; i++) {
    if (a[i].innerHTML != "") {
      a[i].style.backgroundColor = "#1E1E1E";
    }
  }
}







notes.forEach((note, index) => {
  let noteDiv = document.createElement("div");
  noteDiv.className = "note";
  noteDiv.style.backgroundColor = "#1E1E1E";
  noteDiv.style.color = "white";
  noteDiv.style.padding = "15px";
  noteDiv.style.margin = "10px";
  noteDiv.style.borderRadius = "8px";
  noteDiv.style.position = "relative";

  noteDiv.innerHTML = `
    <h3>Note #${index + 1}: ${note.title}</h3>
    <p>${note.content}</p>
    <div style="color:grey; font-size: 12px; text-align:right; margin-top:10px;">${note.createdAt}</div>
    <button onclick="deleteNote(${note.id})" style="position:absolute;top:5px;right:5px;background:#d63031;color:white;border:none;padding:4px 8px;border-radius:4px;">Delete</button>
  `;

  // ✅ Add this line to show alert on note click
  noteDiv.addEventListener('click', function() {
    alert(`You clicked Note #${index + 1}`);
  });

  container.appendChild(noteDiv);
});