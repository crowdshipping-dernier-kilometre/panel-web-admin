import React, { useState, useContext } from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import Header from "../../components/common/Header";
import { Add, Delete, Edit, Save } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../services/context/AppContext";
import { CircularProgress } from "@mui/material";
import { dispatchToast, handleFormatDateTime } from "../../utils/helper";
import { ToastContainer, toast } from "react-toastify";

const TruckCreatePage = () => {
  const { truckService } = useContext(AppContext);

  // Default values
  const defaultValues = {
    idForSimulation: "",
    volumeMax: 0,
    distanceMax: 0,
  };

  // States
  const [values, setValues] = useState(defaultValues);
  const [isLoading, setIsLoading] = useState(false);

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
      <Header title={`Nouveau camion`} />

      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
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
            label="Distance max (en km)"
            variant="outlined"
            fullWidth
            name="distanceMax"
            value={values.distanceMax}
            multiline
            onChange={handleChange}
          />
          <TextField
            label="Volume max (en m3)"
            variant="outlined"
            fullWidth
            name="volumeMax"
            value={values.volumeMax}
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
            <Button
              variant="contained"
              disabled={
                !values.idForSimulation ||
                !values.distanceMax ||
                !values.volumeMax
              }
              startIcon={<Add />}
              onClick={() => {
                toast.success("Camion créé avec succès");
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

export default TruckCreatePage;
