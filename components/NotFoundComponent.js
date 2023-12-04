// NotFoundComponent
export default class NotFoundComponent extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const content = document.createElement('div');
      content.textContent = '404 Not Found';
  
      shadow.appendChild(content);
    }
  }
customElements.define('not-found-component', NotFoundComponent);
