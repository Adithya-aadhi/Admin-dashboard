import Button from "./Button";

export default function UserCard({
  user,
  onView,
  onEdit,
  onDelete
}) {
  return (
    <div className="user-card">
      <img className="image" src={user.img} alt={user.name} />
      <p className="name">{user.name}</p>
      <p className="email">{user.email}</p>

      <div className="handle-buttons">
        <Button text="View" onClick={onView} />
        <Button text="Edit" onClick={onEdit} />
        <Button text="Delete" onClick={onDelete} />
      </div>
    </div>
  );
}
