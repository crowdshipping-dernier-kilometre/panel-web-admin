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
                        <Link to="/ClientList">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default App;