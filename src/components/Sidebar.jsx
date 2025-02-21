import 'react';

const Sidebar = () => {
    return (
        <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark"  style={{  minWidth: '14vw' }} >
            <div className="container-fluid d-flex flex-column p-0">
                <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
                    <div className="sidebar-brand-text mx-3"><span>Menus</span></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><a className="nav-link" href="/Dashboard"><span>Panneau de contrôle</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/SimulationPage"><span>Simulation</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/CrowdshipperList"><span>Crowdshippers</span></a></li>
                    <li className="nav-item"><a className="nav-link " href="/ClientList"><span>Clients</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/RelayPointList"><span>Point relais</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/DeliveryList"><span>Liste des livraisons</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/Login"><span>Déconnexion</span></a></li>
                </ul>

            </div>
        </nav>
    );
};

export default Sidebar;