import React, { useState, useContext, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Header from "../../components/common/Header";
import {
  Add,
  Block,
  Cancel,
  Delete,
  Edit,
  LockOpen,
  Save,
} from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { dispatchToast, handleFormatDateTime } from "../../utils/helper";
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "../../services/context/AppContext";
import { TIMEOUT_REFRESH } from "../../utils/constants";
import { set } from "date-fns";

const CrowdshipperEditEmbeddedPage = () => {
  const { crowdshipperId } = useParams();
  const navigate = useNavigate();

  const { userService } = useContext(AppContext);
  // Default values
  const defaultValues = {
    id: "",
    idForSimulation: "",
    firstName: "",
    name: "",
    email: "",
    volumeMax: "",
    createdAt: "",
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

  useEffect(() => {
    // getUserById();
  }, []);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={`Crowdshippers / ${crowdshipperId}`} />

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
              <Link to="/nouveau-crowdshipper">
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
            label="ID pour la simulation"
            variant="outlined"
            fullWidth
            name="idForSimulation"
            value={values.idForSimulation}
            onChange={handleChange}
          />
          <TextField
            label="Prénom"
            variant="outlined"
            fullWidth
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Nom"
            variant="outlined"
            fullWidth
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            label="Volume max (m3)"
            variant="outlined"
            fullWidth
            name="volumeMax"
            value={values.volumeMax}
          />
          <TextField
            label="Créé le"
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
                <>
                  <Button
                    variant="outlined"
                    onClick={handleReset}
                    color="error"
                    startIcon={<Cancel />}
                  >
                    Annuler
                  </Button>
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
                </>
              )}

              {/* Bouton Supprimer */}
              <Button
                variant="outlined"
                onClick={() => {
                  toast.success("Crowdshipper supprimé");
                  setTimeout(() => {
                    navigate("/crowdshippers");
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

export default CrowdshipperEditEmbeddedPage;
