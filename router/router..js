var container = document.querySelector("app");

const pages = {
  home: () => {
    var home = document.createElement("div");
    let newContent = document.createTextnode("...");
    container.innerText = "Hello World"
    container.appendChild(home);
  	},
  oper: () => {
  	container.innerText = "operation";
  }
}

const router = createRouter();

router
  .addRoute("#/", pages.home)
  .addRoute("#/oper", pages.oper)
  .start();