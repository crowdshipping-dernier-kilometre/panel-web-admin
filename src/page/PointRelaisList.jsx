import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';
import axios from 'axios';

const PointRelaisList = () => {
    const [data, setData] = useState([]);
    const columns = ['Nom', 'Horaire', 'VolumeMax', 'Prix/Volume', 'Start date', 'Adresse'];

    useEffect(() => {
        // Fetch data from the API
        axios.get('https://newapi.example.com/point-relais')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Layout>
            <h3 className="text-dark mb-4">Point Relais</h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Liste des points relais de l'application</p>
                </div>
                <div className="card-body">
                    <DataTable data={data} columns={columns} />
                </div>
            </div>
        </Layout>
    );
};

export default PointRelaisList;