import React ,{useState} from 'react';
import './App.css'
 import { ToastContainer,toast} from 'react-toastify';
const SingleCard =( ({card , handleBuyNow,handleCart,onAdd}) => {
  const [isAdded, setAdded] = useState(false);
  const handleLast=()=>{
    if(!isAdded){
      onAdd(card);
      handleBuyNow();
    }
  }
  return (
    <div className='rounded-3xl p-8 border border-gray-200 hover:shadow-md h-full hover:bg-gray-200'>
       <div className='text-center ml-50'>
        {card.badge==="Best Seller"? 
          (<div className='text-yellow-600 bg-orange-100 rounded-full'>{card.badge}</div>):
          card.badge==="Popular"?(<div className='text-purple-600 bg-purple-300 rounded-full'>{card.badge}</div>):
          (<div className='text-green-600 bg-green-200 rounded-full'>{card.badge}</div>)
        }
       </div>
       
      <div className='border border-gray-300 rounded-full max-h-13 max-w-13 p-3 mb-3'>
    <img src={card.image} className="max-h-7 max-w-7"></img>
    </div>
      <h2 className='font-bold text-[20px]'>{card.title}</h2>
      <p className='mt-3 text-gray-500 h-1/5'>{card.description}</p>
      <div className='mt-4 mb-4'>
       <span className='font-bold text-[20px]'>${card.price}</span>
       <span className='text-gray-500'>{card.billing_cycle}</span>
      </div>
      <div><ol>{card.features.map((feature)=>
       <li className='list-none  text-gray-500'> <i class="fa-solid fa-check" style={{color:'green'}}></i> {feature} </li>  )   }
         
       </ol></div>
      <button  onClick={()=>{setAdded(true);  {if (!isAdded) {toast("Added To Cart!");
      handleBuyNow(), handleLast()}}} } className= {!isAdded? "bg-gradient-to-r from-blue-700 to-purple-800 text-white px-28  py-2 rounded-full text-sm font-semibold shadow-md whitespace-nowrap mt-5 " : "bg-green-500 text-white px-20  py-2 rounded-full text-sm font-semibold shadow-md whitespace-nowrap mt-5 "}>{!isAdded? ("Buy Now"):(<><i class="fa-solid fa-check"></i> Added To Cart!</>)} </button>
    </div>




      )
});
export default SingleCard;