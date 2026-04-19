import React, {use} from 'react';
import PricingCard from './pricingCard.jsx';
const PricingOption = ({pricePromise}) => {
    const pricingData=use(pricePromise); 
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 bg-white mb-20 px-8 md:px-30 py-3 z-50'>
          {
                pricingData.map(price=>
               ( <PricingCard key={price.id} price={price} badge_text={price.badge_text}></PricingCard>)
            )
                     }  
        </div>
    )
};

export default PricingOption;