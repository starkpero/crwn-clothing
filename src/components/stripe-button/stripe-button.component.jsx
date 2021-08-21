import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe =  price * 100;
    const publishableKey = 'pk_test_51JQyUISHfWBHXs6Sje9S8FEZmlB479PwGjSMZXdvkujTRUIXv4qTTJmPMJEu1QMf9bzlrey5spcI6sqzrUuOQRqb00y8RLu76i';

    const onToken = token=>{
        console.log(token);
        alert('Payment successful');
    }

    return(
        <StripeCheckout
            label = "Pay Now"
            name = "CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;