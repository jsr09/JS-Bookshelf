import { bookData } from "./book-data.js";


// const bookshelfContainer = document.body.querySelector('#bookShelfContainer').innerHTML = 'linked';

class Book {
    constructor(bk){
        this.book = bk;
        // this.author = author;
        // this.language = language;
        // this.subject = subject;
        // this.title = title;
        this.bookEle = document.createElement('div');
        this.titleEle = document.createElement('p');
        this.authorEle = document.createElement('p');
        // console.log(this.titleEle);//working
        // console.log(this.authorEle);//working
        console.log(this.book);
    }   
    initEle(){
        // this.shelf.forEach((element, i) => {
        this.bookEle.classList.add('book')
        // console.log(this.bookEle);
        this.titleEle.classList.add('titleAuthor')
        // console.log(this.titleEle);
        this.authorEle.classList.add('titleAuthor')
        // console.log(this.authorEle);
        this.authorEle.innerHTML = `Author : ${this.book.author}.`;
        // console.log(this.authorEle);
        this.titleEle.innerHTML = `Title : ${this.book.title}.`;
        // console.log(this.titleEle);
        this.bookEle.append(this.titleEle);
        // console.log(this.bookEle);
        this.bookEle.append(this.authorEle);
        // console.log(this.bookEle);
        document.body.querySelector('#bookShelfContainer').append(this.bookEle);
        // this.newEle.append(bookEle);
        // });
    }
    
}
const books = new Book();

class Bookshelf {
    constructor(){
        this.books = bookData
        this.shelf = [];
        // this.updatedShelf = [];
        // console.log(this.shelf,'first');

    }
    render(){
        // document.body.querySelector('#bookShelfContainer').innerHTML="";
        this.shelf = this.books.map((element,) => {
        const newBook = new Book(element).initEle();
        });  
    }
    userInputRender(){
        this.shelf = this.books.forEach(element => {
        const userBooks = new Book(element).initEle();
        });
    }
    
    userBook(){
        let userTitle = document.querySelector('.title').value;
        let userAuthor = document.querySelector('.author').value;
        let userLanguage = document.querySelector('.language').value;
        let userSubject = document.querySelector('.subject').value;

        console.log(userAuthor); // testing the value pull from the text box
        let userBook = [userAuthor, userLanguage, userSubject, userTitle];
        console.log(userBook, 'Befoer userBook add');  //user input values are showing in DevTools 
        this.shelf.unshift(userBook); //pushes user input to this.shelf
           console.log(bookShelf.shelf, 'After userBook add');

    
        // console.log(bookShelf.shelf,'AFTER');
            // document.body.querySelector('#bookShelfContainer').innerHTML = "";//clears current book list on webpage
        // console.log(bookShelf.shelf,'third');
        // bookShelf.userInputRender();//re-populates booklist with updated info (doesn't work)
        // console.log(bookShelf.shelf,'forth');
    };



}

const bookShelf = new Bookshelf();
bookShelf.render();
console.log(bookShelf.shelf, 'second');

const button = document.body.querySelector('.button');

button.addEventListener('click', function () {
    console.log('i clicked');
    bookShelf.userBook();
    console.log(bookShelf.shelf, 'event listener');
    bookShelf.userInputRender();
    // document.body.querySelector('#bookShelfContainer').innerHTML = "";//clears current book list on webpage

    // bookShelf.render();
});
    
console.log(bookShelf.shelf,'third');
    


    // bookShelf.render();

// console.log(bookShelf.shelf,'fifth');
// bookData.forEach((element) => {
//     const newBook = new Book(element.author, element.language, element.subject, element.title);
//     bookShelf.addBooks(newBook);

//     });


// const book = new Book;
