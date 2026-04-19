import React, {use, Suspense,useState } from 'react';
import './App.css'
import Navbar from "./navbar.jsx";
import bannerImg from './assets/banner.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import playIcon from "./assets/Play.png"
import CardOption from "./cardOption.jsx"
import StepOption from "./stepOption.jsx"
import PricingOption from "./pricingOption.jsx"
import Premium from "./premium.jsx"
import SecondPage from "./secondPage.jsx"





const cardPromise= fetch('cardData.json')
.then(res=> res.json());
const stepPromise= fetch('stepData.json')
.then(res=> res.json());
const pricePromise= fetch('pricingData.json')
.then(res=> res.json());
function App() {
  const [isPremium, setPremium] = useState(false);
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart"))||[]);

  const [count, setCount] = useState(cart.length);
const handleCart=(product)=>{
  const newCart=[...cart,product];
  setCart(newCart);
 
  localStorage.setItem("cart",JSON.stringify(newCart));
};
const handleRemove = (id) => {
  const updatedCart = cart.filter(item => item.id !== id);
  setCart(updatedCart);
  setCount(updatedCart.length);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
const checkOut=()=>{
setCart([]);
setCount(0);
localStorage.removeItem("cart");
 };
  

 
  return (
    <>
      <div>
      <Navbar count={count}></Navbar>
      </div>



      {/* ============= */}
  {
  !isPremium? 
  (
  
 <>
   <section >
       <div className="hero min-h-screen lg:px-30 md:10 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bannerImg} className="max-w-sm rounded-lg ml-8" />
    <div>
      <span className='inline-flex items-center rounded-full gap-2 bg-indigo-100 text-indigo-600 px-4 py-1 border border-indigo-200'><i className="fa-regular fa-circle-dot"></i>New: AI-Powered Tools Available</span>
      <h1 className="text-5xl font-bold mt-10">Supercharge Your Digital Workflow</h1>
      <p className="py-6 text-gray-500">Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today. Explore Products</p>
<div className='inline-flex gap-5'>
      <button className="btn btn-primary rounded-full bg-gradient-to-r from-blue-700 to-purple-800 ">Explore Products</button>
      <button className="btn btn-outline hover:bg-blue-400 rounded-full text-blue-700"><img src={playIcon}/>Watch Demo</button></div>
     </div>
    </div>
  </div> </section>


      <section className="bg-gradient-to-r from-blue-700 to-purple-800 py-12 px-6 lg:px-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-10 text-white">
    <div className="text-center">
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">50K+</h2>
      <p className="text-indigo-100 mt-2 text-sm font-medium opacity-70">Active Users</p>
    </div>
    <div className="hidden md:block h-16 w-[1.5px] bg-white/20"></div> 
    <div className="text-center">
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">200+</h2>
      <p className="text-indigo-100 mt-2 text-sm font-medium opacity-70">Premium Tools</p>
    </div>  
    <div className="hidden md:block h-16 w-[1.5px] bg-white/20"></div>  
    <div className="text-center">
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">4.9</h2>
      <p className="text-indigo-100 mt-2 text-sm font-medium opacity-70">Rating</p>
    </div>
  </div>
</section>


<div>
<SecondPage isPremium={isPremium} setPremium={setPremium} count={count} cart={cart} setCart={setCart}></SecondPage>
 </div>

  <main>
  <Suspense fallback=<span className="loading loading-bars loading-md"></span>>
  <CardOption setCount={setCount} count={count} cart={cart} setCart={setCart} cardPromise={cardPromise} onAdd={handleCart} ></CardOption>
  </Suspense>
</main>


<section>
  <div className='text-center mt-30 mb-10'>
            <h1 className='text-3xl font-bold '>Get Started in 3 Steps</h1>
            <p className='mt-5 text-sm text-gray-500'>Start using premium digital tools in minutes, not hours.</p>      
              </div>
           
<Suspense fallback=<span className="loading loading-bars loading-md"></span>>
  <StepOption stepPromise={stepPromise}></StepOption>
  </Suspense>

</section>


<section>
  <div className='text-center mt-30 mb-10 bg-white'>
            <h1 className='text-3xl font-bold'>Simple, Transparent Pricing</h1>
            <p className='mt-5 text-sm text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>      
              </div>
           
<Suspense fallback= <span className="loading loading-bars loading-md"></span>>
  <PricingOption pricePromise={pricePromise}></PricingOption>
  </Suspense>
</section>


 <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16 ">
  <div className="mx-auto text-indigo-100 lg:text-center ml-10 mr-10">
      <h2 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold ">Ready to Transform Your Workflow?</h2>
      
      <div className=" mt-4 opacity-70 lg:mx-auto w-full ">
      <p>Join thousands of professionals who are already using Digitools to work smarter.</p>
      <p>Start your free trial today.</p>
    </div>

   <div className='inline-flex gap-5 mt-5'>
      <button className="btn btn-primary rounded-full bg-white text-blue-700 ">Explore Products</button>
      <button className="btn btn-outline rounded-full text-indigo-100 ">View Pricing</button></div>
    
   <div className='flex flex-inline gap-7 mx-auto opacity-70 lg:ml-84 mt-5'>
    <span> 14-day free trial</span>
    <ul className='list-disc flex flex-inline gap-7'>
       <li>No credit card required</li>
       <li>Cancel anytime</li>
    </ul>
   </div>
  </div>
</section>


<footer className='bg-zinc-900 text-indigo-50 py-22 lg:px-30 md:px-20 sm:px-20  '>
  <div className='lg:flex flex-inline gap-15 mb-10'>
<div className='lg:w-2/7 md:w-2/3 sm:2/3 mb-5 ml-5'>
  <h3 className='font-bold text-2xl mb-3 '>DigiTools</h3>
  <p className='text-gray-400'> Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
</div>
<div  className='lg:w-1/7  md:w-2/3 sm:2/3 mb-5 ml-5'>
  <h3 className='font-semibold  mb-3'>Product</h3>
  <ul className='text-gray-400'>
    <li>Features</li>
    <li>Pricing</li>
    <li>Templates</li>
    <li>Integrations</li>
  </ul>
</div>
<div className='w-1/7 ml-5'>
  <h3 className='font-semibold mb-3'>Company</h3>
  <ul className='text-gray-400'>
    <li>About</li>
    <li>Blog</li>
    <li>Careers</li>
    <li>Press</li>
  </ul>
</div>
<div className='w-1/7 ml-5'>
  <h3 className='font-semibold mb-3'>Resources</h3>
  <ul className='text-gray-400'>
    <li>Documentation</li>
    <li>Help Center</li>
    <li>Community</li>
    <li>Contact</li>
  </ul>
</div>
<div className='w-2/7 ml-5'>
  <h3 className='font-semibold mb-3'>Social Links</h3>
     <div className='flex flex-inline gap-2'>
    <span className='bg-white rounded-full text-blue-950 p-1'><i class="fa-brands fa-instagram"></i></ span>   
   <span className='bg-white rounded-full text-blue-950 p-1'><i class="fa-brands fa-square-facebook"></i> </span> 
     <span className='bg-white rounded-full text-blue-950 p-1'><i class="fa-brands fa-x-twitter"></i> </span> 
     </div>
</div>
</div>

<div>
  <hr className='text-gray-600'></hr>
  <div className='lg:flex flex-inline md:grid grid-cols-1 sm:grid grid-cols-1 gap-90 py-5'>
  <div>
    <p className='text-gray-400 ml-5'>&copy; 2026 Digitools. All rights reserved.</p>
  </div>
  <div>
    <ol className='flex flex-inline gap-10 text-gray-400 ml-1'>
      <li>Privacy policy</li>
      <li> Terms of Service</li>
      <li> Cookies</li>
    </ol>
  </div>
</div>
</div>
</footer>
</>
  ):
  (
    <>
    <SecondPage isPremium={isPremium} setPremium={setPremium} count={count}></SecondPage>
    <div>
      <Premium handleRemove={handleRemove} cart={cart} checkOut={checkOut}></Premium>
    </div>
    </>
  )
}
    

</>
  );
}


  

  


export default App;