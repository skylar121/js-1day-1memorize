// product 할당부분은 복붙해놓고 시작~ 
let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 32000, title: 'Check Shirt' },
  { id: 2, price: 15000, title: 'Black Tie' },
  { id: 3, price: 67000, title: 'Springfield Shirt' },
  { id: 4, price: 82000, title: 'Red Mini Dress' },
];

let lowToHigh = function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log(products);
};

lowToHigh();


// 배열 깊은 복사
// let lowToHigh = function () {
//     let deepArr = JSON.parse(JSON.stringify(products));
//     array.sort(function (a, b) {
//         return a.price - b.price;
//     });
//     console.log(deepArr);
//     console.log(products);
// }