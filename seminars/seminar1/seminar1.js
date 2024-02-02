let reviewSymbol = Symbol("review");
let ratingSymbol = Symbol("rating");
let tagsSymbol = Symbol("tags");

function addMetadate(book, metadataType, data) {
  book[metadataType] = data;
}

function getMetadate(book, meatdataType) {
  return book[meatdataType];
}

let book = {
  title: "1984",
  author: "George Orwell",
};

addMetadate(book, reviewSymbol, "Отличная книга о дистопии!");
addMetadate(book, ratingSymbol, 5);
addMetadate(book, tagsSymbol, "dystopia");

console.log(getMetadate(book, reviewSymbol));
console.log(getMetadate(book, ratingSymbol));
console.log(getMetadate(book, tagsSymbol));

//-----------------------------------

const books = [
  { title: "1984", author: "Gearge Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

const library = {
  books: [...books],
  [Symbol.iterator]: function () {
    let countBooks = 0;
    return {
      next: () => {
        if (countBooks >= this.books.length) {
          return { done: true };
        } else {
          return { value: this.books[countBooks++], done: false };
        }
      },
    };
  },
};

for (const book of library) {
  console.log(book.author, book.title);
}

//--------------------------------------------

const arrayDivEl = Array.from(document.querySelectorAll("div"));
const resArr = arrayDivEl.filter((div) => div.hasAttribute("data-active"));
console.log(resArr);

//--------------------------------------------

let lessons = new Map();
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванов");

const stanli = {
  name: "Gorge",
};

const gorgeLessons = new Set();
gorgeLessons.add("Математика");
gorgeLessons.add("История");

let Students = new Map();
Students.set(stanli, gorgeLessons);

console.log(`Преподователь по математике: ${lessons.get("Математика")}`);
console.log(`Уроки Gorge: ${[...Students.get(stanli)]}`);
