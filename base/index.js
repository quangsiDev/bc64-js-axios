// đồng bộ / bất đồng bộ

setTimeout(function () {
  console.log("bật quảng cáo");
}, 1);
// axios
console.log(2);
console.log(1);

// gọi api
// https://api.tiki.vn/raiden/v2/menu-config?platform=desktop

axios({
  url: "https://api.tiki.vn/raiden/v2/menu-config?platform=desktop",
  method: "GET",
})
  .then(function (res) {
    console.log("😀 - res", res.data.menu_block.items);
    // xử lý khi gọi api thành công
    console.log(9);
  })
  .catch(function (err) {
    console.log("😀 - err", err);
    // xử lý khi gọi api thất bại
  });

console.log(10);
