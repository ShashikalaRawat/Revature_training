// Task
// Reduce the price of each item by 50 from shopItems array;
// And store the modified objs in new array.

var it1={
    name: "Shoes",
    category: "Footware",
    price: 200
}

var it2={
    name: "Shirt",
    category: "Clothes",
    price: 800
}

var it3={
    name: "Pants",
    category: "Clothes",
    price: 500
}

var shopItems=[it1,it2,it3];

var Items=shopItems.map((ele,index,array)=>{
      ele.price=ele.price-50;
      return ele;
});

console.log(Items);


// Get the total value of all the products in shopitems array.

var total=shopItems.reduce((acc,ele)=>{
    var obj={};
    obj.price=acc.price+ele.price;
       return obj;
});

console.log(total);
console.log(shopItems);