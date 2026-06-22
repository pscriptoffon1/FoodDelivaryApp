import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcomescreen from './screens/welcomescreen'
import Onboarding from './screens/onboarding'
import Onboarding2 from './screens/onboarding2'
import Onboarding3 from './screens/onboarding3'
import Login from './screens/login'
import Signup from './screens/signup'
import Setpassword from './screens/setpassword'
import Fingerprint from './screens/fingerprint'
import Home from './screens/home'
import Orders from './screens/orders'
import Completed from './screens/completed'
import Cancel from './screens/cancel'
import Review from './screens/review'
import Profile from './screens/profile'
import Addres from "./screens/addres";
import Newaddress from "./screens/newaddress";
import Pay from "./screens/pay";
import Addcard from "./screens/addcard";
import Contactus from "./screens/contactus";
import Faq from "./screens/faq";
import Settings from "./screens/settings";
import Settings2 from "./screens/settings2";
import Password from "./screens/password";
import Checkout from "./screens/checkout";
import Payment from "./screens/payment";
import Delivery from "./screens/delivery";
import Menu1 from "./screens/menu1";
import Favorites from "./screens/favorites";
import Filter from "./screens/filter";
import Support from "./screens/support";





import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcomescreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/onboarding3" element={<Onboarding3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/setpassword" element={<Setpassword />} />
          <Route path="/fingerprint" element={<Fingerprint />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/review" element={<Review />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addres" element={<Addres />} />
          <Route path="/newaddress" element={<Newaddress />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/addcard" element={<Addcard />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/settings2" element={<Settings2 />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/password" element={<Password />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/menu1" element={<Menu1 />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/support" element={<Support />} />




        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
