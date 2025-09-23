let notes = [];

window.onload = function() {
  // Check if data exists
  if (localStorage.getItem("allNotes")) {
    notes = JSON.parse(localStorage.getItem("allNotes"));
    displayNotes();
  }
};

function addNote() {
  let title = document.getElementById("title").value.trim();
  let content = document.getElementById("content").value.trim();

  if (title === "" && content === "") {
    alert("Note is empty!");
    return;
  }

  let note = {
    id: Date.now(),
    title: title,
    content: content
  };

  notes.push(note);
  localStorage.setItem("allNotes", JSON.stringify(notes));
  displayNotes();

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  localStorage.setItem("allNotes", JSON.stringify(notes));
  displayNotes();
}

function displayNotes() {
  let container = document.getElementById("notes-container");
  container.innerHTML = "";

  if (notes.length === 0) {
    container.innerHTML = "<p>No notes yet...</p>";
    return;
  }

  notes.forEach(note => {
    let noteBox = document.createElement("div");
    noteBox.className = "note";
    
    noteBox.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button onclick="deleteNote(${note.id})">Delete</button>
    `;

    container.appendChild(noteBox);
  });
}