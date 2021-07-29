let newNote = document.getElementById("new-note");
const notes = document.getElementsByClassName("notes");
let noteNb = 0;
let note1 = null;
let note2 = null;
let note3 = null;
let date = new Date(2050, 1, 1);

newNote.addEventListener("click", () => {
  creatNote();
})

setInterval(() => {
  try {
    if (!(document.getElementById("textarea0").value == null)) {
      document.getElementById("charsNb0").innerHTML = document.getElementById("textarea0").value.length+"/200";
      document.getElementById("charsNb1").innerHTML = document.getElementById("textarea1").value.length+"/200";
      document.getElementById("charsNb2").innerHTML = document.getElementById("textarea2").value.length+"/200";
    }
    if (!(document.getElementById("textarea0").value == null || document.getElementById("textarea1").value == null || 
    document.getElementById("textarea2").value == null)) {
      note1 = document.cookie = "note1="+document.getElementById("textarea0").value+"; "+date+"; SameSite=Strict";
      note2 = document.cookie = "note2="+document.getElementById("textarea1").value+"; "+date+"; SameSite=Strict";
      note3 = document.cookie = "note3="+document.getElementById("textarea2").value+"; "+date+"; SameSite=Strict";
    }
  } catch (err) {}
}, 100);

function creatNote() {
  if (!(noteNb == 3)) {
    let note = document.createElement("div");
    note.classList.add("note");
    note.id = "note"+noteNb;
    document.getElementsByClassName("notes")[0].appendChild(note);
  
    let btns = document.createElement("div");
    btns.classList.add("btns");
    btns.id = "btns"+noteNb;
    document.getElementById("note"+noteNb).appendChild(btns);
  
    let btnClose = document.createElement("button");
    btnClose.classList.add("btn");
    btnClose.id = "btn-close"+noteNb;
    btnClose.innerHTML = "&times";
    document.getElementById("btns"+noteNb).appendChild(btnClose);
    document.getElementById("btn-close"+noteNb).addEventListener("click", () => {
      notes[0].removeChild(note);
      noteNb--;
    })

    let charsNb = document.createElement("div");
    charsNb.classList.add("chars-nb");
    charsNb.id = "charsNb"+noteNb;
    charsNb.innerHTML = "0/200";
    document.getElementById("btns"+noteNb).appendChild(charsNb);
  
    let textarea = document.createElement("textarea");
    textarea.classList.add("textarea");
    textarea.id = "textarea"+noteNb;
    textarea.maxLength = 200;
    textarea.placeholder = "Write the note here.";
    document.getElementById("note"+noteNb).appendChild(textarea);
    
    noteNb++;
  } else {
    let popupC = document.getElementById("popup-container");
    popupC.style.display = "flex";
    popupC.classList.remove("exit");
    setTimeout(() => {
      popupC.style.display = "none";
      popupC.classList.add("exit");
    }, 3000);
  }
}