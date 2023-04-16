const addButton = document.querySelector('.add-button')
const closeButton = document.querySelector('.modal-close')
const modal = document.querySelector('.modal')
const form = document.querySelector('.modal-container')
const addBook = document.querySelector('.add-book')
const titleInput = document.querySelector('.title-input')
const authorInput = document.querySelector('.author-input')
const pagesInput = document.querySelector('.pages-input')
const checkbox = document.querySelector('.checkbox')
const body = document.querySelector('.body')
const readStatus = document.querySelector('.read-status')
let title = titleInput.value
let author = authorInput.value
let pages = pagesInput.value
let read = checkbox.checked
let myLibrary = []
let book


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
    read = checkbox.checked
   
   new Book(title, author, pages, read)
    console.log(myLibrary)
    renderLibrary(myLibrary)
    modal.classList.remove('active')
    form.reset()
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
    myLibrary.push(this)
}

 
function renderLibrary(myLibrary) {
    body.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
            book = myLibrary[i]
            const div = document.createElement('div')
            div.classList.add('card')
            div.innerHTML = `
                <div class="card-container">
                    <h1 class="card-item card-title">"${book.title}"</h1>
                    <h1 class="card-item card-author">by ${book.author}</h1>
                    <h1 class="card-item card-pages">${book.pages} pages</h1>
                    <p class="read-status">${book.read ? "read" : "Unread"}</p>
                    <button class="modal-button" onclick="removeBook(${i})">Remove</button>
                    <button class="modal-button" onclick="toggleRead(${i})">Toggle</button>
                </div>
                `
            // const readButton = document.createElement('button') 
            // if (book.read) {
            //     readButton.innerHTML = 'Read'
            // } else {
            //     readButton.innerHTML = 'Unread'
            // }
            
          
            // readButton.classList.add('modal-button')
            // readButton.onclick = 
            
            // () => {
            //     if (!book.read) {
            //         readButton.innerHTML = 'Read'
            //         readStatus.innerHTML = 'Read'
            //         toggleRead(myLibrary[i])
            //     } else if (book.read) {
            //         readButton.innerHTML = 'Unread'
            //         toggleRead(myLibrary[i])
            //     }
              
            // }
            // div.appendChild(readButton)
            // const deleteButton = document.createElement('button')
            // deleteButton.innerHTML = 'Delete'
            // deleteButton.classList.add('modal-button')
            // deleteButton.onclick = () => {
            //     removeBook(i)
            // }
            // div.appendChild(deleteButton)
        body.appendChild(div)
        }

    }

    Book.prototype.toggleRead = function () {
        this.read = !this.read;
    }

    function toggleRead(i) {
        myLibrary[i].toggleRead()
        renderLibrary(myLibrary)
    }

    function removeBook(i) {
        myLibrary.splice(i, 1)
        console.log(myLibrary)
        renderLibrary(myLibrary)
    }
    


    


  