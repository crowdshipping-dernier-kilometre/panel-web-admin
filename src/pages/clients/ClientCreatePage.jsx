import React, { useState, useContext } from "react";
import { TextField, Button, Checkbox, Autocomplete } from "@mui/material";
import Header from "../../components/common/Header";
import { Add, Delete, Edit, Save } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../services/context/AppContext";
import { CircularProgress } from "@mui/material";
import { dispatchToast, handleFormatDateTime } from "../../utils/helper";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

const ClientCreatePage = () => {
  const { clientService } = useContext(AppContext);

  // Default values
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  };

  // States
  const [values, setValues] = useState(defaultValues);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState(null);
  const [categoryCreationNameField, setCategoryCreationNameField] =
    useState("");

  // Function for handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Fonction pour réinitialiser les changements
  const handleReset = () => {
    setValues(defaultValues);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={`Nouveau client`} />

      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <div
          className="grid grid-cols-1 gap-4 p-8"
          style={{
            backgroundColor: "#18212F",
            borderRadius: "16px",
          }}
        >
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
        </div>

        <ToastContainer />
        {/* Bouton Enregistrer */}
        <div className="flex flex-row justify-end space-x-4 mt-8">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              disabled={
                !values.firstName ||
                !values.lastName ||
                !values.email ||
                !values.address
              }
              startIcon={<Add />}
              onClick={() => {
                toast.success("Client créé avec succès");
                handleReset();
              }}
            >
              Créer
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClientCreatePage;
