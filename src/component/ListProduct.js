import ProductApi from "../api/ProductApi";
import { $, reRender } from "../utlis.js";

const ListProduct = {
    async render(){
        const { data : products } = await ProductApi.getAll();

        return /*html*/`
        <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Danh Mục</th>
            <th>Tên Sản Phẩm</th>
            <th>Hình Ảnh</th>
            <th>Số Lượng</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        ${products.map( (product, index) => {
            return /*html*/`
                <tr>
                    <td>${product.id}</td>
                    <td>${product.cateId}</td>
                    <td>${product.name}</td>
                    <td><img src="${product.image}" width="50px"/></td>
                    <td>${product.quantity}</td>
                    <td><a class="btn btn-success">Sửa</a>
                    <a class="btn btn-danger"  data-id="${product.id}">Xóa</a>
                    </td>
                </tr>
            `
        }).join("")}
        </tbody>
      </table>
        `;
    },
    async afterRender(){
        const btns = $('#list-product .btn');
        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function(){
                const question = confirm("Bạn có chắc chắn muốn xóa hay không ?");
                if(question){
                    console.log('12313');
                    ProductApi.remove(id);
                    debugger;
                    reRender(ListProduct, '#list-product')
                }
            })
        })
    }
}
export default ListProduct;