import  {  useEffect, useState } from 'react';
import {useStripe,CardElement,useElements} from '@stripe/react-stripe-js';
type CheckOutProps = {
  price: number;
};
const CheckOut:React.FC<CheckOutProps> = ({price}) => {
    const stripe=useStripe()
    const element=useElements()
   const [clientSecret,setClientSecret]=useState('')
  

   useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('https://server-wine-nine.vercel.app/create_payment_intent', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price }) // Send price as an object
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setClientSecret(data.clientSecret); // Ensure the key matches what the server returns
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };

    createPaymentIntent();
  }, [price]);
    
    const handleSubmit=async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(!stripe||!element){
            return;
        }
        const card=element.getElement(CardElement)
        if(card===null){
            return;
        }

    const{error,paymentMethod}=await stripe.createPaymentMethod({
        type:"card",card
    })
    if(error){
        console.log("error",error)
    }
    else{
        console.log('paymentMethod',paymentMethod)
    }
    const {paymentIntent, error:cardError} = await stripe.confirmCardPayment(
     clientSecret,
     
    );
    if(cardError){
      console.log(cardError)
    }
    console.log(paymentIntent)
    
    }
    return (
       <div>
         <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Checkout</h2>
        </div>
        <form className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card-element">
                Credit or Debit Card
              </label>
              <CardElement
                id="card-element"
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div>
            <button
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                !stripe ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              type="submit"
              disabled={!stripe}
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
       </div>
    );
};

export default CheckOut;