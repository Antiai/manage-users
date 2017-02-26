'use strict';

import './form/form.styl';
import List from './list';
import Dashboard from './dashboard';

let form = document.forms[0];

let userList = new List ({
  title: "Пользователи",
  items: [{
    firstname: "Василий",
    surname:  "Иванов"
  }, {
    firstname: "Петр",
    surname:  "Васильев"
  }, {
    firstname: "Иван",
    surname:  "Сидоров"
  }]
});

form.appendChild(userList.getElem());

let userDashboard = new Dashboard ({
  title: "Редактирование профиля",
  list: userList
});

form.appendChild(userDashboard.getElem());

form.addEventListener('item-select', function(event) {
  userDashboard.showProps(event.detail.value);
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  userDashboard.returnProps();
});

form.addEventListener('item-save', function(event) {
  userList.setProps(event.detail);
});

form.addEventListener('item-new', function(event) {
  userList.clearSelection();
  userList.addNewItem(event.detail);
});

form.addEventListener('cancel-changes', function(event) {
  if (Object.keys(userList.getSelectedElem()).length == 0) {
    userDashboard.clearFields();
  } else {
    userDashboard.showProps(userList.getSelectedElem());
  }
});
