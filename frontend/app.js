'use strict';

import List from './list';
import Dashboard from './dashboard';

let userList = new List ({
  title: "Пользователи",
  items: [{
    firstName: "Василий",
    surName:  "Иванов"
  }, {
    firstName: "Петр",
    surName:  "Васильевич"
  }]
});

document.body.appendChild(userList.getElem());

let userDashboard = new Dashboard ({
  title: "Редактирование профиля",
  list: userList
});

document.body.appendChild(userDashboard.getElem());
