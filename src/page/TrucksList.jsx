import  { useEffect, useState } from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';
import axios from 'axios';
import config from "../config/config.jsx";
import { Link } from 'react-router-dom';

const TrucksList = () => {
    const [data, setData] = useState([]);
    const columns = ['ID', 'Volume Max', 'Distance Max', 'Livraisons Associées'];

    useEffect(() => {
        axios.get(config.apiBaseUrl + '/trucks')
            .then(response => {
                const formattedData = response.data.map(item => ({
                    ID: item.id,
                    'Volume Max': item.maxVolume,
                    'Distance Max': item.maxDistance,
                    'Livraisons Associees': (
                        <Link to={`/TruckDeliveries/${item.id}`}>
                            Voir les livraisons
                        </Link>
                    )
                }));
                setData(formattedData);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }, []);

    return (
        <Layout>
            <h3 className="text-dark mb-4">Camions</h3>
            <a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="/src/page/AddTruck">
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Ajouter un nouveau camion
            </a>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Liste des camions</p>
                </div>
                <div className="card-body">
                    <DataTable data={data} columns={columns} />
                </div>
            </div>
        </Layout>
    );
};

export default TrucksList;