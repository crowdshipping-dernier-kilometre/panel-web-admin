import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/bootstrap/assets/bootstrap/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import LoginPage from './page/LoginPage.jsx';
import ClientList from "./page/ClientList.jsx";
import CrowdshipperList from "./page/CrowdshipperList.jsx";
import DeliveryList from "./page/DeliveryList.jsx";
import Register from "./page/Register.jsx";
import PointRelaisList from "./page/PointRelaisList.jsx";
import Dashboard from "./page/Dashboard.jsx";
import SimulationPage from "./page/SimulationPage.jsx";
import UserDetails from "./page/UserDetails.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/ClientList" element={<ClientList />} />
                <Route path="/CrowdshipperList" element={<CrowdshipperList />} />
                <Route path="/DeliveryList" element={<DeliveryList />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/PointRelaisList" element={<PointRelaisList />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path={'*'} element={<h1>404 Not Found</h1>} />
                <Route path={'/SimulationPage'} element={<SimulationPage />} />
                <Route path={'/UserDetails'} element={<UserDetails />} />



            </Routes>
        </Router>
    </StrictMode>,
);