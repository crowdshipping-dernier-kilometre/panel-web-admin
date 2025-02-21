import React, { useEffect } from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';
import axios from 'axios';
import config from "../config/config.jsx";

/**
 * CrowdshipperList component for displaying a list of crowdshippers.
 */
const CrowdshipperList = () => {
    // State to manage the data fetched from the API
    const [data, setData] = React.useState([]);

    // Columns to be displayed in the DataTable
    const columns = ['Nom', 'Prenom', 'Mail', 'DistanceMax', 'VolumeMax', 'DateInscription', 'Historique des Livraisons'];

    useEffect(() => {
        // Fetch data from the API
        axios.get(config.apiBaseUrl + '/crowdshippers')
            .then(response => {
                // Map the API response to the format expected by the DataTable component
                const formattedData = response.data.map(item => ({
                    Nom: item.lastName,
                    Prenom: item.firstName,
                    Mail: item.email,
                    DistanceMax: item.maxDistance,
                    VolumeMax: item.maxVolume,
                    DateInscription: item.dtCreateAccount,
                    'Historique des Livraisons': item.currentItinerary
                }));
                setData(formattedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Layout>
            <h3 className="text-dark mb-4">Crowdshippers</h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Liste des crowdshippeurs de l'application</p>
                </div>
                <div className="card-body">
                    <DataTable data={data} columns={columns} />
                </div>
            </div>
        </Layout>
    );
};

export default CrowdshipperList;