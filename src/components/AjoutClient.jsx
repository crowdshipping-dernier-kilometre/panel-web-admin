import React, { useState } from 'react';
import axios from 'axios';
import config from "../config/config.jsx";
import { useNavigate } from 'react-router-dom';

const AjoutClient = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        hoursPerDay: '',
        city: '',
        streetNumber: '',
        streetName: ''
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
        const address = `${formData.streetNumber} ${formData.streetName}, ${formData.city}`;
        const clientData = { ...formData, address };
        delete clientData.city;
        delete clientData.streetNumber;
        delete clientData.streetName;

        axios.post(config.apiBaseUrl + '/clients', clientData)
            .then(response => {
                console.log('Client added successfully:', response.data);
                navigate('/ClientList');
            })
            .catch(error => {
                console.error('Error adding client:', error);
            });
    };

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Ajouter un nouveau client</h3>
            <div className="row mb-3">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col">
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 fw-bold">Informations</p>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="lastName"><strong>Nom</strong></label>
                                                    <input className="form-control" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="firstName"><strong>Prénom</strong></label>
                                                    <input className="form-control" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="hoursPerDay"><strong>Horaire par jour</strong></label>
                                                    <input className="form-control" type="number" id="hoursPerDay" name="hoursPerDay" value={formData.hoursPerDay} onChange={handleChange} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="city"><strong>Ville</strong></label>
                                                    <input className="form-control" type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="streetNumber"><strong>Numéro de rue</strong></label>
                                                    <input className="form-control" type="text" id="streetNumber" name="streetNumber" value={formData.streetNumber} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="streetName"><strong>Nom de Rue</strong></label>
                                                    <input className="form-control" type="text" id="streetName" name="streetName" value={formData.streetName} onChange={handleChange} required />
                                                </div>
                                            </div>
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
            </div>
        </div>
    );
};

export default AjoutClient;