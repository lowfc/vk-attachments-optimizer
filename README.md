# VK attachments optimizer (chrome)

Расширение оптимизирует страницу вложений в личной переписке Вконтакте.

Для всех браузеров на базе chromium, проверено в Google Chrome.


## Зачем?

Когда в переписке Вконтаке много вложений, страница начинает тормозить, если долго скроллить вниз. Расширение сделает этот процесс более стабильным. 


## Как работает?

Расширение выгружает со страницы вложений фотографии, которые уже были просмотрены выше. **Важно:** при скролле наверх, фото не будут возвращены на страницу, т.е. что бы увидеть уже очищенные фото, нужно обновить страницу.

Глубину очистки можно выбрать, кликнув по значку дополнения в браузере. В окошке дополнения выберите нужную глубину в поле "Политика очистки":
- Выключено - очистка не будет производиться вовсе;
- Мягко - оставлять на странице много фотографий;
- Нормально - оптимальная очистка;
- Агрессивно - оставлять на странице только вложения за просматриваемый и предыдущий месяцы.

> **Если вы изменили "Политику очистки" находясь на странице Вконтакте, обновите страницу с помощью `F5`.**

> **Если с текущей настройкой "Политики очистки" страница продолжает тормозить, попробуйте выбрать более "агрессивную" политику.**


## Установка

### Для Google Chrome

1. Перейдите на [страницу релизов](https://github.com/lowfc/vk-attachments-optimizer/releases), скачайте последний релиз и распакуйте в удобную для вас папку
2. Перейдите на страницу chrome://extensions/
3. В правом верхнем углу включите "Режим разработчика"
4. Нажимте "Загрузить распакованное расширение", перейдите в папку с расширением (которую распаковали на шаге 1) и нажмите "Выбор папки"

### Другие браузеры

Ищете инструкцию по установке распакованных расширений для вашего браузера.