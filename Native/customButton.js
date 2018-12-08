class CustomButton extends HTMLButtonElement {
  constructor() {
    super()
    this.addEventListener('click', this.callBack)
  }

  callBack(e) {
    console.log(`${this.getAttribute('is')} called`)
  }
}

customElements.define('custom-button', CustomButton, { extends: 'button' })