import { useState } from 'react';
import axios from 'axios';
import config from '../config/config.jsx';
import bcrypt from 'bcryptjs';

/**
 * Profile component for updating user profile information.
 */
const Profile = () => {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        password: "",
        confirmPassword: ""
    });

    /**
     * Handle change in form inputs and update state.
     * @param {Object} e - Event object
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    /**
     * Handle form submission, validate passwords, hash them, and send data to the backend.
     * @param {Object} e - Event object
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{12,}$/;
        if (!passwordRegex.test(formData.password)) {
            window.alert('Le mot de passe doit comporter au moins 12 caractères, contenir au moins une lettre minuscule, une lettre majuscule et un symbole.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            window.alert('Les mots de passe ne correspondent pas.');
            return;
        }

        try {
            const hashedPassword = await bcrypt.hash(formData.password, 10);
            const hashedConfirmPassword = await bcrypt.hash(formData.confirmPassword, 10);

            const updatedFormData = {
                ...formData,
                password: hashedPassword,
                confirmPassword: hashedConfirmPassword
            };

            const response = await axios.put(config.apiBaseUrl + '/user/profile', updatedFormData);
            console.log('Profile updated successfully:', response.data);
            window.alert('Profile updated successfully');
        } catch (error) {
            console.error('Erreur lors de la mise a jour du profile:', error);
            window.alert('Erreur lors de la mise a jour du profile');
        }
    };

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Profile</h3>
            <div className="row mb-3">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col">
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 fw-bold">Modifier les informations</p>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="email"><strong>Email</strong></label>
                                                    <input className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="firstName"><strong>Prénom</strong></label>
                                                    <input className="form-control" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="lastName"><strong>Nom</strong></label>
                                                    <input className="form-control" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="address"><strong>Adresse</strong></label>
                                            <input className="form-control" type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="password"><strong>Mot de passe</strong></label>
                                                    <input className="form-control" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="confirmPassword"><strong>Confirmer mot de passe</strong></label>
                                                    <input className="form-control" type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                                                </div>
                                            </div>
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
            </div>
        </div>
    );
};

export default Profile;