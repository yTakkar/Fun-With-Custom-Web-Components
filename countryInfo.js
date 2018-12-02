class CountryInfo extends HTMLElement {
  constructor() {
    super()
    this._country = ''
    this._countryInfo = {}
    
    let shadowRoot = this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['country']
  }

  get country() {
    return this._country
  }

  set country(val) {
    this._country = val
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback >>', name, oldValue, newValue)
    switch(name) {
      case 'country': {
        this._country = newValue
        oldValue !== newValue && this.getCountryInfo()
      }
    }
  }

  getCountryInfo() {
    fetch(`https://restcountries.eu/rest/v2/name/${this._country}?fullText=true`)
      .then(resp => resp.json())
      .then(resp => {
        this._countryInfo = resp[0]
        this.createTemplate()
      })
      .catch(err => console.error(err))
  }

  createTemplate() {
    const {
      name,
      area,
      alpha3Code,
      altSpellings,
      borders,
      callingCodes,
      capital,
      nativeName,
      population,
      region,
      subregion,
      demonym,
      timezones,
      topLevelDomain,
      latlng,
      translations,
      flag,
      currencies
    } = this._countryInfo

    const info = `
      <img src=${flag} width='300px' />

      <p><b>Name</b>: ${name}</p>
      <p><b>Area</b>: ${area}</p>
      <p><b>Alpha3 Code</b>: ${alpha3Code}</p>
      <p><b>Alt Spellings: </b></p>
      <p><b>Capital</b>: ${capital}</p>
      <p><b>Native Name</b>: ${nativeName}</p>
      <p><b>Population</b>: ${population}</p>
      <p><b>Region</b>: ${region}</p>
      <p><b>SubRegion</b>: ${subregion}</p>
      <p><b>Demonym</b>: ${demonym}</p>
      <p><b>Latitude</b>: ${latlng[0]}</p>
      <p><b>Longitude</b>: ${latlng[1]}</p>

      <p><b>Currencies</b>:</p>
      <ul>
        ${Object.keys(currencies[0]).map(elem => 
          `<li>${elem}: ${currencies[0][elem]}</li>`
        )}
      </ul>      

      <p><b>Alt Spellings</b>:</p>
      <ul>
        ${altSpellings.map(elem => `<li>${elem}</li>`)}
      </ul>

      <p><b>Borders</b>:</p>
      <ul>
        ${borders.map(elem => `<li>${elem}</li>`)}
      </ul>

      <p><b>Calling Codes</b>:</p>
      <ul>
        ${callingCodes.map(sp => `<li>${sp.trim()}</li>`)}
      </ul>

      <p><b>Timezones</b>:</p>
      <ul>
        ${timezones.map(elem => `<li>${elem}</li>`)}
      </ul>

      <p><b>Top Level Domains</b>:</p>
      <ul>
        ${topLevelDomain.map(sp => `<li>${sp.trim()}</li>`)}
      </ul>

     <p><b>Translations</b>:</p>
      <ul>
        ${Object.keys(translations).map(sp => `<li>${sp}: ${translations[sp]}</li>`)}
      </ul>
    `

    const template = `
      <h1>COUNTRY INFO:</h1>
      ${info}
    `

    this.shadowRoot.innerHTML = template
  }

  connectedCallback() {
    console.log(`${this.tagName} mounted from the DOM`)
  }

  disconnectedCallback() {
    console.log(`${this.tagName} unmounted from the DOM`)
  }
}

// DEFINE OUR CUSTOM ELEMENT
customElements.define('country-info', CountryInfo)

// CHANGE COUNTRY-INFO'S COUNTRY PROP
const button = document.querySelector('button')
const input = document.querySelector('input[type="text"]')
const customElement = document.querySelector('country-info')

input.value = customElement.getAttribute('country')

button.addEventListener('click', function() {
  const value = input.value
  if (value && customElements.get('country-info')) {
    customElement.setAttribute('country', value.toLowerCase())
  }
})