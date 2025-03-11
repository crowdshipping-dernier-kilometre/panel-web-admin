import { createContext } from "react";
import { AuthService } from "../api/AuthService";
import { TruckService } from "../api/TruckService";
import { CrowdshipperService } from "../api/CrowdshipperService";
import { ClientService } from "../api/ClientService";
import { RelayPointService } from "../api/RelayPointService";
import { DeliveryService } from "../api/DeliveryService";

const AppContext = createContext({});
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const services = {
    authService: new AuthService(),
    crowdshipperService: new CrowdshipperService(),
    clientService: new ClientService(),
    relayPointService: new RelayPointService(),
    deliveryService: new DeliveryService(),
    truckService: new TruckService(),
  };
  return <Provider value={services}>{children}</Provider>;
};
export { AppContext, AppProvider };
