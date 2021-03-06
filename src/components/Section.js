class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    // this._items.forEach((item) => this._renderer(item));
    this._items.forEach((item) => this.setItem(this._renderer(item)))
  }

  setItem(element) {
    this._container.prepend(element);
  }
}

export default Section;
