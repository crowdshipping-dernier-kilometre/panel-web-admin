import  { useState } from "react";
import axios from "axios";
import config from "../config/config.jsx";

const AjoutPointRelais = () => {
    const [formData, setFormData] = useState({
        name: "",
        volumeMax: "",
        hoursPerDay: "",
        city: "",
        streetNumber: "",
        streetName: "",
        price: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const address = `${formData.city},${formData.streetNumber},${formData.streetName}`;
        const dataToSubmit = {
            ...formData,
            address
        };
        axios.post(config.apiBaseUrl + '/relaypoints', dataToSubmit)
            .then(response => {
                console.log('Data submitted successfully:', response.data);
                window.alert('Point relais ajouté avec succès');
            })
            .catch(error => {
                console.error('Error submitting data:', error);
                window.alert('Erreur lors de l\'ajout du point relais');
            });
    };

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Ajouter un point relais</h3>
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
                                                    <label className="form-label" htmlFor="name"><strong>Nom</strong></label>
                                                    <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="volumeMax"><strong>Volume Max</strong></label>
                                                    <input className="form-control" type="number" id="volumeMax" name="volumeMax" value={formData.volumeMax} onChange={handleChange} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="hoursPerDay"><strong>Heures par jour </strong></label>
                                                    <input className="form-control" type="number" id="hoursPerDay" name="hoursPerDay" value={formData.hoursPerDay} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="price"><strong>Prix/volume</strong></label>
                                                    <input className="form-control" type="number" step="0.01" id="price" name="price" value={formData.price} onChange={handleChange} required />
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
                                                    <label className="form-label" htmlFor="streetNumber"><strong>Numéro de rue </strong></label>
                                                    <input className="form-control" type="text" id="streetNumber" name="streetNumber" value={formData.streetNumber} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="streetName"><strong>Nom de Rue </strong></label>
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

export default AjoutPointRelais;