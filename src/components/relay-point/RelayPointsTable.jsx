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
import { mapPostForDataGrid, mapUserForDataGrid } from "../../utils/mapping";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
  },
  {
    field: "name",
    headerName: "Nom",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "nbOpenHours",
    headerName: "Nombre d'heure ouverttue",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "volumeMax",
    headerName: "Volume Max.",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },

  {
    field: "price",
    headerName: "Prix",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "adress",
    headerName: "Visible",
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
            window.location.href = `/relayPoints/${id}`;
          }}
        />,
      ];
    },
  },
];

const rows = [
  {
    id: 1,
    name: "Relay Point 1",
    nbOpenHours: "10",
    volumeMax: "100",
    price: "100 €",
    adress: "111 rue de la paix",
  },
  {
    id: 2,
    name: "Relay Point 2",
    nbOpenHours: "10",
    volumeMax: "100",
    price: "100 €",
    adress: "111 rue de la paix",
  },
  {
    id: 3,
    name: "Relay Point 3",
    nbOpenHours: "10",
    volumeMax: "100",
    price: "100 €",
    adress: "111 rue de la paix",
  },
  {
    id: 4,
    name: "Relay Point 4",
    nbOpenHours: "10",
    volumeMax: "100",
    price: "100 €",
    adress: "111 rue de la paix",
  },
];

const RelayPointsTable = () => {
  const [relayPointsData, setRelayPointsData] = useState([]); // to uncomment during the integration
  // const [relayPointsData, setRelayPointsData] = useState(rows); //to comment during the integration

  const { relayPointService } = useContext(AppContext);

  // to uncomment during the integration

  const getAllRelayPoints = async () => {
    const response = await relayPointService.getAllRelayPoints();
    if (response.error) {
      console.error(response.message);
      dispatchToast("error", response.message);
    } else {
      const relayPoints = response.data;
      setRelayPointsData(relayPoints.map(mapPostForDataGrid));
    }
  };

  useEffect(() => {
    getAllRelayPoints();
  }, []);

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
          rows={relayPointsData}
          columns={columns}
        />
      </div>
    </motion.div>
  );
};
export default RelayPointsTable;
