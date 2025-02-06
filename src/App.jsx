import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/ClientList">ClientList</Link>
                    </li>
                    <li>
                        <Link to="/CrowdshipperList">CrowdshipperList</Link>
                    </li>
                    <li>
                        <Link to="/DeliveryList">DeliveryList</Link>
                    </li>
                    <li>
                        <Link to="/Rgister">Register</Link>
                    </li>
                    <li>
                        <Link to="/DeliveryList">DeliveryList</Link>
                    </li>
                    <li>
                        <Link to="/PointRelaisList">PointRelaisList</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default App;