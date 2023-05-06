export default class Popover {
  constructor(container) {
    this.container = container;
    this.onClick = this.onClick.bind(this);
  }

  get buttonHTML() {
    return '<button class="button" type="button">Click to toggle popover</button>';
  }

  get popoverHTML() {
    return `<div class="popover">
                <h3 class="popover-title">Popover for you</h3>
                <p class="popover-text">Here are some important information for you!</p>
              </div>`;
  }

  init() {
    this.container.insertAdjacentHTML('beforeend', this.buttonHTML);

    this.button = document.querySelector('.button');
    this.button.addEventListener('click', this.onClick);
  }

  onClick(e) {
    e.preventDefault();

    let popover = this.container.querySelector('.popover');
    if (popover) {
      popover.remove();
      return;
    }

    this.container.insertAdjacentHTML('beforeend', this.popoverHTML);
    popover = this.container.querySelector('.popover');

    const { left, top } = this.button.getBoundingClientRect();

    popover.style.width = `${this.button.offsetWidth + 30}px`;
    popover.style.left = `${left - 15}px`;
    popover.style.top = `${top - popover.offsetHeight - 10}px`;
  }
}
