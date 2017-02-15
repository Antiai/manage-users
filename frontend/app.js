'use strict';

import List from './list';
import Dashboard from './dashboard';

let list = new List ({
  title: "Пользователи",
  items: [{
    firstName: "Василий",
    surName:  "Иванов"
  }, {
    firstName: "Петр",
    surName:  "Васильевич"
  }]
});

document.body.appendChild(list.getElem());

let dashboard = new Dashboard ({
  title: "Редактирование профиля",
  props: list.selected
});

document.body.appendChild(dashboard.getElem());
