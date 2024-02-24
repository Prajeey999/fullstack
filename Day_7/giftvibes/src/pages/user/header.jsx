
import { Link } from 'react-router-dom';
import '../../assets/css/homepage.css'
import Logo from '../../assets/images/giftlogo.png'
// import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import SearchIcon from '@mui/icons-material/Search';
export default function Header() {
  return (
 <>
<header style={{zIndex:'100'}}>
  {/* <link rel="stylesheet" href="./asd.css" /> */}
  {/* <div className="banner">Get free delivery on orders over $80</div> */}
  <nav>
    <div id="logo">
      <Link><img src={Logo} alt="giftvibes logo" /></Link>
      {/* <span>GiFTViBES</span> */}
    </div>
    <ul className="navigation-menu">
      <li>
        <a ><Link to='/giftvibes/user/products'>Products</Link></a>
        {/* <ul className="subnav">
          <li className="card-med" id="sup-dog">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/qPvaAv2gxwM3l0z7dl_eoh9v6h58HlzewBUfEgX6AZE/rs:fit:368:386/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTIv/ZmM4YjNlYmItMDNj/Ni00NGM3LTliNGUt/YTUyOWUzOGU4NTE2/LnBuZw.png" />
            </div>
            <a href="#">
              <span>Dogs</span>
              <span>
                Shop All{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </a>
          </li>
          <li className="card-med" id="sup-cat">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/US6gJ6fHUOJqruLB7KDe5zEa82iDSp7OdO-bv-aLtvU/rs:fit:368:310/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjU5/LzdmOWU1ZjU0LTMx/ZDQtNDgwNS1iM2E2/LWM3NzgyMTcyNzJh/NC5wbmc.png" />
            </div>
            <a href="#">
              <span>Cats</span>
              <span>
                Shop All{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </a>
          </li>
          <li className="card-med" id="sup-bird">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/6OkSfKKP476ZKzGJoDlXfXuWzX-vjlDRotIVMTz3lmo/rs:fit:368:396/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzA1/LzRkNmI1YjIwLTQy/YWQtNDVlMC05ZDI5/LTA0MTkyMWZkNWE1/NS5wbmc.png" />
            </div>
            <a href="#">
              <span>Birds</span>
              <span>
                Shop All{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </a>
          </li>
          <li className="card-med" id="sup-fish">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/41Pv7w9rcbn7II_gB2vwvVCQRYE5mvpca1ZbsvMujR0/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjE5/LzRlZjE1YTgyLTI3/NjYtNDlkNC1hMGE3/LWY4ZjRmNzhjM2M5/NS5wbmc.png" />
            </div>
            <a href="#">
              <span>Fish</span>
              <span>
                Shop All{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </a>
          </li>
        </ul> */}
      </li>
      <li>
        {/* <a href="#">Services</a> */}
        {/* <ul className="subnav">
          <li className="card-med" id="serv-groom">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/T11rfGmMKgcStJyAFKNgtOfE79cadabx0DVMnvzA9Pk/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQx/LzFlYWU4MWY3LWQ1/ZjYtNDM2Ny1hZjM5/LWVmNTFmMGM5Njk4/MS5wbmc.png" />
            </div>
            <a href="#">
              <span>Grooming</span>
              <span>
                More Info{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </a>
          </li>
          <li className="card-med" id="serv-board">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/F5Ea1suZtMYimKDkJr0CJLO_1bju6-bTyT1EuDKEg8s/rs:fit:368:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcx/LzVjMzE4NWM0LWZh/NTMtNGQ1OS05ZTM2/LTZjYzBhNGU3ODg0/NC5wbmc.png" />
            </div>
            <a href="#">
              <span>Boarding</span>
              <span>
                More Info
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </a>
          </li>
        </ul> */}
      </li>
      <li>
        <a><Link to='/giftvibes/user/profile'>Profile</Link></a>
      </li>
      <li>
        <a><Link to='/giftvibes/user/home'>Home</Link></a>
      </li>
      <li>
        <a><Link to='/giftvibes/user/about'>About</Link></a>
      </li>
    </ul>
    <div id="utility">
      {/* <input type="search" className='searchbar'/> */}
      {/* <span className="material-symbols-outlined"> <SearchIcon/></span> */}
      <a ><span className="material-symbols-outlined"><ShoppingCartIcon /></span></a>
      <a style={{textDecoration:'none'}}><span className="material-symbols-outlined"><Link to='/giftvibes/login' style={{textDecoration:'none'}}>LOGOUT</Link></span></a>
    </div>
  </nav>
</header>

 </>
  );
}