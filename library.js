const addButton = document.querySelector('.add-button')
const closeButton = document.querySelector('.modal-close')
const modal = document.querySelector('.modal')
const form = document.querySelector('.modal-container')
const addBook = document.querySelector('.add-book')
const titleInput = document.querySelector('.title-input')
const authorInput = document.querySelector('.author-input')
const pagesInput = document.querySelector('.pages-input')
const body = document.querySelector('.body')
let title = titleInput.value
let author = authorInput.value
let pages = pagesInput.value
let myLibrary = []


addButton.addEventListener('click', () => {
    openModal(modal)
})

closeButton.addEventListener('click', () => {
    closeModal(modal)
})

function openModal(modal) { 
    modal.classList.add('active')
}

function closeModal(modal) {
    modal.classList.remove('active')
}

form.addEventListener('submit', function() {
    event.preventDefault()
    addBookToLibrary()
})

function addBookToLibrary() {
    title = titleInput.value
    author = authorInput.value
    pages = pagesInput.value
   
   new Book(title, author, pages)
    // console.log(myLibrary)
    renderLibrary(myLibrary)
    modal.classList.remove('active')
    form.reset()
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
    // this.id = id
    myLibrary.push(this)
}


function renderLibrary(myLibrary) {
    body.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
            let book = myLibrary[i]
            const div = document.createElement('div')
            div.classList.add('card')
            div.innerHTML = `
                <div class="card-container">
                    <h1 class="card-item card-title">${book.title}</h1>
                    <h1 class="card-item card-author">by ${book.author}</h1>
                    <h1 class="card-item card-pages">${book.pages} pages</h1>
                </div>`
            const readButton = document.createElement('button') 
            readButton.innerHTML = 'Not read'
            readButton.classList.add('modal-button')
            readButton.onclick = 
            
            () => {
                if (readButton.innerHTML === 'Not read') {
                    readButton.innerHTML = 'Read'
                } else if (readButton.innerHTML === 'Read') {
                    readButton.innerHTML = "Not read"
                }
               
            }
            div.appendChild(readButton)
            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = 'Delete'
            deleteButton.classList.add('modal-button')
            div.appendChild(deleteButton)
        body.appendChild(div)
        }

    }

    function removeBook(index) {
        myLibrary.splice(index,)
    }
    

    // function toggleButton() {
    //     if (readButton.innerHTML === 'Not read') {
    //         readButton.innerHTML = 'Read'
    //     } else if (readButton.innerHTML === 'Read') {
    //         readButton.innerHTML = "Not read"
    //     }
        
    // }
    


