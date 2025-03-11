import { Route, Routes } from "react-router-dom";

// import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/overview/OverviewPage";
import UsersPage from "./pages/crowdshippers/CrowdshippersPage";
import SettingsPage from "./pages/settings/SettingsPage";
import DashboardLayout from "./layouts/DashboardLayout";

import { AppProvider } from "./services/context/AppContext";
import LoginPage from "./pages/auth/LoginPage";
import TestComponent from "./components/common/TestComponent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CommunitiesPage from "./pages/clients/ClientsPage";
import ActualitiesPage from "./pages/trucks/TrucksPage";
import UserEditEmbeddedPage from "./pages/crowdshippers/CrowdshipperEditEmbeddedPage";
import ActualityEditEmbeddedPage from "./pages/trucks/TruckEditEmbeddedPage";
import ActualityCreatePage from "./pages/trucks/TruckCreatePage";
import ClientCreatePage from "./pages/clients/ClientCreatePage";
import ClientEditEmbeddedPage from "./pages/clients/ClientEditEmbeddedPage";
import PostEditEmbeddedPage from "./pages/relay-point/RelayPointEditEmbeddedPage";
import PostsPage from "./pages/relay-point/RelayPointPage";
import TagEditEmbeddedPage from "./pages/delivery/DeliveryEditEmbeddedPage";
import TagCreatePage from "./pages/delivery/DeliveryCreatePage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import ProtectedRoute from "./ProtectedRoute";
import GuidePage from "./pages/settings/GuidePage";
import TrucksPage from "./pages/trucks/TrucksPage";
import SimulationPage from "./pages/simulation/SimulationPage";
import RelayPointEditEmbeddedPage from "./pages/relay-point/RelayPointEditEmbeddedPage";
import RelayPointsPage from "./pages/relay-point/RelayPointPage";
import CrowdshippersPage from "./pages/crowdshippers/CrowdshippersPage";
import DeliveriesPage from "./pages/delivery/DeliveriesPage";
import TruckEditEmbeddedPage from "./pages/trucks/TruckEditEmbeddedPage";
import TruckCreatePage from "./pages/trucks/TruckCreatePage";
import DeliveryEditEmbeddedPage from "./pages/delivery/DeliveryEditEmbeddedPage";
import DeliveryCreatePage from "./pages/delivery/DeliveryCreatePage";
import CrowdshipperEditEmbeddedPage from "./pages/crowdshippers/CrowdshipperEditEmbeddedPage";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      secondary: {
        main: "#374151", // Couleur secondaire
      },
      background: {
        default: "#18212F", // Couleur de fond
      },
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundColor: "#18212F", // Couleur de fond pour DataGrid
            border: "1px solid #374151", // Couleur des bordures
          },
          columnHeader: {
            backgroundColor: "#18212F", // Couleur des en-têtes
          },
          footerContainer: {
            backgroundColor: "#18212F", // Couleur du footer
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Applique les styles globaux du thème */}
      <AppProvider>
        <div>
          <Routes>
            <Route
              path="/test"
              element={<TestComponent />}
            />
            <Route
              path="/connexion"
              element={<LoginPage />}
            />
            <Route
              path="/reset-password"
              element={<ResetPasswordPage />}
            />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={<OverviewPage />}
              />
              <Route
                path="/simulation"
                element={<SimulationPage />}
              />
              {/* <Route
                path="/actualites/:actualityId"
                element={<ActualityEditEmbeddedPage />}
              /> 
              <Route
                path="/nouvelle-actualite"
                element={<ActualityCreatePage />}
              />*/}
              <Route
                path="/crowdshippers"
                element={<CrowdshippersPage />}
              />
              <Route
                path="/crowdshippers/:crowdshipperId"
                element={<CrowdshipperEditEmbeddedPage />}
              />
              <Route
                path="/nouveau-crowdshipper"
                element={<UserEditEmbeddedPage />}
              />
              <Route
                path="/clients"
                element={<CommunitiesPage />}
              />
              <Route
                path="/clients/:clientId"
                element={<ClientEditEmbeddedPage />}
              />
              <Route
                path="/nouveau-client"
                element={<ClientCreatePage />}
              />
              <Route
                path="/points-relais"
                element={<RelayPointsPage />}
              />
              <Route
                path="/points-relais/:relayPointId"
                element={<RelayPointEditEmbeddedPage />}
              />
              <Route
                path="/nouveau-point-relais"
                element={<PostEditEmbeddedPage />}
              />
              <Route
                path="/livraisons"
                element={<DeliveriesPage />}
              />
              <Route
                path="/livraisons/:deliveryId"
                element={<DeliveryEditEmbeddedPage />}
              />
              <Route
                path="/nouvelle-livraison"
                element={<DeliveryCreatePage />}
              />
              <Route
                path="/camions"
                element={<TrucksPage />}
              />
              <Route
                path="/camion/:truckId"
                element={<TruckEditEmbeddedPage />}
              />
              <Route
                path="/nouveau-camion"
                element={<TruckCreatePage />}
              />
              <Route
                path="/parametres"
                element={<SettingsPage />}
              />
              <Route
                path="/aide"
                element={<GuidePage />}
              />
            </Route>
          </Routes>
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
