import template from './dashboard.pug';

import './dashboard.styl';

export default class Dashboard {

  constructor({title, list}) {
    this._title = title;
    this._list = list;
    this.props = this._list.selected;

    this._render();
  }

  _render() {
    let tmp = document.createElement('div');
    tmp.innerHTML = template({
      title: this._title,
      props: this.props
    });
    this._elem = tmp.firstElementChild;
  }

  getElem() {
    return this._elem;
  }
}
