import UserCard from "./UserCard";

export default function UserList({
  userlist,
  handleView,
  handleEdit,
  handleDelete
}) {
  return (
    <div className="user-container">
      {userlist.map((user, index) => (
        <UserCard
          key={index}
          user={user}
          onView={() => handleView(user)}
          onEdit={() => handleEdit(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}
