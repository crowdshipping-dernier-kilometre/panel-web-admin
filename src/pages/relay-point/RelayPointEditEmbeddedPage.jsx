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
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "../../services/context/AppContext";
import { TIMEOUT_REFRESH } from "../../utils/constants";

const RelayPointEditEmbeddedPage = () => {
  const { relayPointId } = useParams();
  const navigate = useNavigate();

  const { relayPointService } = useContext(AppContext);

  // Default values
  const defaultValues = {
    id: "",
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
  const getRelayPointById = async () => {};

  useEffect(() => {
    // getRelayPointById();
  }, []);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={`Point relais / ${relayPointId}`} />

      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <div className="flex justify-end mb-4 space-x-4">
          {!isLoading && (
            <>
              <Button
                variant="text"
                startIcon={<Edit />}
                onClick={() => setIsEditing(!isEditing)}
              >
                Modifier
              </Button>
              <Link to="/nouveau-point-relais">
                <Button
                  variant="text"
                  startIcon={<Add />}
                >
                  Créer un nouveau
                </Button>
              </Link>
            </>
          )}
        </div>
        <div
          className="grid grid-cols-1 gap-4 p-8"
          style={{
            backgroundColor: "#18212F",
            borderRadius: "16px",
          }}
        >
          <TextField
            label="ID"
            variant="outlined"
            fullWidth
            name="id"
            value={values.id}
            disabled
          />
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
              {isModified && isEditing && (
                <Button
                  variant="outlined"
                  onClick={handleReset}
                  startIcon={<Block />}
                >
                  Annuler
                </Button>
              )}
              {isModified && isEditing && (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setIsEditing(false);
                    setIsModified(false);
                    toast.success("Modifications enregistrées");
                  }}
                  startIcon={<Save />}
                >
                  Enregistrer
                </Button>
              )}
              {/* Bouton Supprimer */}
              <Button
                variant="outlined"
                onClick={() => {
                  toast.success("Point relais supprimé");
                  setTimeout(() => {
                    navigate("/points-relais");
                  }, TIMEOUT_REFRESH);
                }}
                color="error"
                startIcon={<Delete />}
              >
                Supprimer
              </Button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default RelayPointEditEmbeddedPage;
