import { Link } from 'react-router-dom';
import Logo from '../../assets/images/giftlogo.png'
import '../../assets/css/App.css'

function Registerpage() {
    return (
      <div className="login-page">
             <div className="logo">
            <img src={Logo} alt="giftvibes logo" />
            {/* <span id="textlogo">GV</span> */}
            <span id="letters">Giftvibes</span>
        </div>
        <section className="left-side">
          <div className="content">
            <h1 className="login-title">Register</h1>
  
          
  
            <p className="login-sub-title">best place to get the perfect gifts</p>
  
            <form className="login-form">
            <div className="login-form-group">
              <input className="login-form-input" type="text" placeholder="Name" required />
            </div>
              <div className="login-form-group">
                <input className="login-form-input" type="email" placeholder="Email" required />
              </div>
  
              <div className="login-form-group">
                <input className="login-form-input" type="password" placeholder="Password"pattern='.{8,' required title='8 char min' />
              </div>
              <p className="login-form-group">Already have an Account <Link to='/giftvibes/login'>Login</Link> </p>
  
              <footer className="login-form-footer">
               
                <button className="btn-primary-outline" type="submit">Sign In</button>
              </footer>
            </form>
          </div>
        </section>
  
        <section className="right-side"></section>
      </div>
    );
  }
  
  export default Registerpage;
  