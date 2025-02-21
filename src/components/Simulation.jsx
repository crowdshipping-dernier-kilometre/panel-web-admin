import 'react';
/**
 * Component that displays the simulation with call to the AnyLogic Cloud API
 * @returns {JSX.Element} The simulation
 */
const Simulation = () => {
    return (
        <div>
            <iframe style={{ minWidth: '100vh', minHeight: '100vh' }}
                width="70%"
                height="70%"
                allow="fullscreen"
                src="https://cloud.anylogic.com/assets/embed?modelId=d23f7dee-3264-4608-acb4-8a87ce8b9a83"
            ></iframe>
        </div>
    );
};

export default Simulation;