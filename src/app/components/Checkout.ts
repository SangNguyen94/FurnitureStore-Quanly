import React, { useEffect, useReducer, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { RouteComponentProps } from 'react-router-dom';
import { RootStoreContext } from '../stores/rootStore';

// const fetchCheckoutSession = async ( quantity:number ) => {
//   return fetch('http://localhost:14640/FurnitureStore/rest/payment/create-checkout-session', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       quantity,
//     }),
//   }).then((res) => res.json());
// };

// const formatPrice = (amount:number,currency:string, quantity:number) => {
//   const numberFormat = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency,
//     currencyDisplay: 'symbol',
//   });
//   const parts = numberFormat.formatToParts(amount);
//   let zeroDecimalCurrency = true;
//   for (let part of parts) {
//     if (part.type === 'decimal') {
//       zeroDecimalCurrency = false;
//     }
//   }
//   amount = zeroDecimalCurrency ? amount : amount / 100;
//   const total = (quantity * amount).toFixed(2);
//   return total;
// };

// function reducer(state:any, action:any) {
//   switch (action.type) {
//     case 'useEffectUpdate':
//       return {
//         ...state,
//         ...action.payload,
//         price: formatPrice(
//            action.payload.unitAmount,
//           action.payload.currency,
//           state.quantity,
//         ),
//       };
//     case 'increment':
//       return {
//         ...state,
//         quantity: state.quantity + 1,
//         price: formatPrice(
//            state.unitAmount,
//            state.currency,
//            state.quantity + 1,
//         ),
//       };
//     case 'decrement':
//       return {
//         ...state,
//         quantity: state.quantity - 1,
//         price: formatPrice(
//            state.unitAmount,
//           state.currency,
//           state.quantity - 1,
//         ),
//       };
//     case 'setLoading':
//       return { ...state, loading: action.payload.loading };
//     case 'setError':
//       return { ...state, error: action.payload.error };
//     default:
//       throw new Error();
//   }
// }

// interface DetailParams {
//   id: string;
// }

// const Checkout :React.FC<RouteComponentProps<DetailParams>> = ({ match, history }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     quantity: 1,
//     price: null,
//     loading: false,
//     error: null,
//     stripe: null,
//   });
//   const rootStore = useContext(RootStoreContext);
//   const { cartCount, loadCart, getCart, cartRegistry, selectedCart, currentCart, totalPrice } = rootStore.cartStore;
//   const { loadOrder, currentOrder, editOrder,totalMoney,totalPriceCurrentOrder,loadOrders } = rootStore.orderStore;

//   useEffect(() => {
//     async function fetchConfig() {
//       // Fetch config from our backend.
//       const { publicKey, unitAmount, currency } = await fetch(
//         'http://localhost:14640/FurnitureStore/rest/payment/config'
//       ).then((res) => res.json());
//       // Make sure to call `loadStripe` outside of a component’s render to avoid
//       // recreating the `Stripe` object on every render.
//       dispatch({
//         type: 'useEffectUpdate',
//         payload: { unitAmount, currency, stripe: await loadStripe(publicKey) },
//       });
//     }
//     fetchConfig();
//   }, []);

//   const handleClick = async (_event: any) => {
//     // Call your backend to create the Checkout session.
//     dispatch({ type: 'setLoading', payload: { loading: true } });
//     const { sessionId } = await fetchCheckoutSession(
//       1
//     );
//     // When the customer clicks on the button, redirect them to Checkout.
//     const { error } = await state.stripe.redirectToCheckout({
//       sessionId,
//     });
//     // If `redirectToCheckout` fails due to a browser or network
//     // error, display the localized error message to your customer
//     // using `error.message`.
//     if (error) {
//       dispatch({ type: 'setError', payload: { error } });
//       dispatch({ type: 'setLoading', payload: { loading: false } });
//     }
//   };

//   return (
//     <div className="sr-root">
//       <div className="sr-main">
//         <header className="sr-header">
//           <div className="sr-header__logo"></div>
//         </header>
//         <section className="container">
//           <div>
//             <h1>Single photo</h1>
//             <h4>Purchase a Pasha original photo</h4>
//             <div className="pasha-image">
//               <img
//                 alt="Random asset from Picsum"
//                 src="https://picsum.photos/280/320?random=4"
//                 width="140"
//                 height="160"
//               />
//             </div>
//           </div>
//           <div className="quantity-setter">
//             <button
//               className="increment-btn"
//               disabled={state.quantity === 1}
//               onClick={() => dispatch({ type: 'decrement' })}
//             >
//               -
//             </button>
//             <input
//               type="number"
//               id="quantity-input"
//               min="1"
//               max="10"
//               value={state.quantity}
//               readOnly
//             />
//             <button
//               className="increment-btn"
//               disabled={state.quantity === 10}
//               onClick={() => dispatch({ type: 'increment' })}
//             >
//               +
//             </button>
//           </div>
//           <p className="sr-legal-text">Number of copies (max 10)</p>

//           <button
//             role="link"
//             onClick={handleClick}
//             disabled={!state.stripe || state.loading}
//           >
//             {state.loading || !state.price
//               ? `Loading...`
//               : `Buy for ${state.price}`}
//           </button>
//           <div className="sr-field-error">{state.error?.message}</div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
