import 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div id="wrapper">
            <Sidebar />
            <div className="d-flex flex-column" id="content-wrapper" style={{ minWidth: '100vh' , minHeight: '100vh' }}>
                <div id="content">
                    <Topbar />
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;