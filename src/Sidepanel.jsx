import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
export default function Sidepanel() {
  return (
    <div className="admin-panel">
      <nav>
        <GridViewOutlinedIcon />
        <h2>Admin Dashboard</h2>
      </nav>
      <div className="admin-buttons">
        <button>Dashboard home</button>
        <button>User Management</button>
        <button>Settings</button>
      </div>
    </div>
  );
}
