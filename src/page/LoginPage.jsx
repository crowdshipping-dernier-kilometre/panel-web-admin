import  { useState } from 'react';
import '../bootstrap/assets/bootstrap/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import axios from 'axios';
import config from '../config/config';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const { username, password } = credentials;

        try {
            const response = await axios.post(config.apiBaseUrl + '/login', {
                username,
                password,
            });
            login(response.data.token);
            navigate('/Dashboard');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="bg-gradient-primary d-flex align-items-center justify-content-center"
             style={{ minHeight: '100vh', minWidth: '100vw' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10">
                        <div className="card shadow-lg o-hidden border-0">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex">
                                        <div
                                            className="flex-grow-1 bg-login-image"
                                            style={{
                                                backgroundImage: 'url("../src/bootstrap/assets/img/dogs/image2.jpeg")',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        ></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Bienvenue !</h4>
                                            </div>
                                            <form className="user" onSubmit={handleLogin}>
                                                <div className="mb-3">
                                                    <input
                                                        className="form-control form-control-user"
                                                        type="email"
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        name="username"
                                                        placeholder="Nom d'utilisateur"
                                                        value={credentials.username}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <input
                                                        className="form-control form-control-user"
                                                        type="password"
                                                        id="exampleInputPassword"
                                                        placeholder="Mot de passe"
                                                        name="password"
                                                        value={credentials.password}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <button
                                                    className="btn btn-primary d-block btn-user w-100"
                                                    type="submit"
                                                >
                                                    Se connecter
                                                </button>
                                            </form>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;