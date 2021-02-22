
import { parserRequestUrl } from "../utlis.js";
import ProductApi from "../api/ProductApi.js";


class ProductDetailPage{
    async render(){
        const { id } = parserRequestUrl();
        console.log(id);
        const { data : product } = await ProductApi.get(id);
        return /*html*/`
        <div class="container">
        <div class="card">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                      <img src="${product.image}"/>
                    </div>
                  </div>
                </div>
                <div class="details col-md-6">
                  <h3 class="product-title">${product.name}</h3>
                  <div class="rating">
                    <div class="stars">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>
                    <span class="review-no">41 reviews</span>
                  </div>
                  <p class="product-description">
                      ${product.description}
                  </p>
                  <h4 class="price">Giá <span>${product.price}</span></h4>
                <h5 class="sizes">
                  Bộ nhớ:
                  <span class="size" data-toggle="tooltip" title="small">32GB</span>
                  <span class="size" data-toggle="tooltip" title="medium">64GB</span>
                  <span class="size" data-toggle="tooltip" title="large">128GB</span>
                </h5>
                <h5 class="colors">
                  Màu sắc:
                  <span
                    class="color orange not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  ></span>
                  <span class="color green"></span>
                  <span class="color blue"></span>
                </h5>
                <div class="action">
                  <button class="add-to-cart btn btn-default" type="button">
                    Thêm vào giỏ hàng
                  </button>
                  <button class="like btn btn-default" type="button">
                    <span class="fa fa-heart"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    }
}
export default ProductDetailPage;