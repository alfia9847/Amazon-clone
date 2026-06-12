import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51TfxLv21UR2ZHuDzcbNgHEHZlGem66yxgWzAp9vo5qdJtmVi0AlipxhZ1QeOiJmA1Ik07RfEoGngEjExVI9TO5nT00X0e7PPP3"
);

function App() {
    const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("THE USER IS >>>...", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    // BEM
    <Router>
    <div className="app">
      
      <Routes>
        <Route path="/orders" element={
          <>
          <Header />
          <Orders />
          </>
        }
        />
        <Route path="/login" element={
          <>
          <Login />
          </>
        }
        />
        <Route path="/checkout" element={
          <>
          <Header />
          <Checkout />
          </>
        }
        />
        <Route path="/payment" element={
          <>
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          </>
        }
        />
        <Route path="/" element={
          <>
          <Header />
          <Home />
          </>
        }
        />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
