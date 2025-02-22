import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from "../config/config.jsx";
import { useNavigate, useParams } from 'react-router-dom';

const MajCrowdshipper = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        maxDistance: '',
        maxVolume: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${config.apiBaseUrl}/crowdshippers/${id}`)
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${config.apiBaseUrl}/crowdshippers/${id}`, formData)
            .then(response => {
                console.log('Crowdshipper updated successfully:', response.data);
                navigate('/CrowdshipperList');
            })
            .catch(error => {
                console.error('Error updating crowdshipper:', error);
            });
    };

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Modifier Crowdshipper</h3>
            <div className="row mb-3">
                <div className="col-lg-8">
                    <div className="card shadow mb-3">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold">Informations</p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="lastName"><strong>Nom</strong></label>
                                    <input className="form-control" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="firstName"><strong>Prénom</strong></label>
                                    <input className="form-control" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email"><strong>Email</strong></label>
                                    <input className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="maxDistance"><strong>Distance Max</strong></label>
                                    <input className="form-control" type="number" id="maxDistance" name="maxDistance" value={formData.maxDistance} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="maxVolume"><strong>Volume Max</strong></label>
                                    <input className="form-control" type="number" id="maxVolume" name="maxVolume" value={formData.maxVolume} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary btn-sm" type="submit">Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MajCrowdshipper;