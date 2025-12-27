import { useState } from "react";
import InitialUsers from "../data/Initialusers";
import Header from "../layout/Header";
import View from "./VIew";
import Form from "../pages/Form";
import UserList from "./Userlist";
export default function UserDetails() {
  const [user, setUser] = useState({
    img: "",
    name: "",
    email: "",
  });

  const [userlist, setUserList] = useState(InitialUsers);
  const [show,setShow]=useState(false);

  const [showview,setShowview]=useState(false);
  const [view,setView]=useState(null)
  const [editIndex, setEditIndex] = useState(null);


  function handleChange(event){
    const{name,value}=event.target;
    setUser(prev=>({...prev,[name]:value}))
  }
  function handleSubmit(e){
    e.preventDefault();
    if(user.name=="" || user.email=="")return ;

     if(editIndex !== null){ 
      setUserList(prev => prev.map((u, i) => i === editIndex ? user : u));
      setEditIndex(null);
    } else { 
      setUserList(prev => [...prev, user]);
    }
    setUser({name:"",email:""});
    setShow(prev=>!prev)
  }

  function handleAdd(){
    setShow(prev=>!prev)
  }
  function handleView(user) {
    setView(user);
    setShowview(true);
  }

  function handleEdit(index){
    setUser(userlist[index]);
    setEditIndex(index);
    setShow(true);
  }
  function handleDelete(index) {
    setUserList(userlist.filter((data,id)=>id!==index));
  }
  return (
    <div className="user-details">
      <Header handleAdd={handleAdd}/>
        {showview && <View view={view} setShowview={setShowview}/>}

        {show && <Form
          user={user}
          setUser={setUser}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setShow={setShow}
        />}

      <UserList
        userlist={userlist}
        handleView={handleView}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

    </div>
  );
}
