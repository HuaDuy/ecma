import Home from './pages/home.js';
import Product from './pages/products.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Support from './pages/support.js';
import ProductDetailPage from './pages/ProductDetailPage.js'; 
import { parserRequestUrl , $} from './utlis.js';
import Header from './component/Header.js';
import Error404Page from './pages/Error404Page.js';
import CategoryPage from './pages/categoryPage.js';
import ProductAddPage from './pages/ProductAddPage.js';
import AdminProductPage from './pages/AdminProductPage.js';

const addproduct = new ProductAddPage();
const categoryPage = new CategoryPage();
const home = new Home();
const products = new Product();
const productDetailPage = new ProductDetailPage();
const about = new About();
const contact = new Contact();
const support = new Support();
const error404 = new Error404Page();
const listproduct = new AdminProductPage();


const routes = {
    '/': home,
    '/products':products,
    '/products/:id': productDetailPage,
    '/categories/:id': categoryPage,
    '/about': about,
    '/contact': contact,
    '/support': support,
    '/addproduct': addproduct,
    '/listproduct': listproduct,
}

const router = async () => {
    const {resource, id } = parserRequestUrl();
    const parseUrl = ( resource ? `/${resource}` : '/') + ( id ? '/:id' : '');
    const page = routes[parseUrl] ? routes[parseUrl] : error404;
    $('#header').innerHTML = await Header.render();
    $('#main-content').innerHTML = await page.render();
    await page.afterRender();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);