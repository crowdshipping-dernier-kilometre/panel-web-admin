import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import CrowdshipperList from './page/CrowdshipperList';
import DeliveryList from './page/DeliveryList';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import SimulationPage from './page/SimulationPage';
import UserDetails from './page/UserDetails';
import AddRelayPoint from './page/AddRelayPoint';
import RelayPointList from './page/RelayPointList';
import Dashboard from './page/Dashboard';
import ClientList from './page/ClientList';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/CrowdshipperList" element={<PrivateRoute component={CrowdshipperList} />} />
                    <Route path="/DeliveryList" element={<PrivateRoute component={DeliveryList} />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                    <Route path="/SimulationPage" element={<PrivateRoute component={SimulationPage} />} />
                    <Route path="/UserDetails" element={<PrivateRoute component={UserDetails} />} />
                    <Route path="/AddRelayPoint" element={<PrivateRoute component={AddRelayPoint} />} />
                    <Route path="/RelayPointList" element={<PrivateRoute component={RelayPointList} />} />
                    <Route path="/Dashboard" element={<PrivateRoute component={Dashboard} />} />
                    <Route path="/ClientList" element={<PrivateRoute component={ClientList} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;