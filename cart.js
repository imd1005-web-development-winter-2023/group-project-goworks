//Add-to-Cart: shooping cart-Vaniya

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Bounce & Ball',
        image: '1.PNG',
        priceSign:'$',
        price: 20.00,
    },
    {
        id: 2,
        name: 'Plane',
        image: '2.png',
        priceSign:'$',
        price: 41.00,
    },
    {
        id: 3,
        name: 'Classic Car',
        image: '3.png',
        priceSign:'$',
        price: 24.00,
    },
    {
        id: 4,
        name: 'Toy Truck',
        image: '4.png',
        priceSign:'$',
        price: 40.00,
    },
    {
        id: 5,
        name: 'Rings Rattle',
        image: '5.png',
        priceSign:'$',
        price: 35.00,
    },
    {
        id: 6,
        name: 'Skatebaord',
        image: '6.png',
        priceSign:'$',
        price: 100.00,
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/Cart/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.priceSign}${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/Cart/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.priceSign}${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
}