import React from 'react';

const PricingCard = (({price,badge_text}) => {
    return (

        
<div className= {badge_text?'relative bg-gradient-to-r from-blue-700 to-purple-800 rounded-3xl p-8 text-white border border-gray-200 hover:shadow-md h-full' :'bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:shadow-md h-full'} >
{
  badge_text &&
  ( <div className='absolute -top-3 left-1/2 -translate-x-1/2 z-20'><span className='bg-yellow-100 px-4 py-1.5 rounded-full text-xs font bold text-red-700 whitespace-nowrap shadow-sm'>{badge_text}</span></div>)
}

   <h2 className='font-semibold text-[20px]'>{price.plan_name}</h2>
      <p className={badge_text?'mt-2 text-white':'mt-2 text-gray-500'}>{price.tagline}</p>
      <p className='mt-4 font-bold text-[25px] mb-5'>${price.price}
        <span className={badge_text?'font-normal text-[15px] text-white':'font-normal text-[15px] text-gray-500'}>/{price.billing_cycle}</span>
      </p>
      <div className='h-2/5'>
        <ol>{price.features.map((feature)=>(
       <li className={badge_text? "list-none text-white":"list-none text-gray-500"}><i class="fa-solid fa-check" style={badge_text?{color:'white'}:{color:'green'}}></i> {feature} </li> ))}    
       </ol></div>
      <button className={badge_text?"bg-white text-purple-800 px-22  py-2 rounded-full text-sm font-semibold shadow-md whitespace-nowrap mt-5 ":"bg-gradient-to-r from-blue-700 to-purple-800 text-white px-22  py-2 rounded-full text-sm font-semibold shadow-md whitespace-nowrap mt-5 "}>{price.call_to_action}</button>
    </div>

   
     
             
       
    );
});

export default PricingCard;