import React, {use} from 'react';
import PricingCard from './pricingCard.jsx';
const PricingOption = ({pricePromise}) => {
    const pricingData=use(pricePromise); 
    return (
        <div className='grid grid-cols-3 gap-5 bg-white mb-20 px-8 md:px-30 py-3 z-50'>
          {
                pricingData.map(price=>
               ( <PricingCard key={price.id} price={price}></PricingCard>)
            )
                     }  
        </div>
    )
};

export default PricingOption;