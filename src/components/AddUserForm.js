import { useState } from "react";
import { Button, Card } from "./Ui/Ui";

const AddUserForm = ({ appFunctions }) => {
  const userObj = {
    name: "",
    age: "",
  };

  const [user, setUser] = useState(userObj);

  const handleInputValue = (key, value) => {
    setUser((prevState) => {
      return { ...prevState, [`${key}`]: value };
    });
  };

  const checkValues = (user) => {
    const emptyUser = user.name.trim().length === 0;
    const emptyAge = user.age.trim().length === 0;

    if (emptyUser && emptyAge) {
      appFunctions.setOpenErrorModel({ open: true, msg: "non-empty values" });
      return;
    } else if (emptyUser) {
      appFunctions.setOpenErrorModel({ open: true, msg: "username is empty" });
      return;
    } else if (emptyAge) {
      appFunctions.setOpenErrorModel({ open: true, msg: "age is empty" });
      return;
    } else if (Math.sign(user.age) === -1) {
      appFunctions.setOpenErrorModel({
        open: true,
        msg: "age cannot be a nagative value",
      });
      return;
    } else {
      appFunctions.setUserList((prevState) => [...prevState, user]);
      setUser(userObj);
    }
  };

  const sumbitUser = () => {
    checkValues(user);
  };

  return (
    <Card>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => handleInputValue("name", e.target.value)}
        value={user.name}
      ></input>
      <label>Age (Years)</label>
      <input
        type="number"
        onChange={(e) => handleInputValue("age", e.target.value)}
        value={user.age}
      ></input>
      <Button type="submit" onClick={sumbitUser}>
        Add user
      </Button>
    </Card>
  );
};

export default AddUserForm;
