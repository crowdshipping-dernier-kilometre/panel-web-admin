import React from 'react';

const Sidebar = () => {
    return (
        <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark"  style={{  minWidth: '14vw' }} >
            <div className="container-fluid d-flex flex-column p-0">
                <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
                    <div className="sidebar-brand-text mx-3"><span>Brand</span></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><a className="nav-link" href="/Dashboard"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/SimulationPage"><i className="far fa-play-circle"></i><span>SimulationPage</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/CrowdshipperList"><i className="far fa-paper-plane"></i><span>Crowdshippers</span></a></li>
                    <li className="nav-item"><a className="nav-link " href="/ClientList"><i className="far fa-user"></i><span>Clients</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/PointRelaisList"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-shop">
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"></path>
                    </svg><span>Point relais</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/DeliveryList"><i className="fas fa-table"></i><span>Livraison à valider</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/Login"><i className="fas fa-user-circle"></i><span>Déconnexion</span></a></li>
                </ul>

            </div>
        </nav>
    );
};

export default Sidebar;