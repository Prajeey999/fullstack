import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
// import "../../assets/css/UserLayout.css"


const UserLayout = ({children}) =>{
    return (
        <div className="user_container">
            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

UserLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default UserLayout