import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';
import axios from 'axios';
import config from "../config/config.jsx";
import { useParams } from 'react-router-dom';

const TruckDeliveries = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const columns = ['ID Livraison', 'Date', 'Volume', 'Distance'];

    useEffect(() => {
        axios.get(`${config.apiBaseUrl}/trucks/${id}/deliveries`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des livraisons:', error);
            });
    }, [id]);

    return (
        <Layout>
            <h3 className="text-dark mb-4">Livraisons du Camion {id}</h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Liste des livraisons</p>
                </div>
                <div className="card-body">
                    <DataTable data={data} columns={columns} />
                </div>
            </div>
        </Layout>
    );
};

export default TruckDeliveries;