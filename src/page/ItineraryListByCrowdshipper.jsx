import React, { useEffect } from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';
import axios from 'axios';
import config from "../config/config.jsx";
import { useParams } from 'react-router-dom';

/**
 * ItineraryListByCrowdshipper component for displaying a list of itineraries for a specific crowdshipper.
 */
const ItineraryListByCrowdshipper = () => {
    const { id } = useParams(); // Get the crowdshipper ID from the URL parameters
    const [crowdshipper, setCrowdshipper] = React.useState(null);
    const [itineraries, setItineraries] = React.useState([]);

    // Columns to be displayed in the DataTable
    const columns = ['adresseDepart', 'adresseArrive', 'status', 'prix', 'distance'];

    useEffect(() => {
        // Fetch crowdshipper details and itineraries from the API
        axios.get(`${config.apiBaseUrl}/crowdshippers/${id}`)
            .then(response => {
                setCrowdshipper(response.data);
                const itineraries = Array.isArray(response.data.currentItinerary) ? response.data.currentItinerary : [response.data.currentItinerary];
                const formattedData = itineraries.map(item => ({
                    adresseDepart: item.adresseDepart,
                    adresseArrive: item.adresseArrive,
                    status: item.status,
                    prix: item.prix,
                    distance: item.distance
                }));
                setItineraries(formattedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    return (
        <Layout>
            <h3 className="text-dark mb-4">Itinéraires du Crowdshipper</h3>
            {crowdshipper && (
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">Détails du Crowdshipper</p>
                    </div>
                    <div className="card-body">
                        <p><strong>Nom:</strong> {crowdshipper.lastName}</p>
                        <p><strong>Prénom:</strong> {crowdshipper.firstName}</p>
                        <p><strong>Email:</strong> {crowdshipper.email}</p>
                        <p><strong>Adresse:</strong> {crowdshipper.address}</p>
                    </div>
                </div>
            )}
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Liste des itinéraires</p>
                </div>
                <div className="card-body">
                    <DataTable data={itineraries} columns={columns} />
                </div>
            </div>
        </Layout>
    );
};

export default ItineraryListByCrowdshipper;