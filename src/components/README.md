# /components:

    /Compontent
      /[ComponentContainer.jsx, ComponentView.jsx]
      /[index.jsx, style.module.scss]
    /Component.jsx
    /index.js

Здесь размещены только общие компоненты, используемые на всех страницах.
Все компоненты должны быть зарегистрированы и экспортированы из /index.js для единой точки доступа.
Все компоненты должны иметь именнованный export. Это позволит избежать любых конфликтов.
Компоненты, состоящие из сложной логики или интеграции redux, могут быть дополнительно деструктурированы в “ComponentContainer.js ” & “ComponentView.js ” в соответствии с “Шаблоном представления контейнера” (это будет рассмотрено далее в Шаблонах проектирования)
СОВЕТ: Попробуйте создать именованный экспорт вместо экспорта по умолчанию для всех компонентов. Это позволит избежать любых конфликтов именования.

# Какие компоненты будут для данного проекта

- Заголовок страницы +
- Заголовок блока +
- Стандартный текст [400, 500] && [white, ligth] +
- Боковая нацигация
- Категории меню

Элементы форм

- Кнопки [solid, outline] возможность вывода иконок
- инпуты [text]
- select
