import {
  Ban,
  Delete,
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
import { Add, DeleteForever } from "@mui/icons-material";
import CrowdshippersTable from "../../components/crowdshippers/CrowdshippersTable";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CrowdshippersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Crowdshippers" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <CrowdshipperStats />

        <div className="flex justify-end mb-4 space-x-4">
          <Link to="/nouveau-crowdshipper">
            <Button
              variant="text"
              startIcon={<Add />}
              disabled
            >
              Créer une nouvelle
            </Button>
          </Link>
        </div>

        <CrowdshippersTable />

        <ToastContainer />
      </main>
    </div>
  );
};
export default CrowdshippersPage;

export const CrowdshipperStats = ({ title }) => {
  const [crowdshipperStats, setCrowdshipperStats] = useState({
    total: "...",
    lastSevenDays: "...",
  });
  const { crowdshipperService } = useContext(AppContext);

  const getCrowdshipperStats = async () => {
    // const response = await crowdshipperService.getCrowdshipperStats();
    // if (response.error) {
    //   console.error(response.message);
    //   dispatchToast("error", response.message);
    // } else {
    //   setCrowdshipperStats(response.data);
    // }

    setCrowdshipperStats({
      total: "4",
      lastSevenDays: "0",
    });
  };

  useEffect(() => {
    getCrowdshipperStats();
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
          name="Total Crowdshippers"
          icon={UsersIcon}
          value={crowdshipperStats.total}
          color="#6366F1"
        />
        <StatCard
          name="Les 7 derniers jours"
          icon={User}
          value={crowdshipperStats.lastSevenDays}
          color="#10B981"
        />
        {/*<StatCard
          name="Utilisateurs Bannis"
          icon={Ban}
          value={crowdshipperStats.banned}
          color="#EF4444"
        />
        <StatCard
          name="Utilisateurs Supprimés"
          icon={DeleteForever}
          value={crowdshipperStats.deleted}
          color="#EF4444"
        /> */}
      </motion.div>
    </>
  );
};
