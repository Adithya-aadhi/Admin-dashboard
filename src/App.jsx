import "./App.css";
import Sidepanel from "./layout/Sidepanel";
import Conatacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import UserDetails from "./pages/UserDetails";
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
        <div className="dashboard">
        <Sidepanel />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/users" element={<UserDetails />}/>
          <Route path="/contacts" element={<Conatacts />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
        </div>
    </BrowserRouter >
  );
}

export default App
