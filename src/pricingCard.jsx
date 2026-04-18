import React from 'react';

const PricingCard = (({price}) => {
    return (
       
           
            
<div className='rounded-3xl p-8 border border-gray-200 hover:shadow-md h-full bg-gray-50'>
   <h2 className='font-bold text-[20px]'>{price.plan_name}</h2>
      <p className='mt-2'>{price.tagline}</p>
      <p className='mt-4 font-bold text-[25px] mb-5'>${price.price}
        <span className='font-normal text-[15px]'>/{price.billing_cycle}</span>
      </p>
      <div className='mb-10'><ol>
       <li className='list-none'> <i class="fa-solid fa-check" style={{color:'green'}}></i> {price.features[0]} </li>     
       <li className='list-none'> <i class="fa-solid fa-check" style={{color:'green'}}></i> {price.features[1]} </li>     
       <li className='list-none'> <i class="fa-solid fa-check" style={{color:'green'}}></i> {price.features[2]} </li>     
       </ol></div>
      <button className="bg-gradient-to-r from-blue-700 to-purple-800 text-white px-22  py-2 rounded-full text-sm font-semibold shadow-md whitespace-nowrap mt-5 ">{price.call_to_action}</button>
    </div>
   
     
             
       
    );
});

export default PricingCard;