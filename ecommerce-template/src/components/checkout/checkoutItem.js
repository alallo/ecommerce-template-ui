import basketStoreService from '../../services/basketStoreService'
import React, { useEffect, useState } from "react";

function CheckoutItem(props) {

    const checkoutItem = props.checkoutItem;
    const [basketState, setBasketState] = useState(basketStoreService.initialState);
    useEffect(() => {
        basketStoreService.subscribe(setBasketState);
        basketStoreService.init();
      }, [])

    function onRemoveItemButtonClick(itemId, event) {
        event.preventDefault();
        basketStoreService.removeItemFromBasket(itemId);
    };

    return (
        <div className="flex justify-between mt-6">
            <div className="flex">
                <img className="h-40 w-1/2 object-cover rounded" src={checkoutItem.product.image} alt=""/>
                <div className="mx-3">
                    <h3 className="text-sm text-gray-600">{checkoutItem.product.name}</h3>
                    <h3 className="text-sm text-gray-600"><b>£{checkoutItem.product.price}</b></h3>
                    <div className="flex items-center mt-2">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </button>
                            <span className="text-gray-700 mx-2">{checkoutItem.quantity}</span>
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </button>
                    </div>
                    <div className="flex items-center mt-2">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={(event) => onRemoveItemButtonClick(checkoutItem.product.id, event)}>
                            <span>Remove Item</span>
                        </button>  
                    </div>
                </div>
            </div>
            <span className="text-gray-600">£{checkoutItem.product.price * checkoutItem.quantity}</span>
       </div>
    );
  }
  
  export default CheckoutItem;
  

