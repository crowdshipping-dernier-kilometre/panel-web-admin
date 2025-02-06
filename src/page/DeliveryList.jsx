import React from 'react';
import Layout from '../components/Layout.jsx';
import DataTable from '../components/DataTable.jsx';

const DeliveryList = () => {
    const columns = ['Nom', 'Position', 'Statut des livraisons', 'Age', 'Start date', 'Salary'];
    const data = [
        {
            Nom: 'Airi Satou',
            Position: 'Accountant',
            'Statut des livraisons': 'Tokyo',
            Age: 33,
            'Start date': '2008/11/28',
            Salary: '$162,700'
        },
        // Add more data as needed
    ];

    return (
        <Layout>
            <h3 className="text-dark mb-4">Livraison à valider</h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Liste des livraisons à valider</p>
                </div>
                <div className="card-body">
                    <DataTable data={data} columns={columns} />
                </div>
            </div>
        </Layout>
    );
};

export default DeliveryList;