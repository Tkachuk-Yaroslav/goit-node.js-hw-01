# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="read" - photo_1 in this project
[https://monosnap.com/file/EwzbleCOlQpKcEaT3RWfIseCxgO1jJ]

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="getById" --id 05olLMgyVQdWRwgKfg5J6 - photo_2 in this project
[https://monosnap.com/file/yihWLAW1VsULuqh347n81Ry4gGgFmI]

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

[https://monosnap.com/file/066lvnhN3WjlZaVJiR5oKTYH4reUU1]
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22 - photo_3 in this project

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

[https://monosnap.com/file/6mqScgD8cXNSvdnmK7Rftx4L4grJr4]
node index.js --action="removeById" --id qdggE76Jtbfd9eWJHrssH - photo_4 in this project
