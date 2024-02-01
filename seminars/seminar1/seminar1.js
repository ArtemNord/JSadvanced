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
    let book = 0;
    return { next: () => {
        if ()
    } };
  },
};
