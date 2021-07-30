const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((accum, cv) => accum + cv);


// Example code 
// const products = [
//     { name: 'Shampoo', price: 4.99 },
//     { name: 'Donuts', price: 7.99 },
//     { name: 'Cookies', price: 6.49 },
//     { name: 'Bath Gel', price: 13.99 }
//   ];

//   function getTotalAmountForProducts(products) {
//       let totalPrice = 0;
//       for (const product of products) {
//           totalPrice += product.price;
//       };
//       return totalPrice;
//   }

//   console.log(`This is the reduce method and it produced ${getTotalAmountForProducts(products)} as a result`);
//   console.log(getTotalAmountForProducts(products));


  