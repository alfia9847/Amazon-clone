import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className="home__image" src="https://images.hindustantimes.com/img/2024/07/19/original/story_-_general_1721394557829.jpg" alt="Amazon Banner" />

        <div className="home__row">

          <Product id="12321341" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Paperback"
          price={19.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71sxTeZIi6L._AC_UF1000,1000_QL80_DpWeblab_.jpg"
          />
          
          <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={299.99}
          rating={4}
          image="https://dam.delonghi.com/902x902/assets/148434.jpg"
          />

        </div>

        <div className="home__row">

          <Product id="12321347" title="Apple watch series 9 GPS + Cellular, 41mm Space Gray Aluminum Case with Black Sport Band"
          price={399.99}
          rating={5}
          image="https://iplanet.one/cdn/shop/files/Apple_Watch_Series_9_LTE_45mm_Graphite_Stainless_Steel_Midnight_Sport_Band_PDP_Image_Position-1__en-IN_ac64d209-468b-4e89-8ef3-fcbc20edb20b.jpg?v=1698866947&width=823"
          />

          <Product id="23445930" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61IxWv3ecpL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
          />

          <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/816ctt5WV5L._AC_UF1000,1000_QL80_DpWeblab_.jpg"
          />

        </div>

        <div className="home__row">

          <Product id="90829332" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_UF1000,1000_QL80_DpWeblab_.jpg"
          />

        </div>

      </div>
    </div>
  )
}

export default Home
