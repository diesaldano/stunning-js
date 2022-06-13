import NavBar from './NavBar';
import Footer from './Footer';
const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <NavBar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout;