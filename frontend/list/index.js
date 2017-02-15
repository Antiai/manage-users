
import template from './list.pug';

import './list.styl';

export default class List {

  constructor({title, items}) {
    this._title = title;
    this._items = items;
    this.selected = {};

    this._render();
    this._elem.addEventListener('click', this.select.bind(this));
  }

  select(e) {
    e.preventDefault();
    if (e.target.closest('.list__item')) {
      let target = e.target.closest('.list__item');
      let arr = Array.from(document.querySelectorAll('.list__item'));
      let indexOfSelected = arr.indexOf(target);
      this.selected = this._items[indexOfSelected];
    } else {
      this.selected = {};
    }
    console.log(this.selected);
  }

  _render() {
    let tmp = document.createElement('div');
    tmp.innerHTML = template({
      title: this._title,
      items: this._items
    });
    this._elem = tmp.firstElementChild;
  }

  getElem() {
    return this._elem;
  }
}
