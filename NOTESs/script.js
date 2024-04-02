const addButton = document.getElementById("add")
const notes =JSON.parse(localStorage.getItem("notes"))

const updateLocalStorge =()=>{
    const notesText = document.querySelectorAll("textarea")
    const notes =[]
    notesText.setItem("notes", JSON.stringify(notes))


}

const addNotes