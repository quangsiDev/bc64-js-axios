/**
 * GET: lấy danh sách, lấy chi tiết
 * POST: tạo mới
 * PUT: cập nhật
 * DELETE: xoá
 */

function renderProducts(productArray) {
  var contentHTML = "";
  for (var i = 0; i < productArray.length; i++) {
    var product = productArray[i];
    var trString = ` <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.img}</td>
                        <td>${product.desc}</td>
                        <td>

                        <button
                        onclick=xoaSp(${product.id})

                        class="btn btn-danger">Delete</button>
                        <button class="btn btn-primary">Edit</button>
                        </td>
                    </tr>`;

    contentHTML = contentHTML + trString;
  }
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
}
// gọi api lấy danh sách sản phẩm hiện có từ server
function fetchProductList() {
  axios({
    url: "https://6597f7bd668d248edf23d034.mockapi.io/product",
    method: "GET",
  })
    .then(function (res) {
      console.log("😀 - res", res.data);
      // gọi hàm renderProducts sau khi lấy data từ server
      renderProducts(res.data);
    })
    .catch(function (err) {
      console.log("😀 - err", err);
    });
}
fetchProductList();

//   xoá 1 sp từ server

function xoaSp(id) {
  //   gọi api xoá sp
  axios({ url: `https://6597f7bd668d248edf23d034.mockapi.io/product/${id}`, method: "DELETE" })
    .then(function (res) {
      // xoá thành công , gọi lại api lấy dssp mới nhất từ server
      fetchProductList();
      console.log("😀 - res", res.data);
    })
    .catch(function (err) {
      // xoá thất bại
      console.log("😀 - err", err);
    });
}
