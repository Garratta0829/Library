const addButton = document.querySelector('.add-button')
const closeButton = document.querySelector('.modal-close')
// const modal = document.querySelector('.modal')
const modal = document.querySelector('.modal')


let myLibrary = []

addButton.addEventListener('click', () => {
   
    // modal.classList.add('active')
    openModal(modal)
})

// function addDisplay() {
//     modal.show();
// }

closeButton.addEventListener('click', () => {
    closeModal(modal)
})

function openModal(modal) { 
    // if (modal == null) return
    modal.classList.add('active')
}

function closeModal(modal) {
    modal.classList.remove('active')
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
}

