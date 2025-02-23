import  { useState } from 'react';
import axios from 'axios';
import config from "../config/config.jsx";
import { useNavigate } from 'react-router-dom';

const AjoutCamion = () => {
    const [formData, setFormData] = useState({
        maxDistance: '',
        maxVolume: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(config.apiBaseUrl + '/trucks', formData)
            .then(response => {
                console.log('Camion ajouté avec succès:', response.data);
                navigate('/TrucksList');
            })
            .catch(error => {
                console.error('Erreur lors de l\'ajout du camion:', error);
            });
    };

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Ajouter un nouveau camion</h3>
            <div className="row mb-3">
                <div className="col-lg-8">
                    <div className="card shadow mb-3">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold">Informations</p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="maxDistance"><strong>Distance Max</strong></label>
                                    <input className="form-control" type="number" id="maxDistance" name="maxDistance" value={formData.maxDistance} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="maxVolume"><strong>Volume Max</strong></label>
                                    <input className="form-control" type="number" id="maxVolume" name="maxVolume" value={formData.maxVolume} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary btn-sm" type="submit">Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AjoutCamion;