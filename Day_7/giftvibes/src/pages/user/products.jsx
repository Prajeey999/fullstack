import '../../assets/css/products.css'
import Logo from '../../assets/images/3d-render-gift-box-with-ribbon-present-package-removebg.png'
const Products = () => {
  return (
<>
  <div className='theproductholder'>
  <div className="product_card">
   <img src={Logo} alt="giftvibes logo" style={{height:'300px',width:'250px',paddingTop:'50px'}} />
    <h2 className="card__title" style={{color:'pink'}}>Gift_1</h2>
    <h3>Price:299$</h3>
    <div className="card__content">
     
    </div>
    <a href="#" className="card__link">
      Buy Now
    </a>
  </div>
  <div className="product_card">
   <img src={Logo} alt="giftvibes logo" style={{height:'300px',width:'250px',paddingTop:'50px'}} />
    <h2 className="card__title" style={{color:'pink'}}>Gift_2</h2>
    <h3>Price:299$</h3>
    <div className="card__content">
     
    </div>
    <a href="#" className="card__link">
      Buy Now
    </a>
  </div>
  <div className="product_card">
   <img src={Logo} alt="giftvibes logo" style={{height:'300px',width:'250px',paddingTop:'50px'}} />
    <h2 className="card__title" style={{color:'pink'}}>Gift_3</h2>
    <h3>Price:299$</h3>
    <div className="card__content">
    
    </div>
    <a href="#" className="card__link">
      Buy Now
    </a>
  </div>
  <div className="product_card">
   <img src={Logo} alt="giftvibes logo" style={{height:'300px',width:'250px',paddingTop:'50px'}} />
    <h2 className="card__title" style={{color:'pink'}}>Gift_4</h2>
    <h3>Price:299$</h3>
    <div className="card__content">
     
    </div>
    <a href="#" className="card__link">
      Buy Now
    </a>
  </div>
  </div>
</>


  )
}

export default Products;
