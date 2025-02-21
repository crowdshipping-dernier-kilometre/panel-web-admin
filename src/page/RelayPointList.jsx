import  { useEffect, useState } from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';
import axios from 'axios';
import config from "../config/config.jsx";

const RelayPointList = () => {
    const [data, setData] = useState([]);
    const columns = ['Nom', 'nbHeureOuverture', 'VolumeMax', 'Prix', 'Adresse', 'Actions'];

    const fetchData = () => {
        axios.get(config.apiBaseUrl + '/relaypoints')
            .then(response => {
                const formattedData = response.data.map(item => ({
                    id: item.id,
                    Nom: item.name,
                    Adresse: item.address,
                    nbHeureOuverture: item.hoursPerDay,
                    VolumeMax: item.volumeMax,
                    Prix: item.price,
                    Actions: (
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
                            Delete
                        </button>
                    )
                }));
                setData(formattedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('êtes-vous sur de vouloir supprimer ce point relais?')) {
            axios.delete(`${config.apiBaseUrl}/relaypoints/${id}`)
                .then(response => {
                    console.log('Data deleted successfully:', response.data);
                    fetchData();
                })
                .catch(error => {
                    console.error('Error deleting data:', error);
                });
        }
    };

    return (
        <Layout>
            <h3 className="text-dark mb-4">Point Relais</h3>
            <a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="/AddRelayPoint">
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Ajouter un point relais
            </a>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Liste des points relais </p>
                </div>
                <div className="card-body">
                    <DataTable data={data} columns={columns} />
                </div>
            </div>
        </Layout>
    );
};

export default RelayPointList;