let notes = JSON.parse(localStorage.getItem("Notes")) || [];

const titleValue = document.getElementById("title");
const notesValue = document.getElementById("description");
const addNotes = document.getElementById("addBtn");
const divNote = document.getElementById("notesContainer");

// Save Notes
function saveNote() {
    localStorage.setItem("Notes", JSON.stringify(notes));
}

// Add Note
addNotes.addEventListener("click", function () {

    if (
        titleValue.value.trim() === "" ||
        notesValue.value.trim() === ""
    ) {
        alert("Enter Valid Title and Notes");
        return;
    }

    const newNote = {

        id: crypto.randomUUID(),
        title: titleValue.value.trim(),
        notes: notesValue.value.trim()

    };

    notes.push(newNote);

    saveNote();

    // Clear Inputs
    titleValue.value = "";
    notesValue.value = "";

    renderNotes();

});

// Render Notes
function renderNotes() {

    divNote.innerHTML = "";

    // Empty State
    if (notes.length === 0) {

        divNote.innerHTML = `
            <h2 style="text-align:center;color:gray;">
                No Notes Available
            </h2>
        `;

        return;
    }

    for (let i = 0; i < notes.length; i++) {

        const note = notes[i];

        const divChild = document.createElement("div");
        const titleHeading = document.createElement("h1");
        const notesDescription = document.createElement("p");
        const deleteBtn = document.createElement("button");

        divChild.classList.add("note");
        deleteBtn.classList.add("delete");

        titleHeading.textContent = note.title;
        notesDescription.textContent = note.notes;
        deleteBtn.textContent = "Delete";

        divChild.appendChild(titleHeading);
        divChild.appendChild(notesDescription);
        divChild.appendChild(deleteBtn);

        divNote.prepend(divChild);

        // Delete Note
        deleteBtn.addEventListener("click", function () {

            notes = notes.filter(item => item.id !== note.id);

            saveNote();

            renderNotes();

        });

    }

}

// Initial Render
renderNotes();