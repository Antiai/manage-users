import template from './dashboard.pug';

import './dashboard.styl';

export default class Dashboard {

  constructor({title, props}) {
    this._title = title;
    this._props = props;

    this._render();
  }

  _render() {
    let tmp = document.createElement('div');
    tmp.innerHTML = template({
      title: this._title,
      props: this._props
    });
    this._elem = tmp.firstElementChild;
  }

  getElem() {
    return this._elem;
  }
}
