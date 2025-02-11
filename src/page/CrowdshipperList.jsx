import React, {useEffect} from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';
import axios from 'axios';
const CrowdshipperList = () => {
    const [data, setData] = React.useState([]);
    const columns = ['Nom', 'Prenom', 'Mail', 'DistanceMax', 'VolumeMax', 'DateInscription','Historique des Livraisons'];

    useEffect(() => {
        // Fetch data from the API
        axios.get('https://newapi.example.com/Crowdshipper')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <Layout>
            <h3 className="text-dark mb-4">Utilisateurs</h3>
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