import React from 'react';

const Simulation = () => {
    return (
        <div>
            <iframe style={{ minWidth: '100vh', minHeight: '100vh' }}
                width="80%"
                height="80%"
                allow="fullscreen"
                src="https://cloud.anylogic.com/assets/embed?modelId=d23f7dee-3264-4608-acb4-8a87ce8b9a83"
            ></iframe>
        </div>
    );
};

export default Simulation;