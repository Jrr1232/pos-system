import React, { useReducer } from 'react';

const services = [
{
   img: "highlights-logos.jpeg",
   name: 'Color/Highlights',
   price: 5,
   code: 1
},
{
   img: "Blow-dry-with-Hair-Styling-logos.jpeg",
   name: 'Blow dry with Hair Styling',
   price: 120,
   code: 2
},
{
   img: "Blowdry-logos.jpeg",
   name: 'Blow dry',
   price: 5,
   code: 3
},
{
  img: "hair-styling-logos.jpeg",
  name: 'Hair Styling',
  price: 5,
  code: 4
},
{
  img: "wash-logos.jpeg",
  name: 'Wash',
  price: 5,
  code: 5
},
];


function getTotal(cart) {
return cart.reduce((totalCost, item) => totalCost + item.price, 0);
}

function shoppingCartReducer(state, action) {
switch(action.type) {
   case 'add':
     return [...state, action.service];
   case 'remove':
     const serviceIndex = state.findIndex(item => item.name === action.service.name);
     if(serviceIndex < 0) {
       return state;
     }
     const update = [...state];
     update.splice(serviceIndex, 1)
     return update
   default:
     return state;
}
}

function getTotalSelectedAmountPerservice(cart, serviceName) {
   return cart.filter(item => item.name === serviceName).length;
}

export default function Service() {
const [cart, setCart] = useReducer(shoppingCartReducer, []);

function add(service) {
   const action = { service, type: 'add' };
   setCart(action);
}

function remove(service) {
   const action = { service, type: 'remove' };
   setCart(action);
}


const serviceHandler = async (event, service) => {
  event.preventDefault();
  console.log(service.name);
  console.log(service.code);
  console.log(service.price)
  ;
 

  const response = await fetch("http://localhost:3001/api/checkout", {
    method:"POST",
    body: JSON.stringify({
      service_name: service.name,
      service_code: service.code,
      price: service.price
    }),
    headers: {"Content-Type": "application/json"}
  });
  if (response.ok){
    alert("Succesfully added to Checkout")
  } else {
    alert("Failed to add to checkout")
  }
};

return(
   <div className="wrapper">
     <div className="shoppingcart">
       <strong>Shopping Cart</strong>
       <div>
          {cart.length} total items
       </div>
       <div>Total price: {getTotal(cart)} Dollars</div>
     </div>
     <div>
       {services.map(service => (
         <div key={service.name}>
           <div className="service">
           <img src={service.img} alt={service.name} />
           </div>
           <div className="selectservice">
             <button onClick={() => add(service)}>+</button><b>{getTotalSelectedAmountPerservice(cart, service.name)}</b>
             <button onClick={() => remove(service)}>-</button>
             <div className="checkout"> <button onClick={(event) => serviceHandler(event, service)}>
          Checkout
        </button></div>
           </div>
         </div>
       ))}
     </div>
     <br></br>
     <br></br>
   </div>
)
}
