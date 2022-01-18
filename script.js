let form = document.querySelector('.form')
let newBook = document.querySelector('.new')
let main =document.querySelector('.main')
let i = 0
let totalBooks=0
let readBooks=0
let readingBooks=0
let d = 0 


function bookInfo() {}
bookInfo.prototype.info = function () {return `${this.title} by ${this.author}, ${this.pages} pages, in ${this.date}, ${this.read}`};
addBook.prototype = Object.create(bookInfo.prototype)

function addBook(title,author,pages,date,read) {
    this.title = title,
    this.author = author, 
    this.pages = pages,
    this.date = date,
    this.read = read}

let book = []
function idk(title,author,pages,date,read) {
    title ; author ; pages ; date ; read;
    addBook(title,author,pages,date,read)
    let livro = new addBook(title,author,pages,date,read)
    book.push(livro)}

document.querySelector('.exit').onclick = function(){form.style.display='none'}
document.querySelector('.new').onclick = function() {form.style.display= 'flex' ; document.querySelector('.new').style.position = "static" }

document.querySelector('#add').addEventListener('click', () =>{
    let title = document.querySelector('#book').value ;
    let author = document.querySelector('#author').value; 
    let pages = document.querySelector('#pages').value; 
    let date = document.querySelector('#date').value ;
    let read = document.querySelector('#read').checked;
    if (title.length == 0 || author.length ==0 || isNaN(Number(pages)) || date.length ==0 ||  pages.length == 0){
        document.querySelector('#add').type = 'button'
        if (title.length == 0) {document.querySelector('#book').style.border = "solid red 3px"}
            else{document.querySelector('#book').style.border = "0"}
        if (author.length == 0) {document.querySelector('#author').style.border = "solid red 3px"}
            else{document.querySelector('#author').style.border = "0"}
        if (isNaN(Number(pages)) || pages.length == 0 ) {document.querySelector('#pages').style.border = "solid red 3px"}
            else{document.querySelector('#pages').style.border = "0"}
        if (date.length == 0) {document.querySelector('#date').style.border = "solid red 3px"}
            else{document.querySelector('#date').style.border = "0"}}
    else {idk(title,author,pages,date,read) ;createBook() ; form.style.display = 'none';totalBooks++; 
    document.querySelector('.totalNumber').textContent= totalBooks ;
        if (book[i].read == true) {readBooks++}
        else if (book[i].read == false) {readingBooks++}
    document.querySelector('.totalRead').textContent = readBooks;
    document.querySelector('.totalReading').textContent = readingBooks;  i++; document.querySelector('#add').type = 'reset';
    document.querySelector('#book').style.border = "0" ;  document.querySelector('#author').style.border = "0";
    document.querySelector('#pages').style.border = "0"; document.querySelector('#date').style.border = "0";}
})



function createBook() {
let z = i
let books = document.createElement('div')
books.classList.add('books')
main.append(books)
let bookName = document.createElement('p')
bookName.classList.add('bookName')
bookName.textContent = this.title
books.append(bookName)
let bookAuthor = document.createElement('p')
bookAuthor.classList.add('bookAuthor')
bookAuthor.textContent = 'Author: ' + this.author
books.append(bookAuthor)
let bookPages = document.createElement('p')
bookPages.classList.add('bookPages')
bookPages.textContent = 'Pages: ' + this.pages
books.append(bookPages)
let bookDate = document.createElement('p')
bookDate.classList.add('bookDate')
bookDate.textContent = 'Publication: ' + this.date
books.append(bookDate)
let bookStatus = document.createElement('div')
bookStatus.classList.add('bookStatus')
books.append(bookStatus)
let label = document.createElement('label')
label.htmlFor = "status"
label.textContent = 'Read '
bookStatus.append(label)
let status = document.createElement('input')
status.type = 'checkbox'
status.setAttribute('id','status')
let del = document.createElement('button')
del.classList.add('del')
del.textContent = 'Delete'
books.append(del)
if (book[i].read == true) {status.checked = true ; books.style.backgroundColor = "rgb(47, 153, 52)"}
bookStatus.append(status)
status.addEventListener('click',()=> {
    if (status.checked == true) {book[z].read = true ; readBooks++ ; readingBooks-- ;
         document.querySelector('.totalRead').textContent = readBooks;  books.style.backgroundColor = "rgb(47, 153, 52)" ;
         document.querySelector('.totalReading').textContent = readingBooks}
    else if (status.checked == false) {book[z].read = false; readingBooks++ ; readBooks--;
        document.querySelector('.totalRead').textContent = readBooks; books.style.backgroundColor = "rgb(129, 129, 133)" 
        document.querySelector('.totalReading').textContent = readingBooks;}})
del.addEventListener('click', ()=> {
    if (this.read == true) {readBooks-- ; totalBooks--} 
    else {readingBooks-- ; totalBooks--} ; 
    for( let x = 0; x < book.length; x++){ 
    
        if ( book[x].title === this.title) { book.splice(x, 1); }
    
    }
    document.querySelector('.totalRead').textContent = readBooks;
    document.querySelector('.totalReading').textContent = readingBooks;
    document.querySelector('.totalNumber').textContent= totalBooks; books.remove();i--
})}