import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/bootstrap/assets/bootstrap/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import LoginPage from './components/LoginPage.jsx';
import ClientList from "./components/ClientList.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/ClientList" element={<ClientList />} />
            </Routes>
        </Router>
    </StrictMode>,
);