import Logo from '../../assets/images/giftlogo.png'
// import Registerpage from './Register';
import { Link } from 'react-router-dom';
import '../../assets/css/App.css'

function Loginpage() {
  return (
    <>
    <div className="login-page">
        <div className="logo">
            <img src={Logo} alt="giftvibes logo" />
            {/* <span id="textlogo">GV</span> */}
            <span id="letters">Giftvibes</span>
        </div>
      <section className="left-side">
        <div className="content">
          <div className='content-top'>
          <h1 className="login-title">Login </h1>

        

          <p className="login-sub-title">best place to get the perfect gifts</p>
          </div>
          <div className='content-bottom'>
          <form className="login-form">
            <div className="login-form-group">
              <input className="login-form-input" type="email" placeholder="Email" required/>
            </div>

            <div className="login-form-group">
              <input className="login-form-input" type="password" placeholder="Password" pattern='.{8,' required title='8 char min'/>
            </div>

           
            <p className="login-form-group">to create new account <Link to="/giftvibes/register">Register</Link></p>

            <footer className="login-form-footer">
             
              <button className="btn-primary-outline" type="submit">Sign In</button>
            </footer>
          </form>
          </div>
        </div>
      </section>

      <section className="right-side"></section>
    </div>
    </>
  );
}

export default Loginpage;
