import React, {use} from 'react';
import SingleCard from './singleCard.jsx';
import Premium from './premium.jsx';
const CardOption = ({cardPromise,count,setCount,onAdd}) => {
    const cardData=use(cardPromise);
    return (
        <div className='grid grid-cols-3 gap-5 bg-gray-50 px-8 md:px-30 py-3 shadow-sm sticky top-0 z-50'>{
            cardData.map(card=>(
                <SingleCard key={card.id} card={card} handleBuyNow ={() => setCount(count + 1)}   onAdd={onAdd} > </SingleCard>)
            
          
        )
            }
            
        </div>
    );
};

export default CardOption;



