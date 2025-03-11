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
import { mapTruckForDataGrid } from "../../utils/mapping";
import { ro } from "date-fns/locale";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
  },
  {
    field: "volumeMax",
    headerName: "Volume Max.",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "distanceMax",
    headerName: "Distance Max.",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  {
    field: "deliveries",
    headerName: "Livraisons",
    width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
    editable: false,
  },
  // {
  //   field: "publicationDate",
  //   headerName: "Publiée le",
  //   width: DATA_GRID_COLUMN_DEFAULT_WIDTH,
  //   editable: false,
  // },
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
            window.location.href = `/camions/${id}`;
          }}
        />,
      ];
    },
  },
];

const rows = [
  {
    id: 1,
    volumeMax: 100,
    distanceMax: 100,
    deliveries: 10,
  },
  {
    id: 2,
    volumeMax: 100,
    distanceMax: 100,
    deliveries: 10,
  },
  {
    id: 3,
    volumeMax: 100,
    distanceMax: 100,
    deliveries: 10,
  },
];

const TrucksTable = () => {
  const [trucksData, setTrucksData] = useState(rows); // to uncomment during the integration
  // const [trucksData, setTrucksData] = useState(
  //   rows.map(mapTruckForDataGrid)
  // ); //to comment during the integration

  // const { actualityService } = useContext(AppContext);

  // const getAllTrucks = async () => {
  //   const response = await actualityService.getAllTrucks();
  //   if (response.error) {
  //     console.error(response.message);
  //     dispatchToast("error", response.message);
  //   } else {
  //     const users = response.data;
  //     setTrucksData(users.map(mapTruckForDataGrid));
  //   }
  // };

  // useEffect(() => {
  //   getAllTrucks();
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
          rows={trucksData}
          columns={columns}
        />
      </div>
    </motion.div>
  );
};
export default TrucksTable;
