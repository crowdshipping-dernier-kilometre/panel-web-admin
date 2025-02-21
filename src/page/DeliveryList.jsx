import  { useEffect, useState } from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';
import axios from 'axios';
import config from "../config/config.jsx";

const DeliveryList = () => {
    const [data, setData] = useState([]);
    const columns = ['IDlivraison', 'Idcolis', 'Statut', 'Adresse de destination', 'ListeItinéraire', 'Date de livraison'];

    useEffect(() => {
        // Fetch data from the API
        axios.get(config.apiBaseUrl+'/delivery')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <Layout>
            <h3 className="text-dark mb-4">Liste des livraisons </h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Liste des livraisons </p>
                </div>
                <div className="card-body">
                    <DataTable
                        data={data}
                        columns={columns}
                        renderCell={(column, row) => {

                            return row[column];
                        }}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default DeliveryList;