// HeaderComponent.js 파일에서 HeaderComponent 가져오기
import HeaderComponent from './components/HeaderComponent.js';


// HomeComponent.js 파일에서 HomeComponent 가져오기
import HomeComponent from './components/HomeComponent.js';

// AboutComponent.js 파일에서 AboutComponent 가져오기
// import AboutComponent from './comopnents/AboutComponent.js';

// Router.js 파일에서 Router 가져오기
import Router from './Router.js';

// NotFoundComponent.js 파일에서 NotFoundComponent 가져오기
// import NotFoundComponent from './components/NotFoundComponent.js';

// 라우터 및 컴포넌트 초기화
const router = new Router();
router.addRoute('/', HomeComponent);
// router.addRoute('/about', AboutComponent);

// 초기 라우트
router.navigate('/');

// 헤더를 모든 페이지에 렌더링
const headerElement = new HeaderComponent();
document.body.prepend(headerElement);


// 클릭 및 브라우저 뒤로/앞으로 버튼 처리
document.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    router.navigate(path);
  }
});

window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  router.navigate(path);
});
