import ListProduct from "../component/ListProduct.js";

export default class AdminProductPage{
    async render(){
        return /*html*/`
        <div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <span data-feather="home"></span>
              Trang Quản Trị
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file"></span>
              Danh Mục
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Sản Phẩm
            </a>
          </li>
        </ul>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Quản Lý Sản Phẩm</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <a type="button" href="/#/addproduct" class="btn btn-sy btn-outline-secondary">Thêm Sản Phẩm</a>
          </div>
        </div>
      </div>
      <div class="table-responsive" id="list-product">
            ${ await ListProduct.render()}
      </div>
    </main>
  </div>
</div>

        `
    };
    async afterRender(){
        return `
        ${await ListProduct.afterRender()}
        `
    }
    
}