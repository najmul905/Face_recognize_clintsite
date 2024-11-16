import{Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import CheckOut from './CheckOut';



const stripePromise=loadStripe(import.meta.env.VITE_publishableKey)

const Payment = () => {
    
    const Price:number= 20;
    return (
       <div className='mt-28'>
        <div className='text-center my-12'>
        <h1 className='text-[30px] font-baseFont font-bold'>Premium feature</h1>
        <p className='my-5 font-baseFont'>If you want to use premium feature. You can buy our 1year package</p>
        <h3 className='font-logo text-[#996318] text-[25px] '>Only: $20</h3>
        </div>

         <div className=' bg-slate-500 p-12  mx-12 rounded'>
            <h1 className='text-white text-center my-4 text-2xl font-semibold'>Payment Now</h1>
           <Elements stripe={stripePromise}>
      <CheckOut price={Price}
      ></CheckOut>
    </Elements>
        </div>
       </div>
    );
};

export default Payment;