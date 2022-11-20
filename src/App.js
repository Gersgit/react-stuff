import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import ErrorModel from "./components/ErrorModel";

function App() {
  const [userList, setUserList] = useState([]);
  const [openErrorModel, setOpenErrorModel] = useState({
    open: false,
    msg: "",
  });

  return (
    <div>
      <AddUserForm appFunctions={{ setUserList, setOpenErrorModel }} />
      <UserList userList={userList} />
      {openErrorModel.open && (
        <ErrorModel errorModelState={{ openErrorModel, setOpenErrorModel }} />
      )}
    </div>
  );
}

export default App;
