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
import { mapTagForDataGrid, mapUserForDataGrid } from "../../utils/mapping";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
  },
  {
    field: "idPackage",
    headerName: "ID Colis",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "status",
    headerName: "Statut",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "itinariesList",
    headerName: "Liste des itinéraires",
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
            window.location.href = `/livraisons/${id}`;
          }}
        />,
      ];
    },
  },
];

const rows = [
  {
    id: 1,
    idPackage: "idPackage",
    status: "status",
    itinariesList: "itinariesList",
  },
  {
    id: 2,
    idPackage: "idPackage",
    status: "status",
    itinariesList: "itinariesList",
  },
  {
    id: 3,
    idPackage: "idPackage",
    status: "status",
    itinariesList: "itinariesList",
  },
];

const DeliveriesTable = () => {
  const [deliveriesData, setDeliveriesData] = useState(rows); // to uncomment during the integration
  // const [deliveriesData, setDeliveriesData] = useState(rows); //to comment during the integration

  const { deliveryService } = useContext(AppContext);

  // to uncomment during the integration

  const getAllDeliveries = async () => {
    const response = await deliveryService.getAllDeliveries();
    if (response.error) {
      console.error(response.message);
      dispatchToast("error", response.message);
    } else {
      const deliveries = response.data;
      setDeliveriesData(deliveries.map(mapTagForDataGrid));
    }
  };

  useEffect(() => {
    getAllDeliveries();
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
          rows={deliveriesData}
          columns={columns}
        />
      </div>
    </motion.div>
  );
};
export default DeliveriesTable;
