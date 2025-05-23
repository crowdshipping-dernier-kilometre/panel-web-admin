import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import Header from "../../components/common/Header";
import { Add, Delete, Edit, LockOpen, Save } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { dispatchToast, handleFormatDateTime } from "../../utils/helper";
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "../../services/context/AppContext";
import { TIMEOUT_REFRESH } from "../../utils/constants";

const TruckEditEmbeddedPage = () => {
  const { truckId } = useParams();
  const navigate = useNavigate();

  const { truckService } = useContext(AppContext);
  // Default values
  const defaultValues = {
    idForSimulation: "",
    distanceMax: 0,
    volumeMax: 0,
    createdAt: "15-06-2022",
    // event: false,
    // // imageFile: null, // Fichier brut
    // image: null, // URL pour le preview or fichier brut
    // publicationDate: "",
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

  useEffect(() => {}, []);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={`Camions / ${truckId}`} />

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

              <Link to="/nouveau-camion">
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
            label="ID pour la simulation"
            variant="outlined"
            fullWidth
            name="id"
            value={values.idForSimulation}
            disabled
          />
          <TextField
            label="Distance max (en km)"
            variant="outlined"
            fullWidth
            name="distanceMax"
            value={values.distanceMax}
            onChange={handleChange}
          />
          <TextField
            label="Volume max (en m3)"
            variant="outlined"
            fullWidth
            name="volumeMax"
            value={values.volumeMax}
            onChange={handleChange}
          />

          <TextField
            label="Publiée le"
            variant="outlined"
            fullWidth
            name="createdAt"
            value={values.createdAt}
            disabled
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
                  onClick={() => {
                    setIsEditing(false);
                    setIsModified(false);
                    setTimeout(() => {
                      toast.success("Camion modifié avec succès");
                    }, TIMEOUT_REFRESH);
                  }}
                  color="success"
                  startIcon={<Save />}
                >
                  Enregistrer
                </Button>
              )}

              {/* Bouton Annuler */}
              {isEditing && isModified && (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setIsEditing(false);
                    setIsModified(false);
                  }}
                  color="error"
                  startIcon={<LockOpen />}
                >
                  Annuler
                </Button>
              )}

              {/* Bouton Supprimer */}
              <Button
                variant="outlined"
                onClick={() => {
                  toast.success("Camion supprimé avec succès");
                  setTimeout(() => {
                    navigate("/camions");
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

export default TruckEditEmbeddedPage;
