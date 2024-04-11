

/**------------------------------------------------------------------EXERCISE 1-------------------------------------------------------------------- */



function transformToObjects(listOfNumbers) {
    result = [];
    listOfNumbers.map(number => (result.push({ val: number })));
    return result;
}

console.log(transformToObjects([1, 2, 3, 4, 5]));



/**--------------------------------------------------------------------EXERCISE 2------------------------------------------------------------------ */



const STUDENTS_DATA = [
    { firstName: "An", lastName: "Nguyen", batch: "A", age: 20 },
    { firstName: "Bình", lastName: "Trần", batch: "B", age: 22 },
    { firstName: "Cẩm", lastName: "Lê", batch: "C", age: 21 },
    { firstName: "An", lastName: "Võ", batch: "A", age: 19 }, // Duplicate first name
];

function updateStudentAge(firstName, lastName, batch, newAge) {
    const student = STUDENTS_DATA.find(student =>
        student.firstName === firstName &&
        student.lastName === lastName &&
        student.batch === batch
    );
    if (student) {
        student.age = newAge;
    }
}

// Test the function
updateStudentAge("An", "Võ", "A", 20);

console.log(JSON.stringify(STUDENTS_DATA));



/**-----------------------------------------------------------------EXERCISE 3--------------------------------------------------------------------- */



const PRODUCTS = [
    { id: 1, name: "Apple", price: 2.5 },
    { id: 2, name: "Banana", price: 1.5 },
    { id: 3, name: "Orange", price: 3 },
    { id: 4, name: "Rice", price: 1.5 },
    { id: 5, name: "Chocolate", price: 3 },
  ];
  
  const SHOPPING_CART = [
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
  ];
  
  function getCartTotalAmount() {
    let totalAmount = 0;
    SHOPPING_CART.forEach(item => {
      const product = PRODUCTS.find(product => product.id === item.id);
      if (product) {
        totalAmount += (product.price * item.quantity);
      }
    });
    return totalAmount;
  }
  
  function addProductToCart(productId) {
    const cartItem = SHOPPING_CART.find(item => item.id === productId);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      SHOPPING_CART.push({ id: productId, quantity: 1 });
    }
  }
  
  function removeProductFromCart(productId) {
    const cartItem = SHOPPING_CART.find(item => item.id === productId);
    if (cartItem) {
      if(cartItem.quantity > 1){
        cartItem.quantity--;
      }else{
        SHOPPING_CART.splice(SHOPPING_CART.indexOf(cartItem), 1);
      }
    }

  }
  
  console.log(getCartTotalAmount());

  addProductToCart(2);
  console.log(JSON.stringify(SHOPPING_CART));

  removeProductFromCart(3);
  console.log(JSON.stringify(SHOPPING_CART)); 
  
  