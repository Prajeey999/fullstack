import React from 'react';
import '../../assets/css/homepage.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import boygift from '../../assets/images/giftboys.png'
import giftgirls from '../../assets/images/giftgirls.png'
import luxurygift from '../../assets/images/luxurygifts.png'
import kids from '../../assets/images/kids.png'


const HomePage = () => {
  return (
    <>
  <header>
    <link rel="stylesheet" href="./asd.css" />
  </header>
  <section className="hero">
    <h1>Your One-Stop Shop for All Gift Needs!</h1>
    <div className="btn-group">
      <button className="btn-filled-dark">
        <span className="material-symbols-outlined"><ShoppingCartIcon/></span>Shop All
        Products
      </button>
      {/* <button className="btn-outline-dark btn-hover-color">
        <span className="material-symbols-outlined"><CalendarMonthIcon/></span> Book a
        Service
      </button> */}
    </div>
  </section>
  <section>
    <h2>Shop by Category</h2>
    <ul className="shop-pets">
      <li className="card-large card-light" id="sup-dog">
        <div className="card-image">
          <img src={boygift} alt='boys' />
        </div>
        <ul>
          Gifts for Him
          <h6 className='thecarddis'>The best gift give to the guys</h6>
         
          <button className="btn-outline-light">
            Shop All
            <span className="material-symbols-outlined"><ArrowForwardIcon/></span>
          </button>
        </ul>
      </li>
      <li className="card-large card-dark" id="sup-cat">
        <div className="card-image">
        <img src={giftgirls} alt='girls' />
        </div>
        <ul>
          Gifts for Her
          <h6 className='thecarddis'>The best gift give to the girls</h6>
          <button className="btn-outline-dark">
            Shop All
            <span className="material-symbols-outlined"><ArrowForwardIcon/></span>
          </button>
        </ul>
      </li>
      <li className="card-large card-dark" id="sup-bird">
        <div className="card-image">
        <img src={luxurygift} alt='luxury' />
        </div>
        <ul>
          Luxury Gifts
          <h6 className='thecarddis'>The Gifts that Stands-out from the rest!</h6>
          <button className="btn-outline-dark">
            Shop All
            <span className="material-symbols-outlined"><ArrowForwardIcon/></span>
          </button>
        </ul>
      </li>
      <li className="card-large card-light" id="sup-fish">
        <div className="card-image">
          <img src={kids} alt='kids' />
        </div>
        <ul>
          For Kids
          <h6 className='thecarddis' >The gift for the cute ones!</h6>
          <button className="btn-outline-light">
            Shop All
            <span className="material-symbols-outlined"><ArrowForwardIcon/></span>
          </button>
        </ul>
      </li>
    </ul>
  </section>
  {/* <section>
    <h2>Our Services</h2>
    <ul className="services">
      <li className="card-large card-dark card-wide" id="serv-groom">
        <div className="card-image">
          <img src="https://ouch-cdn2.icons8.com/T11rfGmMKgcStJyAFKNgtOfE79cadabx0DVMnvzA9Pk/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQx/LzFlYWU4MWY3LWQ1/ZjYtNDM2Ny1hZjM5/LWVmNTFmMGM5Njk4/MS5wbmc.png" />
        </div>
        <ul>
          Dog Grooming
          <span className="subtitle">
            Tail-wagging transformations are our specialty.
          </span>
          <li>
            <a href="#">Coat Care</a>
            <span>$80</span>
          </li>
          <li>
            <a href="#">Nail Care</a>
            <span>$16</span>
          </li>
          <li>
            <a href="#">Doggie Deluxe Spa Day</a>
            <span>$160</span>
          </li>
          <button className="btn-filled-dark">
            <span className="material-symbols-outlined">calendar_month</span>
            Book Now
          </button>
        </ul>
      </li>
      <li className="card-large card-dark card-wide" id="serv-board">
        <div className="card-image">
          <img src="https://ouch-cdn2.icons8.com/F5Ea1suZtMYimKDkJr0CJLO_1bju6-bTyT1EuDKEg8s/rs:fit:368:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcx/LzVjMzE4NWM0LWZh/NTMtNGQ1OS05ZTM2/LTZjYzBhNGU3ODg0/NC5wbmc.png" />
        </div>
        <ul>
          Dog Boarding
          <span className="subtitle">
            Where fun and care never take a day off.
          </span>
          <li>
            <a href="#">Doggie Daycare</a>
            <span>$80</span>
          </li>
          <li>
            <a href="#">Short Term Boarding</a>
            <span>$80</span>
          </li>
          <button className="btn-filled-dark">
            <span className="material-symbols-outlined">calendar_month</span>
            Book Now
          </button>
        </ul>
      </li>
    </ul>
  </section>
  <section id="locate">
    <div>
      <h2>Location &amp; Hours</h2>
      <p>
        Our knowledgeable and friendly staff is always ready to assist you in
        making the best choices for your furry, feathered, or finned friends.
      </p>
      <div className="btn-group">
        <button className="btn-filled-dark">
          <span className="material-symbols-outlined">pin_drop</span>Find a
          Store
        </button>
        <button className="btn-outline-dark btn-hover-color">
          <span className="material-symbols-outlined">contact_support</span>{" "}
          Contact Us
        </button>
      </div>
    </div>
  </section> */}
</>

  );
};

export default HomePage;
