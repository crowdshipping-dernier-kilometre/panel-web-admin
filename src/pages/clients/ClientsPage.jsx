import {
  Ban,
  LockKeyhole,
  LockOpen,
  MessagesSquare,
  User,
  UserCheck,
  UserCircle,
  UserPlus,
  UsersIcon,
  UserX,
} from "lucide-react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

import Header from "../../components/common/Header";
import StatCard from "../../components/common/StatCard";
import { dispatchToast } from "../../utils/helper";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/context/AppContext";
import { ToastContainer } from "react-toastify";
import CommunitiesTable from "../../components/clients/ClientsTable";

const ClientsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Clients" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <ClientStats />

        <div className="flex justify-end mb-4 space-x-4">
          <Link to="/nouveau-client">
            <Button
              variant="text"
              startIcon={<Add />}
            >
              Créer une nouveau
            </Button>
          </Link>
        </div>

        <CommunitiesTable />

        <ToastContainer />
      </main>
    </div>
  );
};
export default ClientsPage;

export const ClientStats = ({ title }) => {
  const [clientStats, setClientStats] = useState({
    total: "...",
    public: "...",
    private: "...",
  });
  const { clientService } = useContext(AppContext);

  const getClientStats = async () => {
    const response = await clientService.getClientStats();
    if (response.error) {
      console.error(response.message);
      dispatchToast("error", response.message);
    } else {
      setClientStats(response.data);
    }
  };

  useEffect(() => {
    getClientStats();
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
          name="Total Clients"
          icon={UserCircle}
          value={clientStats.total}
          color="#6366F1"
        />
        {/* <StatCard
          name="Publique"
          icon={LockOpen}
          value={clientStats.public}
          color="#F59E0B"
        />
        <StatCard
          name="Privée"
          icon={LockKeyhole}
          value={clientStats.private}
          color="#10B981"
        /> */}
      </motion.div>
    </>
  );
};
