
### 1. Предисловие
1. Первый раз работаю с sass и tailwind, до этого просто использовала postcss. Поэтому из либы взяла только навбар и некоторые классы для стилей
2. Хотела еще добавить либу i18n, но не успела по времени
3. Данные для блога взяла с ТЖ, чтобы они +/- реалистичные были
4. Фильтр работает по "ИЛИ"

### 2. Структура приложения

```
├── src
│   ├── assets
│   │   ├── svg - Хранилище для svg-изображений
│   │   ├── base.css - Хранилище css-переменных
│   │   └── main.css - Корнейвой файл стилей
│   ├── components
│   │   └── Реиспользуемые компоненты
│   ├── entities
│   │   └── article.ts - Стор для статей
│   ├── router
│   │   └── Роутинг (Хотя он здесь особо не нужен)
│   ├── views
│   │   └── Страницы
│   └── shared
│       ├── types - Типы
│       └──  helpers - Функции 
```

### 3. Сборка

```sh
npm install
```

```sh
npm run dev
```
