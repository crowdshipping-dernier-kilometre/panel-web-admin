import React, { useState, useContext, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Header from "../../components/common/Header";
import { Add, Block, Delete, Edit, LockOpen, Save } from "@mui/icons-material";
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

const ClientEditEmbeddedPage = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const { clientService } = useContext(AppContext);
  // Default values
  const defaultValues = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
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
    setCategory(null);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={`Clients / ${clientId}`} />

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
              <Link to="/nouveau-client">
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
            name="lastName"
            value={values.lastName}
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
            label="Adresse"
            variant="outlined"
            fullWidth
            name="address"
            value={values.address}
            onChange={handleChange}
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
                    startIcon={<Block />}
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
                    color="success"
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
                  toast.success("Client supprimé");
                  setIsModified(false);
                  setTimeout(() => {
                    navigate("/clients");
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

export default ClientEditEmbeddedPage;
