import Button from "./Button";

export default function UserList({
  userlist,
  handleView,
  handleEdit,
  handleDelete
}) {
  return (
    <div className="user-container">
      {userlist.map((user, index) => (
        <div className="user-card" key={index}>
          <img className="image" src={user.img} />
          <p className="name">{user.name}</p>
          <p className="email">{user.email}</p>
          <div className="handle-buttons">
             <Button
                text="View"
                onClick={() => handleView(user)}
            />
            <Button
                text="Edit"
                onClick={() => handleEdit(index)}
            />
            <Button
                text="Delete"
                onClick={() => handleDelete(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
