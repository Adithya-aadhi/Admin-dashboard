import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { NavLink } from 'react-router-dom';
export default function Sidepanel() {
  return (
    <div className="admin-panel">
      <nav>
        <GridViewOutlinedIcon />
        <h2>Admin Dashboard</h2>
      </nav>
      <div className="admin-buttons">
        <NavLink to="/">Dashboard home</NavLink>
        <NavLink to="/users">User Management</NavLink>
        <NavLink to="/comtact">Contacts</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </div>
  );
}
