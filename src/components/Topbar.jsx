import React from 'react';

const Topbar = () => {
    return (
        <nav className="navbar navbar-expand bg-white shadow mb-4 topbar">
            <div className="container-fluid">
                <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
                    <i className="fas fa-bars"></i>
                </button>
                <ul className="navbar-nav flex-nowrap ms-auto">
                    <li className="nav-item dropdown no-arrow">
                        <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                            <span className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span>
                            <img
                                className="border rounded-circle img-profile"
                                src="assets/img/avatars/avatar1.jpeg"
                                alt="User Avatar"
                            />
                        </a>
                        <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i> Profile
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i> Settings
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i> Activity log
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i> Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Topbar;