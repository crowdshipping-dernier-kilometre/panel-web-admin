import { useState, useEffect, useContext } from "react";
import DataGridComponent from "../common/DataGridComponent";
import { GridActionsCellItem } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { PanoramaFishEye, RemoveRedEye } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { AppContext } from "../../services/context/AppContext";

import { DATA_GRID_COLUMN_DEFAULT_WIDTH } from "../../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import { dispatchToast } from "../../utils/helper";
import {
  mapCommunityForDataGrid,
  mapUserForDataGrid,
} from "../../utils/mapping";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
  },
  {
    field: "fullName",
    headerName: "Nom complet",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "adress",
    headerName: "Adresse",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "createdAt",
    headerName: "Date d'inscription",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    cellClassName: "actions",
    getActions: ({ id, row }) => {
      return [
        <GridActionsCellItem
          icon={<RemoveRedEye color="success" />}
          label="Voir"
          //showInMenu
          onClick={() => {
            console.log("id : " + id);
            console.log("row : " + JSON.stringify(row));
            window.location.href = `/communautes/${id}`;
          }}
        />,
      ];
    },
  },
];

const rows = [
  {
    id: 1,
    fullName: "John Doe",
    email: "qWYHd@example.com",
    adress: "123 rue de la paix",
    createdAt: "2022-01-01",
  },
  {
    id: 2,
    fullName: "John Doe",
    email: "qWYHd@example.com",
    adress: "123 rue de la paix",
    createdAt: "2022-01-01",
  },
  {
    id: 3,
    fullName: "John Doe",
    email: "qWYHd@example.com",
    adress: "123 rue de la paix",
    createdAt: "2022-01-01",
  },
  {
    id: 4,
    fullName: "John Doe",
    email: "qWYHd@example.com",
    adress: "123 rue de la paix",
    createdAt: "2022-01-01",
  },
];

const ClientsTable = () => {
  const [clientsData, setClientsData] = useState(rows); // to uncomment during the integration
  // const [clientsData, setClientsData] = useState(rows); //to comment during the integration

  // const { clientService } = useContext(AppContext);

  // to uncomment during the integration

  // const getAllClients = async () => {
  //   const response = await clientService.getAllClients();
  //   if (response.error) {
  //     console.error(response.message);
  //     dispatchToast("error", response.message);
  //   } else {
  //     const communities = response.data;
  //     setClientsData(communities.map(mapCommunityForDataGrid));
  //   }
  // };

  // useEffect(() => {
  //   getAllClients();
  // }, []);

  return (
    <motion.div
      // className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <ToastContainer />
      <div>
        <DataGridComponent
          rows={clientsData}
          columns={columns}
        />
      </div>
    </motion.div>
  );
};
export default ClientsTable;
