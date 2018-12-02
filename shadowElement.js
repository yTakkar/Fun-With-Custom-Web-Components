// SIMPLE WAY TO CREATE A SHADOW DOM 

const host = document.querySelector('#shadow-root')
const root = host.attachShadow({ mode: 'open' })
const div = document.createElement('div')
div.textContent = 'This is a shadow element'
root.appendChild(div)