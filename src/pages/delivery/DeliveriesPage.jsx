import { motion } from "framer-motion";

import Header from "../../components/common/Header";
import StatCard from "../../components/common/StatCard";

import { Loader, Loader2, Package, Shapes, Tags } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { AppContext } from "../../services/context/AppContext";
import { useState, useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { dispatchToast } from "../../utils/helper";
import DeliveriesTable from "../../components/delivery/DeliveriesTable";

const DeliveriesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Livraisons" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <DeliveryStats />

        <div className="flex justify-end mb-4 space-x-4">
          <Link to="/nouvelle-livraison">
            <Button
              variant="text"
              startIcon={<Add />}
            >
              Créer une nouvelle
            </Button>
          </Link>
        </div>

        <DeliveriesTable />

        <ToastContainer />
      </main>
    </div>
  );
};
export default DeliveriesPage;

export const DeliveryStats = ({ title }) => {
  const [deliveryStats, setTagStats] = useState({
    totalTags: "...",
    totalClasses: "...",
  });
  const { orientationCourseService } = useContext(AppContext);

  const getDeliveryStats = async () => {
    const response = await orientationCourseService.getDeliveryStats();
    if (response.error) {
      console.error(response.message);
      dispatchToast("error", response.message);
    } else {
      setTagStats(response.data);
    }
  };

  useEffect(() => {
    getDeliveryStats();
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
          name="Total Livraisons"
          icon={Package}
          value={deliveryStats.totalTags}
          color="#6366F1"
        />
        <StatCard
          name="En cours"
          icon={Loader}
          value={deliveryStats.totalTags}
          color="#6366F1"
        />

        <StatCard
          name="Terminées"
          icon={Shapes}
          value={deliveryStats.totalClasses}
          color="#10B981"
        />
      </motion.div>
    </>
  );
};
