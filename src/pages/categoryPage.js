import ProductApi from "../api/ProductApi";
import { parserRequestUrl } from "../utlis";
export default class CategoryPage{
    async render(){
        // fetch(`${apiUrl}products/?_expand=category`)
        const { id } = parserRequestUrl();
        const { data : products } = await ProductApi.getAll();
        console.log(products);
        let result = products.filter(product => product.cateId == id).map(item => {
            return /*html*/`
            <div class="bg-light col-6 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center show overflow-hidden">
            <div class="bg-white shadow-sm mx-auto" style="width: 80%; height: 800px; border-radius: 21px 21px 0 0;">
            <div class="my-3 p-3">
              <h2 class="display-5">${item.name}</h2>
              <p class="lead"  >GIÁ : ${item.price}Đ</p>
              <a class="btn btn-outline-secondary" href="/#/products/${item.id}">SHOW DETAIL</a>
            </div>
            <img src="${item.image}" alt="${item.name}">
            </div>
            </div>
            `
        }).join("");
        return /*html*/`
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">X-Smart Phone</h1>
          <p class=" fw-normal">Uy tín, chất lượng hàng đầu Việt Nam</p>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        
                    <div class="content">
                    <h1 class="display-5">Danh Mục: </h1>
                        <div class="row">
                            ${result}
                        </div>
                    </div>
            
        `
    }
    
}