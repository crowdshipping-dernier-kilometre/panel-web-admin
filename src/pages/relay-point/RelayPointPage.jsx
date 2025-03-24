import {
  Ban,
  MessageCircleCode,
  MessageSquareDashed,
  RefreshCcwDot,
  User,
  UserCheck,
  UserPlus,
  UsersIcon,
  UserX,
} from "lucide-react";
import { motion } from "framer-motion";

import Header from "../../components/common/Header";
import StatCard from "../../components/common/StatCard";
import { dispatchToast } from "../../utils/helper";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/context/AppContext";
import { ToastContainer } from "react-toastify";
import RelayPointsTable from "../../components/relay-point/RelayPointsTable";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

const RelayPointsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Points Relais" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <RelayPointStats />

        <div className="flex justify-end mb-4 space-x-4">
          <Link to="/nouveau-point-relais">
            <Button
              variant="text"
              startIcon={<Add />}
              disabled
            >
              Créer un nouveau
            </Button>
          </Link>
        </div>

        <RelayPointsTable />

        <ToastContainer />
      </main>
    </div>
  );
};
export default RelayPointsPage;

export const RelayPointStats = ({ title }) => {
  const [relayPoints, setRelayPointStats] = useState({
    total: "...",
    lastSevenDays: "...",
  });
  const { postService } = useContext(AppContext);

  const getRelayPointStats = async () => {
    // const response = await postService.getRelayPointStats();
    // if (response.error) {
    //   console.error(response.message);
    //   dispatchToast("error", response.message);
    // } else {
    //   setRelayPointStats(response.data);
    // }

    setRelayPointStats({
      total: "0",
      lastSevenDays: "0",
    });
  };

  useEffect(() => {
    getRelayPointStats();
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
          name="Total Points Relais"
          icon={RefreshCcwDot}
          value={relayPoints.total}
          color="#6366F1"
        />

        <StatCard
          name="Les 7 derniers jours"
          icon={RefreshCcwDot}
          value={relayPoints.lastSevenDays}
          color="#22C55E"
        />

        {/* <StatCard
          name="Posts Invisibles (modérés)"
          icon={RefreshCcwDot}
          value={relayPoints.invisible}
          color="#EF4444"
        /> */}
      </motion.div>
    </>
  );
};
