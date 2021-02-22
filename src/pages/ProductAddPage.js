import ProductApi from '../api/ProductApi.js';
import { $ } from '../utlis.js';

export default class ProductAddPage{
    render(){
        return /*html*/`
        <div class="container">

        <section class="panel panel-default">
      <div class="panel-heading"> 
      <h3 class="panel-title">Thêm Sản Phẩm Mới</h3> 
      </div> 
      <div class="panel-body">
        
      <form  id="form-add">
         <div class="form-group">
          <label class="col-sm-3 control-label">Tên sản phẩm</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="product-name">
          </div>
        </div> 
        <div class="form-group">
          <label class="col-sm-3 control-label">Giá</label>
          <div class="col-sm-9">
            <input type="number" class="form-control" id="product-price">
          </div>
        </div> 
        <div class="form-group">
          <label class="col-sm-3 control-label">Mô tả</label>
          <div class="col-sm-9">
            <textarea class="form-control" id="product-description"></textarea>
          </div>
        </div> 
        <div class="form-group">
          <label class="col-sm-3 control-label">Số lượng</label>
          <div class="col-sm-3">
         <input type="number" class="form-control" id="product-quantity">
          </div>
          <br>
        <div class="form-group">
          <label for="name" class="col-sm-3 control-label">Hình ảnh sản phẩm</label>
          <div class="col-sm-3">
            <label class="control-label small" >Định dạng (jpg/png):</label> <input type="file" id="product-image">
          </div>
        </div> 
        <div class="form-group">
          <label class="col-sm-3 control-label">Danh mục</label>
          <div class="col-sm-3">
         <select class="form-control">
          <option value="">Выберите</option>
          <option value="texnolog2">Технолог 2</option>
          <option value="texnolog3">Технолог 3</option>
         </select>
          </div>
        </div> 
        <hr>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9">
            <button type="submit" class="bt n btn-success">Thêm sản phẩm</button>
          </div>
        </div> 
      </form>
        
      </div>
      </section>
      
        
      </div> 
        `
        
    };
    afterRender(){
      
      $('#form-add').addEventListener('submit', e => {
         e.preventDefault();
         const product = {
           name: $('#product-name').value,
           image: $('#product-image').value,
           price: $('#product-price').value,
           description: $('#product-description').value,
           status: true,
           quantity: $('#product-quantity').value,
         }
         console.log(product);
         ProductApi.add(product);
      })
      
    }
}