# goit-js-hw-09

### Завдання 1 - Галерея зображень
Виконуй це завдання у файлах 1-gallery.html і 1-gallery.js.

У попередньому домашньому завданні ти самостійно створив/-ла галерею зображень, використовуючи делегування подій, і додав/-ла через CDN бібліотеку модальне вікно для відображення повнорозмірної версії зображення.

Створення галерей — це повсякденна задача розробника, але писати їх вручну кожного разу занадто трудомістко. Для цього існують бібліотеки, які реалізують усю логіку роботи галереї.

Зроби таку саму галерею, але використовуючи бібліотеку SimpleLightbox, яка повністю візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

### Завдання 2 - Форма зворотного зв'язку
Виконуй це завдання у файлах 2-form.html і 2-form.js.

Додай у HTML розмітку форми. У JS напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

Виконуй це завдання у файлах 2-form.html і 2-form.js. Розбий його на декілька підзавдань:

Використовуючи делегуваня, відстежуй на формі подію input і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
