import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import CrowdshipperList from './page/CrowdshipperList';
import DeliveryList from './page/DeliveryList';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/CrowdshipperList" element={<PrivateRoute component={CrowdshipperList} />} />
                    <Route path="/DeliveryList" element={<PrivateRoute component={DeliveryList} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;