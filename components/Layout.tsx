import NavBar from './NavBar';
import Footer from './Footer';
import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren< {
    children?: React.ReactNode;
  }>;

const Layout: React.FC = ({ children }: LayoutProps) => {
    return (
        <div>
            <NavBar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout;