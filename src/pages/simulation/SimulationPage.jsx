import { motion } from "framer-motion";

import Header from "../../components/common/Header";

const SimulationPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Simulation Anylogic" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* SIMULATION */}

        <iframe
          style={{ minWidth: "100vh", minHeight: "100vh" }}
          // width="70%"
          // height="70%"
          allow="fullscreen"
          src="https://cloud.anylogic.com/assets/embed?modelId=d23f7dee-3264-4608-acb4-8a87ce8b9a83"
          title="Simulation Anylogic"
        ></iframe>
      </main>
    </div>
  );
};
export default SimulationPage;
