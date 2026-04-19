import React from 'react';
import card from "./singleCard"
import { ToastContainer,toast} from 'react-toastify';
import cartIcon from "./assets/products/shopping-cart.png"


const Premium = ({cart,handleRemove,checkOut}) => {
  const total= cart.reduce((total,item)=> total+ item.price,0)
  
    return (
    
<div className='max-w-5xl mx-auto bg-gray-100 rounded-sm py-5 px-6 ml-30 mb-10'>
  <div className='p-5'>
    <h2 className='font-semibold'>Your Cart</h2>
  </div>

 {
  cart.length<=0?(
    
      <div className='text-center p-10 ' >
   <div>
     <img src={cartIcon} alt="Cart Icon" className="w-10 h-10 mx-auto ml-105"/></div>
     <p className='text-gray-500 font-semibold mb-20'> Your cart is empty</p></div>
 ):
  (
    <div>
{cart.map((cartData)=>
         ( 
       
          
   <div key={cartData.id}>
    <div className='flex flex-inline gap-8 rounded-sm bg-white p-3 mt-4 '>

    <div > <img src={cartData.image} className=" max-w-7 mt-2"></img>
    </div>

<div className='flex flex-inline gap-140 mr-50' >
      <div className=' w-60'>
      <h2 className='font-bold text-[14px]'>{cartData.title}</h2>
       <span className=' text-[14px]'>${cartData.price}</span>
      </div>
     <div class='text-red-700 font-bold '><button onClick={()=> {toast("Remove"); handleRemove(cartData.id)}}  className='btn btn-ghost'>Remove</button></div>
</div>
 {/* toast.error("Remove" */}
    </div> 
   
    </div>   
  ))
 }
 {/* =======last==== */}
<div>
 
    <div className='flex flex-inline gap-170 font-bold mb-5 mt-5 ml-2'>
<div className=' w-60'><h3>Total</h3></div>
<div>${total}</div>
    </div>
<div><button class='btn btn-primary px-100 ml-2' onClick={()=>{toast("Proceed to Checkout");
  if(cart.length>0){
  checkOut()}}}>Proceed to Checkout</button></div>
</div>
{/* ============= */}
</div>
  )}
  </div>
  );
};


export default Premium;



