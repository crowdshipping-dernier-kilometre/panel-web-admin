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
import { DeleteForever } from "@mui/icons-material";
import CrowdshippersTable from "../../components/crowdshippers/CrowdshippersTable";

const CrowdshippersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Crowdshippers" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <CrowdshipperStats />

        <CrowdshippersTable />

        <ToastContainer />
      </main>
    </div>
  );
};
export default CrowdshippersPage;

export const CrowdshipperStats = ({ title }) => {
  const [userStats, setCrowdshipperStats] = useState({
    total: "...",
    banned: "...",
    active: "...",
    deleted: "...",
  });
  const { crowdshipperService } = useContext(AppContext);

  const getCrowdshipperStats = async () => {
    const response = await crowdshipperService.getCrowdshipperStats();
    if (response.error) {
      console.error(response.message);
      dispatchToast("error", response.message);
    } else {
      setCrowdshipperStats(response.data);
    }
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
          value={userStats.total}
          color="#6366F1"
        />
        {/* <StatCard
          name="Utilisateurs Actifs"
          icon={User}
          value={userStats.active}
          color="#10B981"
        />
        <StatCard
          name="Utilisateurs Bannis"
          icon={Ban}
          value={userStats.banned}
          color="#EF4444"
        />
        <StatCard
          name="Utilisateurs Supprimés"
          icon={DeleteForever}
          value={userStats.deleted}
          color="#EF4444"
        /> */}
      </motion.div>
    </>
  );
};
