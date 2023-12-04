export default class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const header = document.createElement('div');
      header.setAttribute('part', 'my-part');
  
      const style = document.createElement('style');  
      style.textContent = `
        ul {
          width: 200px;
          height: 1400px;
          background: rgb(251, 251, 250);
          background-image: initial;
          background-position-x: initial;
          background-position-y: initial;
          background-size: initial;
          background-repeat-x: initial;
          background-repeat-y: initial;
          background-attachment: initial;
          background-origin: initial;
          background-clip: initial;
          padding: 0; 
          margin: 0;
        }
        li {
          margin-left: 20px;
          list-style: none;
          color: black;
        }
        a {
          color: black;
          text-decoration: none;
          line-height: 30px;
        }
      `;
  
      // Header Menu List
      const headerList = document.createElement('ul');
  
      const homeItem = document.createElement('li');
      const homeLink = document.createElement('a');
      
      homeLink.href = '/';
      homeLink.textContent = 'Home';
      homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        router.navigate('/');
      });
  
      homeItem.appendChild(homeLink);
      headerList.appendChild(homeItem);
  
      const aboutItem = document.createElement('li');
      const aboutLink = document.createElement('a');
  
      aboutLink.href = '/about';
      aboutLink.textContent = 'About';
      aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        router.navigate('/about');
      });
  
      aboutItem.appendChild(aboutLink);
      headerList.appendChild(aboutItem);
      header.appendChild(headerList);
  
      shadow.appendChild(style);
      shadow.appendChild(header);
  
    }
  }

  customElements.define('header-component', HeaderComponent);
