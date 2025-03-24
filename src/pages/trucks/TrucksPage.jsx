import { motion } from "framer-motion";

import Header from "../../components/common/Header";
import StatCard from "../../components/common/StatCard";

import {
  AlertTriangle,
  DollarSign,
  Newspaper,
  Package,
  TrendingUp,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { AppContext } from "../../services/context/AppContext";
import { useState, useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import TrucksTable from "../../components/trucks/TrucksTable";

const TrucksPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Camions" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <TruckStats />

        {/* <ProductsTable /> */}

        <div className="flex justify-end mb-4 space-x-4">
          <Link to="/nouveau-camion">
            <Button
              variant="text"
              startIcon={<Add />}
            >
              Créer un nouveau
            </Button>
          </Link>
        </div>

        <TrucksTable />

        <ToastContainer />

        {/* CHARTS */}
        {/* <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
					<SalesTrendChart />
					<CategoryDistributionChart />
				</div> */}
      </main>
    </div>
  );
};
export default TrucksPage;

export const TruckStats = ({ title }) => {
  const [truckStats, setTruckStats] = useState({
    total: "...",
    publishedLastSevenDays: "...",
  });
  const { truckService } = useContext(AppContext);

  const getTruckStats = async () => {
    // const response = await truckService.getTruckStats();
    // if (response.error) {
    //   console.error(response.message);
    //   dispatchToast("error", response.message);
    // } else {
    //   setTruckStats(response.data);
    // }

    setTruckStats({
      total: "3",
      publishedLastSevenDays: "0",
    });
  };

  useEffect(() => {
    getTruckStats();
  }, []);

  return (
    <>
      {title && (
        <motion.div
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.div>
      )}

      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StatCard
          name="Total Camions"
          icon={Truck}
          value={truckStats.total}
          color="#6366F1"
        />

        <StatCard
          name="Les 7 derniers jours"
          icon={Truck}
          value={truckStats.publishedLastSevenDays}
          color="#10B981"
        />
      </motion.div>
    </>
  );
};
