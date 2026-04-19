import React ,{useState} from 'react';

const SecondPage = ({isPremium, setPremium,count, handleCart,cart}) => {
     
    return (
        
           <div className="bg-[#F9FAFB] py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    
   
    <h2 className="text-4xl font-bold text-[#1D263A] mb-4">
      Premium Digital Tools
    </h2>
    
   
    <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
      Choose from our curated collection of premium digital products designed 
      to boost your productivity and creativity.
    </p>

    
    <div className=" mx-auto  ">
      <div className="bg-[#F3F4F6] p-1.5 rounded-full inline-flex items-center gap-2 border border-gray-200 ">
        
       
        <button onClick={()=>{setPremium(false) }}  className={!isPremium? "bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-2 rounded-full text-sm font-semibold shadow-md":"text-gray-500 px-8 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"} >
          Products
        </button>

       
        <button onClick={()=>{setPremium(true);  {if (cart) {
      handleCart()}}}}  className={!isPremium?"text-gray-500 px-8 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition":"bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-2 rounded-full text-sm font-semibold shadow-md"} >
      Cart ({count})
        </button>
        
      </div>
    </div>

  </div>
</div> 
       
    );
};


export default SecondPage;