export default function Header({handleAdd}){
    return(
        <nav>
            <h2>User Management</h2>
            <button onClick={handleAdd}>Add new user</button>
        </nav>
    )
}