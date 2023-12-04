// import NotFoundComponent from "./components/NotFoundComponent";

class Router {
  constructor() {
    this.routes = {};
  }
    addRoute(path, component) {
    this.routes[path] = component;
  }

  navigate(path) {
    const component = this.routes[path];

    if (component) {
      this.renderComponent(component);
      // Update the URL without triggering a page reload
      history.pushState({}, '', path);
    } else {
      console.log("not found component")
      // this.renderComponent(NotFoundComponent);
    }
  }

  renderComponent(component) {
    const appElement = document.getElementById('app');
    appElement.innerHTML = '';
    appElement.appendChild(new component());
  }
}
export default Router;



// // Initialize components


// // Initialize router
// const router = new Router();
// router.addRoute('/', HomeComponent);
// router.addRoute('/about', AboutComponent);

// // Initial route
// router.navigate('/');

// // Render header on every page
// const headerElement = new HeaderComponent();
// document.body.prepend(headerElement);

// document.addEventListener('click', (event) => {
//   if (event.target.tagName === 'A') {
//     event.preventDefault();
//     const path = event.target.getAttribute('href'); // Corrected typo here
//     router.navigate(path);
//   }
// });

// // Handle browser back/forward buttons
// window.addEventListener('popstate', () => {
//   const path = window.location.pathname;
//   router.navigate(path);
// });
