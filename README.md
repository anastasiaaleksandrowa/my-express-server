Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

— На каждой странице реализован счетчик просмотров
— Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
— Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
— Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.



Подсказка:
Вы можете сохранять файл в формате JOSN,
где в объекте ключом будет являться URL страницы, а значением количество просмотров страницы

Формат сдачи работы:
— Ссылка на гитхаб/гитлаб
— Файл с кодом.

Проверка работы
Откройте браузер и перейдите по адресу:

http://localhost:3000/

Перейдите по адресу:

http://localhost:3000/about