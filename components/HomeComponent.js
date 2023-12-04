// Home Component
export default class HomeComponent extends HTMLElement {
    constructor() {
      super();
      const SHADOW = this.attachShadow({ mode: 'open' });
  
      const CONTENT = document.createElement('h1');
      CONTENT.innerHTML = '사용자의 편의를 위한 서비스를 개발을 하고 싶은<br/> 프론트엔드 개발자 김동원 입니다.';
      
      const ADD_BUTTON = document.createElement('button');
      const style = document.createElement('style');
      
      function create_list() {
        let doc = ["list", "list2"];
        let arr = [];
        for (let i = 0; i < doc.length; i++) {
          arr.push(doc.length);
        }
        return arr;
      }
  
      const TEST = document.createElement('div');
      TEST.textContent = create_list();
      
      style.textContent = `
        div {
          width: 1920px;
          margin: 0;
          padding: 0;
        }
  
        h1 {
          color: black;
        }
        div {
          color: black;
          font-size: 20px;
        }
      `;
      
      // 클릭 이벤트 엘리먼트 추가하기
      ADD_BUTTON.textContent = 'Add Element';
      ADD_BUTTON.addEventListener('click', () => {
        this.addNewElement("HelloWorld");
      });
  
      const PROFILE = document.createElement('div');
      function App() {
        return "Hello World";
      }
  
      const CONTACT = document.createElement('div');
      CONTACT.textContent = "CONTACT";
      PROFILE.textContent = App(); 
  
      SHADOW.appendChild(style);
      SHADOW.appendChild(CONTENT);
      SHADOW.appendChild(ADD_BUTTON);
      SHADOW.appendChild(CONTACT);
  
      let profile_key = [];
      const profile_value = document.createElement('div');
      
      const profile_data = [
        {id: 0, email: "canyon920@gmail.com"},
      ];
  
      profile_value.textContent = profile_key;
      profile_data.forEach(infomation => {
        // let idElement = document.createElement('div');
        // idElement.className = 'text_content';
        // idElement.textContent = `ID: ${infomation.id}`;
  
        let profileElement = document.createElement('div');
        profileElement.textContent = `e-mail : ${infomation.email}`;
  
        let result = document.createElement('div');
        result.className = 'result_wrap';
        let style = document.createElement('style');
  
        // Content 내용
        style.textContent = `
          .result_wrap > div {
            width: 600px;
            height: 100px;
            padding: 0 20px;
            color: orange;
            font-weight: 800;
            border-radius: 25px;
          }
        `;
        SHADOW.appendChild(style);
        result.appendChild(profileElement);
        SHADOW.appendChild(result);
      });
    }
  }
  
 customElements.define('home-component', HomeComponent);