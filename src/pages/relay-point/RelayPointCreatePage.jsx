import React, { useState, useContext, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Header from "../../components/common/Header";
import {
  Add,
  Block,
  Delete,
  Edit,
  HideImage,
  LockOpen,
  Save,
} from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import {
  dispatchToast,
  handleFormatBoolean,
  handleFormatDateTime,
} from "../../utils/helper";
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "../../services/context/AppContext";
import { TIMEOUT_REFRESH } from "../../utils/constants";
import { Eye, EyeOff } from "lucide-react";

const RelayPointCreatePage = () => {
  const { relayPointId } = useParams();
  const navigate = useNavigate();

  const { relayPointService } = useContext(AppContext);

  // Default values
  const defaultValues = {
    name: "",
    nbOpenHours: "",
    volumeMax: "",
    price: "",
    adress: "",
  };

  // States
  const [values, setValues] = useState(defaultValues);
  const [isEditing, setIsEditing] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function for handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setIsModified(true);
  };

  // Fonction pour réinitialiser les changements
  const handleReset = () => {
    setValues(defaultValues);
    setIsModified(false);
  };

  // Fonction pour la suppression du post (exemple simple)
  const handleDelete = async () => {
    setIsLoading(true);
    const response = await relayPointService.deleteRelayPoint(relayPointId);
    setIsLoading(false);
    if (response.error) {
      console.error(response.message);
      dispatchToast("error", response.message);
      return;
    }
    handleReset();
    console.log("Suppression du point relais");
    dispatchToast("success", "Point relais supprimé");
    setTimeout(() => {
      navigate("/points-relais");
    }, TIMEOUT_REFRESH);
  };

  const getRelayPointById = async () => {};

  useEffect(() => {
    // getRelayPointById();
  }, []);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={`Nouveau Point relais`} />

      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <div className="flex justify-end mb-4 space-x-4">
          {/* {!isLoading && (
            <>
              <Link to="/nouveau-point-relais">
                <Button
                  variant="text"
                  startIcon={<Add />}
                >
                  Créer un nouveau
                </Button>
              </Link>
            </>
          )} */}
        </div>
        <div
          className="grid grid-cols-1 gap-4 p-8"
          style={{
            backgroundColor: "#18212F",
            borderRadius: "16px",
          }}
        >
          {values.image && (
            <div className="flex items-center justify-center mb-6">
              {/* preview image base64 */}

              <img
                src={`data:image/png;base64,${values.image}`}
                alt={values.title}
                className="w-full h-full object-cover"
                style={{ borderRadius: "16px" }}
              />
            </div>
          )}

          <TextField
            label="Nom"
            multiline
            variant="outlined"
            fullWidth
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <TextField
            label="Nombre d'heures d'ouverture"
            variant="outlined"
            fullWidth
            name="nbOpenHours"
            value={values.nbOpenHours}
            onChange={handleChange}
          />
          <TextField
            label="Volume maximum"
            variant="outlined"
            fullWidth
            name="volumeMax"
            value={values.volumeMax}
            onChange={handleChange}
          />
          <TextField
            label="Prix"
            variant="outlined"
            fullWidth
            name="price"
            value={values.price}
            onChange={handleChange}
          />
          <TextField
            label="Adresse"
            variant="outlined"
            fullWidth
            name="adress"
            value={values.adress}
            onChange={handleChange}
          />
        </div>

        <ToastContainer />
        {/* Bouton Enregistrer */}
        <div className="flex flex-row justify-end space-x-4 mt-8">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Button
                variant="contained"
                disabled={
                  !values.name ||
                  !values.nbOpenHours ||
                  !values.volumeMax ||
                  !values.price ||
                  !values.adress
                }
                startIcon={<Add />}
                onClick={() => {
                  toast.success("Point relais créé");
                }}
              >
                Créer
              </Button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default RelayPointCreatePage;
