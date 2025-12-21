import { useState } from "react";
import "./App.css";
import Sidepanel from "./Sidepanel";
import UserDetails from "./UserDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dashboard">
      <Sidepanel />
      <UserDetails/>
    </div>
  );
}

export default App
