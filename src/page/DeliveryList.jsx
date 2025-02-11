import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';
import axios from 'axios';

const DeliveryList = () => {
    const [data, setData] = useState([]);
    const columns = ['IDlivraison', 'Idcolis', 'Statut', 'Adresse de destination', 'ListeItinéraire', 'Date de livraison', 'Valider', 'Date de validation'];

    useEffect(() => {
        // Fetch data from the API
        axios.get('https://newapi.example.com/delivery')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleValidate = (id) => {
        axios.post(`https://newapi.example.com/delivery/${id}/validate`)
            .then(response => {
                // Update the data to reflect the validation
                setData(data.map(delivery =>
                    delivery.IDlivraison === id ? { ...delivery, Valider: true, DateDeValidation: new Date().toISOString().split('T')[0] } : delivery
                ));
            })
            .catch(error => {
                console.error('Error validating delivery:', error);
            });
    };

    return (
        <Layout>
            <h3 className="text-dark mb-4">Livraison à valider</h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Liste des livraisons à valider</p>
                </div>
                <div className="card-body">
                    <DataTable
                        data={data}
                        columns={columns}
                        renderCell={(column, row) => {
                            if (column === 'Valider') {
                                return (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleValidate(row.IDlivraison)}
                                        disabled={row.Valider}
                                    >
                                        {row.Valider ? 'Validé' : 'Valider'}
                                    </button>
                                );
                            }
                            return row[column];
                        }}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default DeliveryList;