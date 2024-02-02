// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

let musicCollection = {
  albums: [
    {
      title: "French",
      artist: "Yoda",
      year: "2021",
    },
    {
      title: "Solt",
      artist: "Rina",
      year: "2022",
    },
    {
      title: "Hunt",
      artist: "Gord",
      year: "2023",
    },
  ],

  [Symbol.iterator]: function () {
    let countAlbums = 0;
    return {
      next: () => {
        if (countAlbums >= this.albums.length) {
          return { done: true };
        } else {
          return { value: this.albums[countAlbums++], done: false };
        }
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(
    `Название альбома: ${album.title}, Исполнитель ${album.artist} (${album.year})`
  );
}

//-------------------------------------------------------

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

let specificsCook = new Map();
specificsCook
  .set("Пицца", "Виктор")
  .set("Суши", "Ольга")
  .set("Десерты", "Дмитрий");

console.log(`${specificsCook.get("Пицца")} - специализация: Пицца`);
console.log(`${specificsCook.get("Суши")} - специализация: Суши`);
console.log(`${specificsCook.get("Десерты")} - специализация: Десерты`);

let cooks = new Map();
cooks
  .set("Маргарита", specificsCook.get("Пицца"))
  .set("Пепперони", specificsCook.get("Пицца"))
  .set("Филадельфия", specificsCook.get("Суши"))
  .set("Калифорния", specificsCook.get("Суши"))
  .set("Тирамису", specificsCook.get("Десерты"))
  .set("Чизкейк", specificsCook.get("Десерты"));

console.log(`Пицца "Маргарита" - повар: ${cooks.get("Маргарита")}.`);
console.log(`Пицца "Пепперони" - повар: ${cooks.get("Пепперони")}.`);
console.log(`Суши "Филадельфия" - повар: ${cooks.get("Филадельфия")}.`);
console.log(`Суши "Калифорния" - повар: ${cooks.get("Калифорния")}.`);
console.log(`Десерт "Тирамису" - повар: ${cooks.get("Тирамису")}.`);
console.log(`Десерт "Чизкейк" - повар: ${cooks.get("Чизкейк")}.`);

let orders = new Map();

let client1 = { name: "Алексей" };
let clientOrder1 = new Set();
clientOrder1.add("Пицца 'Пепперони'").add("Тирамису");

let client2 = { name: "Мария" };
let clientOrder2 = new Set();
clientOrder2.add("Суши 'Калифорния'").add("Пицца 'Маргарита'");

let client3 = { name: "Ирина" };
let clientOrder3 = new Set();
clientOrder3.add("Чизкейк");

orders
  .set(client1, clientOrder1)
  .set(client2, clientOrder2)
  .set(client3, clientOrder3);

console.log(`Клиент ${client1.name} заказал(а): ${[...orders.get(client1)]}`);
console.log(`Клиент ${client2.name} заказал(а): ${[...orders.get(client2)]}`);
console.log(`Клиент ${client3.name} заказал(а): ${[...orders.get(client3)]}`);
