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
import RelayPointList from "./page/RelayPointList.jsx";
import Dashboard from "./page/Dashboard.jsx";
import SimulationPage from "./page/SimulationPage.jsx";
import UserDetails from "./page/UserDetails.jsx";
import { AuthProvider } from './components/AuthContext';
//import PrivateRoute from "./components/PrivateRoute.jsx";
import AddRelayPoint from "./page/AddRelayPoint.jsx";
import ItineraryListByCrowdshipper from "./page/ItineraryListByCrowdshipper.jsx";
import AddClient from "./page/AddClient.jsx";
import UpdateCrowdshipper from "./page/UpdateCrowdshipper.jsx";
import AddTruck from './page/AddTruck.jsx';
import TrucksList from './page/TrucksList.jsx';
import TruckDeliveries from './page/TruckDeliveries.jsx';

// Version test site

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/ClientList" element={<ClientList />} />
                    <Route path="/CrowdshipperList" element={<CrowdshipperList />} />
                    <Route path="/DeliveryList" element={<DeliveryList />} />
                    <Route path="/RelayPointList" element={<RelayPointList />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                    <Route path="/SimulationPage" element={<SimulationPage />} />
                    <Route path="/UserDetails" element={<UserDetails />} />
                    <Route path="/AddRelayPoint" element={<AddRelayPoint />} />
                    <Route path="/ItineraryListByCrowdshipper/:id" element={<ItineraryListByCrowdshipper />} />
                    <Route path="/AddClient" element={<AddClient />} />
                    <Route path="/UpdateCrowdshipper/:id" element={<UpdateCrowdshipper />} />
                    <Route path="/AddTruck" element={<AddTruck />} />
                    <Route path="/TrucksList" element={<TrucksList />} />
                    <Route path="/TruckDeliveries/:id" element={<TruckDeliveries />} />

                </Routes>
            </Router>
        </AuthProvider>
    </StrictMode>,
);

/*
// version Authentiication reel
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/ClientList" element={<PrivateRoute component={ClientList} />} />
                    <Route path="/CrowdshipperList" element={<PrivateRoute component={CrowdshipperList} />} />
                    <Route path="/DeliveryList" element={<PrivateRoute component={DeliveryList} />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/RelayPointList" element={<PrivateRoute component={RelayPointList} />} />
                    <Route path="/Dashboard" element={<PrivateRoute component={Dashboard} />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                    <Route path="/SimulationPage" element={<PrivateRoute component={SimulationPage} />} />
                    <Route path="/UserDetails" element={<PrivateRoute component={UserDetails} />} />
                </Routes>
            </Router>
        </AuthProvider>
    </StrictMode>,
); */