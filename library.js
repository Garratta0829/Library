const addButton = document.querySelector('.add-button')
const closeButton = document.querySelector('.modal-close')
const modal = document.querySelector('.modal')
const form = document.querySelector('.modal-container')
const addBook = document.querySelector('.add-book')
const titleInput = document.querySelector('.title-input')
const authorInput = document.querySelector('.author-input')
const pagesInput = document.querySelector('.pages-input')
let title = titleInput.value
let author = authorInput.value
let pages = pagesInput.value

const body = document.querySelector('.body')



let myLibrary = []

addButton.addEventListener('click', () => {
    openModal(modal)
})

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

// addBook.addEventListener('click', newBook )

// function newBook(title, author, pages) {
//     console.log(Book(title, author, pages))
    
//    console.log(new Book)
// }



addBook.addEventListener('click', () => {
    title = titleInput.value
    author = authorInput.value
    pages = pagesInput.value
    const book = new Book(title, author, pages)
    myLibrary.push(book)
    console.log(myLibrary)
    renderLibrary(myLibrary)
    modal.classList.remove('active')
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
}

function renderLibrary(myLibrary) {
    
    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div')
        div.innerHTML = `${title} ${author} ${pages}`
        div.style.border = '1px solid black'

    body.appendChild(div)
    }
    
    
}




// const div = document.createElement('div')
// div.innerHTML = 'Im a div'
// div.style.border = '1px solid black'

// body.appendChild(div)

// const div2 = document.createElement('div')
// div2.innerHTML = 'Im a div'
// div2.style.border = '1px solid black'

// body.appendChild(div2)

// const div3 = document.createElement('div')
// div3.innerHTML = 'Im a div'
// div3.style.border = '1px solid black'
// div3.style.height = '400px'

// body.appendChild(div3)