
import ProductApi from '../api/ProductApi';
export default class Product {
    async render(){
        try {
            const { data: products} = await ProductApi.getAll();
            const result = products.map(product => {
                return `
                <div class="bg-light col-6 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center show overflow-hidden">
                <div class="bg-white shadow-sm mx-auto" style="width: 80%; height: 800px; border-radius: 21px 21px 0 0;">
                <div class="my-3 p-3">
                  <h2 class="display-5">${product.name}</h2>
                  <p class="lead"  >GIÁ : ${product.price}Đ</p>
                  <a class="btn btn-outline-secondary" href="/#/products/${product.id}">SHOW DETAIL</a>
                </div>
                <img src="${product.image}" alt="${product.name}">
                </div>
                </div>
                    `}).join(" ")
                    return `
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">X- Smart Phone</h1>
      <p class=" fw-normal">Uy tín, chất lượng hàng đầu Việt Nam</p>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
    
                <div class="content">
                    <div class="row">
                        ${result}
                    </div>
                </div>
        
        
        
        
        `;
        } catch (error) {
            console.log(error);
        }
    }
}