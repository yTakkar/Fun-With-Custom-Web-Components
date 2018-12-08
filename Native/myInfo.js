class MyInfo extends HTMLElement {
  constructor() {
    super()
    this.shadowElement = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  capitalize() {
    const value = this.getAttribute('name');
    return value.split(' ').map(e => e.charAt(0).toUpperCase() + e.substr(1)).join(' ')
  }

  render() {
    const template = `
      <span>${this.capitalize()}</span>
    `
    this.shadowRoot.innerHTML = template
  }
}

customElements.define('my-info', MyInfo)
