import React ,{use} from 'react';
import StepCard from './stepCard.jsx';
const StepOption = ({stepPromise}) => {
    const stepData=use(stepPromise);    
        return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 bg-white mb-20 px-8 md:px-30 py-3 z-50'>
            {
                stepData.map(step=>
               ( <StepCard key={step.id} step={step}></StepCard>)
                )
                     }
        </div>
    );
};

export default StepOption;