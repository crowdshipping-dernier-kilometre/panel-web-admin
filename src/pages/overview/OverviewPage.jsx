import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../../components/common/Header";
import { CrowdshipperStats } from "../crowdshippers/CrowdshippersPage";
import { ClientStats } from "../clients/ClientsPage";
import { RelayPointStats } from "../relay-point/RelayPointPage";
import { DeliveryStats } from "../delivery/DeliveriesPage";
import { TruckStats } from "../trucks/TrucksPage";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Aperçu" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div
          className="flex flex-wrap justify-center mb-8"
          style={{ backgroundColor: "#fff" }}
        >
          <img
            src="/images/insa-hdf-logo.webp"
            alt="Overview"
            width={300}
          />
          <img
            src="/images/uphf-logo.webp"
            alt="Overview"
            width={300}
          />
          <img
            src="/images/milex-logo.png"
            alt="Overview"
            width={300}
          />
          <img
            src="/images/ecc-logo.png"
            alt="Overview"
            width={300}
          />
          <img
            src="/images/tec-leg-logo.png"
            alt="Overview"
            width={300}
          />
        </div>

        {/* STATS */}
        <CrowdshipperStats title={"Crowdshippers"} />

        {/* <UserStats title={"Clients"} /> */}

        <ClientStats title={"Clients"} />

        <RelayPointStats title={"Points Relais"} />

        <DeliveryStats title={"Livraisons"} />

        <TruckStats title={"Camions"} />
      </main>
    </div>
  );
};
export default OverviewPage;
