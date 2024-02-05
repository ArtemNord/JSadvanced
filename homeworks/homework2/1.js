// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
class Library {
  #books = [];

  // Получаем текущего списка книг
  get allBooks() {
    return this.#books.join(", ");
  }

  // Добавить книги в библиотеку
  addBook(title) {
    try {
      if (this.#books.includes(title)) {
        throw new Error("Ошибка:книга уже в списке");
      }
      this.#books.push(title);
      return this.#books.join(", ");
    } catch (error) {
      return error.message;
    }
  }

  // Метод удаления книги из библиотеки
  removeBook(title) {
    try {
      if (!this.#books.includes(title)) {
        throw new Error("Ошибка: книги нет в списке");
      }
      const titleId = this.#books.indexOf(title);
      this.#books.splice(titleId, 1);
      return this.#books.join(", ");
    } catch (error) {
      return error.message;
    }
  }

  // Проверка наличия книги в библиотеке
  hasBook(title) {
    return this.#books.includes(title);
  }

  constructor(initialBookList) {
    const uniqueList = [...new Set(initialBookList)];
    if (uniqueList.length !== initialBookList.length) {
      throw new Error("Список содержит дубликаты");
    }
    this.#books = initialBookList;
  }
}

const bookList = ["Biology", "Chemistry", "English", "History"];

let library = new Library(bookList);
console.log(library.allBooks);

console.log(library.addBook("Geography"));

console.log(library.addBook("Biology"));

// Удалить книгу из саиска
console.log(library.removeBook("Biology")); //
console.log(library.removeBook("Fairytales"));

//Проверка наличия книги в библиотеке
console.log(library.hasBook("Chemistry"));
console.log(library.hasBook("Biology"));
