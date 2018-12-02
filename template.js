// SIMPLE WAY TO CREATE A SHADOW DOM AND USE <TEMPLATE/> AS A PLACEHOLDER TAG

const host = document.querySelector('#shadow-with-template')
const root = host.attachShadow({ mode: 'open' })
const template = document.querySelector('#template')
const clone = document.importNode(template.content, true)
root.appendChild(clone)
