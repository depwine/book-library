let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    //turn checkbox into string
    if(read){
        read = "Read";
    } else {
        read = "Not Read";
    }

    //output info for debug
    this.info = title + " by "+author+", "+pages+" pages, "+read;
}

Book.prototype.toggleRead = function(){

    if (this.read == "Read"){
        this.read = "Not Read";
        console.log(this.read);
        displayLibrary()
    } else if(this.read = "Not Read"){
        this.read = "Read";
        displayLibrary()
    }
}



//throw in some placeholders
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "Not read");
const theWiseMansFear = new Book("The Wise Man's Fear", "Patrick Rothfuss", "994", "Read")
const theNameOfTheWind = new Book("The Name of the Wind", "Patrick Rothfuss", "662", "Read")

//add placeholders to array
myLibrary = [theHobbit, theWiseMansFear, theNameOfTheWind];



//display library
function displayLibrary(){

    //create base table
var html = "<table id='table' border ='1|1'>";
html+= "<th>Title</th>";
html+= "<th>Author</th>";
html+= "<th>Pages</th>";
html+= "<th>Read</th>";
html+= "<th>Toggle Read</th>";
html+= "<th>Remove</th>";


for (var i = 0; i < myLibrary.length; i++){
    html+= "<tr class = 'int'>";
    html+= "<td>" + myLibrary[i].title + "</td>";
    html+= "<td>" + myLibrary[i].author + "</td>";
    html+= "<td>" + myLibrary[i].pages + "</td>";
    html+= "<td>" + myLibrary[i].read + "</td>";
    html+= "<td><button onclick= myLibrary["+i+"].toggleRead()> On/Off </button></td>";
    html+= "<td><button data-button="+i+" onclick=remove("+i+")> Remove </button></td>";

    html+= "</tr>";
}


document.getElementById("table").innerHTML = html;
}



//display first library
displayLibrary();


function addBookToLibrary(){

    //get value from the input fields

    var title = document.getElementById("bTitle").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var read = document.querySelector("#read").checked;

    if (read){
        read = "Read";
    } else {
        read = "Not Read";
    }

    //construct new obj
    let book = new Book(title, author, pages, read);

    //append
    myLibrary.push(book);

    //test log:
    console.log(book.info);
    //display new library

    displayLibrary();


}

    function remove(int){

        myLibrary.splice(int,1);
        console.log(myLibrary.length);
        displayLibrary();

    }

    function toggleRead(){

    }


