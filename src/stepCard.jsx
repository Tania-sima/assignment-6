import React from 'react';

const StepCard = (({step}) => {
    return (
       
           
            
<div className='rounded-3xl p-8 border border-gray-200 hover:shadow-md h-full bg-gray-50 text-center'>
     <div className='bg-gradient-to-r from-blue-700 to-purple-800 item-right rounded-full  w-8 h-8 flex  items-center ml-60'> <span className='text-gray-50 '>0{step.id}</span> </div>
    <div className='border border-gray-300 rounded-full max-h-13 max-w-13 p-3 mb-3 bg-blue-100 ml-25'>
    <img src={step.image} className="max-h-7 max-w-7"></img>
    </div>
  
   <h3 className='font-semibold text-[20px]'>{step.title}</h3>
      <p className='mt-3'>{step.description}</p>
    </div>
       
    );
});

export default StepCard;