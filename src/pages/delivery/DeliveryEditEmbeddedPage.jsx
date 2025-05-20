import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import Header from "../../components/common/Header";
import { Add, Cancel, Delete, Edit, LockOpen, Save } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { dispatchToast, handleFormatDateTime } from "../../utils/helper";
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "../../services/context/AppContext";
import { TIMEOUT_REFRESH } from "../../utils/constants";

const DeliveryEditEmbeddedPage = () => {
  const { deliveryId } = useParams();
  const navigate = useNavigate();

  const { deliveryService } = useContext(AppContext);
  // Default values
  const defaultValues = {
    idForSimulation: "",
    crowdshipperId: "",
    clientId: "",
    packageId: "",
    status: "",
    createdAt: "",
    updatedAt: "",
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

  // Fonction pour la suppression de la balise (exemple simple)
  const handleDelete = async () => {
    setIsLoading(true);
    const response = await deliveryService.deleteDeliveryById(deliveryId);
    setIsLoading(false);
    if (response.error) {
      console.error(response.message);
      dispatchToast("error", response.message);
    }

    handleReset();
    console.log("Suppression de la balise");
    dispatchToast("success", "Balise supprimée");
    setTimeout(() => {
      navigate("/parcours-orientation");
    }, TIMEOUT_REFRESH);
  };

  const getTagById = async () => {
    const response = await deliveryService.getTagById(deliveryId);
    if (response.error) {
      console.error(response.message);
      dispatchToast("error", response.message);
      return;
    }
    const tag = response.data;
    setValues({
      id: tag.id,
      name: tag.name,
      description: tag.description,
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    handleReset();
    getTagById();
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    const response = await deliveryService.updateTagById(deliveryId, values);
    setIsLoading(false);
    if (response.error) {
      console.error(response.message);
      dispatchToast("error", response.message);
      return;
    }
    dispatchToast("success", "Modifications enregistrées");
    setIsEditing(false);
    getTagById();
  };

  useEffect(() => {
    // getTagById();
  }, []);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={`Livraisons / ${deliveryId}`} />

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

              <Link to="/nouvelle-livraison">
                <Button
                  variant="text"
                  startIcon={<Add />}
                >
                  Créer une nouvelle demande de livraison
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
            name="idForSimulation"
            value={values.idForSimulation}
            onChange={handleChange}
          />
          <TextField
            label="ID du crowdshipper"
            variant="outlined"
            fullWidth
            name="crowdshipperId"
            value={values.crowdshipperId}
            multiline
            onChange={handleChange}
          />
          <TextField
            label="ID du client (destinataire)"
            variant="outlined"
            fullWidth
            name="clientId"
            value={values.clientId}
            multiline
            onChange={handleChange}
          />
          <TextField
            label="ID du colis"
            variant="outlined"
            fullWidth
            name="packageId"
            value={values.packageId}
            multiline
            onChange={handleChange}
          />

          <TextField
            label="Créé le"
            variant="outlined"
            fullWidth
            name="createdAt"
            value={values.createdAt}
            multiline
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
                  onClick={handleCancelEdit}
                  startIcon={<Cancel />}
                >
                  Annuler
                </Button>
              )}
              {isModified && isEditing && (
                <Button
                  variant="outlined"
                  // onClick={handleUpdate}
                  onClick={() => {
                    toast.success("Modifications enregistrées");
                    setIsModified(false);
                  }}
                  startIcon={<Save />}
                >
                  Enregistrer
                </Button>
              )}

              <Button
                variant="outlined"
                onClick={() => {
                  toast.success("Livraison supprimé");
                  setIsModified(false);
                  setTimeout(() => {
                    navigate("/livraisons");
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

export default DeliveryEditEmbeddedPage;
