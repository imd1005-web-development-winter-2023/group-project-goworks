//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
/*const appID = "app";
const headingText = "Develop. Preview. Ship.";
const headingTextIcon = "🚀";
const projectDueDate = "11 April 2023 11:59";

// Variables
let countdownDate = new Date(projectDueDate);

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

function calculateDaysLeft(countdownDate) {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  // Countdown passed already
  if (difference < 1) {
    return null;
  }

  const days = Math.floor(difference / (60 * 60 * 24));

  return days;
}

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  const daysLeft = calculateDaysLeft(countdownDate);
  let headingTextCalculated = headingText;

  if (daysLeft) {
    headingTextCalculated = headingTextCalculated.concat(
      " In ",
      daysLeft.toString(),
      " days "
    );
  }
  h1.textContent = headingTextCalculated.concat(headingTextIcon);
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();*/

let openShopping=document.querySelector('.shopping');
let closeShopping=document.querySelector('.closingShopping');
let list=document.querySelector('.list');
let listCard=document.querySelector('.listCart');
let body=document.querySelector('.body');

let total=document.querySelector('.total');
let quantity=document.querySelector('.quantity');

openShopping.addEventListener('click',()=>{
  body.classList.add('active');
})

closeShopping.addEventListener('click',()=>{
  body.classList.remove('active');
})

let products=[
  {
    id:1,
    name:'Product name 1',
    image:'1.PNG',
    price:120000

  },

  {
    id:2,
    name:'Product name 2',
    image:'2.PNG',
    price:120000

  },

  {
    id:3,
    name:'Product name 3',
    image:'3.PNG',
    price:120000

  },

  {
    id:4,
    name:'Product name 4',
    image:'4.PNG',
    price:120000

  },

  {
    id:5,
    name:'Product name 5',
    image:'5.PNG',
    price:120000

  },

  {
    id:6,
    name:'Product name 6',
    image:'6.PNG',
    price:120000

  },
];

let listCards=[];
function initApp(){
  products.forEach((value,key)=>{
    let newDiv=document.createElement('div');
    newDiv.classList.add('item');

    newDiv.innerHTML=
      <><img src="image/${value.image}" />
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button oneclick="addToCard(${hey})">Add To Card</button>
    </>;

      list.appendChild(newDiv);
  })
}
initApp();

function addToCard(key){
  if(listCards[key] == null){
      // copy product form list to list card
      listCards[key] = JSON.parse(JSON.stringify(products[key]));
      listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard(){
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key)=>{
      totalPrice = totalPrice + value.price;
      count = count + value.quantity;
      if(value != null){
          let newDiv = document.createElement('li');
          newDiv.innerHTML = `
              <div><img src="image/${value.image}"/></div>
              <div>${value.name}</div>
              <div>${value.price.toLocaleString()}</div>
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
  reloadCard();
}
