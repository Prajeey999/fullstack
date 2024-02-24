import PropTypes from 'prop-types';
// import Header from '../user/header';
// import Footer from '../user/footer';
import "../../assets/css/AdminLayout.css"


const AdminLayout = ({children}) =>{
    return (
        <div className="user_container">
            <header>
                {/* <Header/> */}
            </header>
            <main>
                {children}
            </main>
            <footer>
                {/* <Footer/> */}
            </footer>
        </div>
    )
}

AdminLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default AdminLayout