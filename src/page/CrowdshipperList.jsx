import React, { useEffect } from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';
import axios from 'axios';
import config from "../config/config.jsx";
import { Link } from 'react-router-dom';

const CrowdshipperList = () => {
    const [data, setData] = React.useState([]);
    const columns = ['Nom', 'Prenom', 'Mail', 'DistanceMax', 'VolumeMax', 'DateInscription', 'Historique des Livraisons', 'Actions'];

    useEffect(() => {
        axios.get(config.apiBaseUrl + '/crowdshippers')
            .then(response => {
                const formattedData = response.data.map(item => ({
                    Nom: item.lastName,
                    Prenom: item.firstName,
                    Mail: item.email,
                    DistanceMax: item.maxDistance,
                    VolumeMax: item.maxVolume,
                    DateInscription: item.dtCreateAccount,
                    'Historique des Livraisons': (
                        <Link to={`/ItineraryListByCrowdshipper/${item.id}`}>
                            Voir les itinéraires
                        </Link>
                    ),
                    Actions: (
                        <Link to={`/UpdateCrowdshipper/${item.id}`} className="btn btn-warning btn-sm">
                            Modifier
                        </Link>
                    )
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
                    <p className="text-primary m-0 fw-bold">Liste des crowdshippeurs </p>
                </div>
                <div className="card-body">
                    <DataTable data={data} columns={columns} />
                </div>
            </div>
        </Layout>
    );
};

export default CrowdshipperList;