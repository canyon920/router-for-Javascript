// Component 2
export default class AboutComponent extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const content = document.createElement('div');
      content.textContent = 'About Component';
      const addButton = document.createElement('button');
      addButton.textContent = 'Add Element';
      
      addButton.addEventListener('click', () => {
        this.addNewElement();
      });
      const ul = document.createElement('ul');
      const li = document.createElement('li');
      var swiper_value = ["First", "Second"];
      var arr = [];
      for(let i = 0; i < swiper_value.length; i++) {
        arr.push(swiper_value[i]);
      }
      li.textContent = arr;
      shadow.appendChild(content);
      shadow.appendChild(addButton);
      shadow.appendChild(li);
    }
  
    addNewElement() {
      const newElement = this.shadowRoot.createElement('div');
      newElement.textContent = 'New Element';
      this.shadowRoot.appendChild(newElement);
    }
  }

customElements.define('about-component', AboutComponent);

