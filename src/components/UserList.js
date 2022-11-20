import { Card } from "./Ui/Ui";

const UserList = ({ userList }) => {
  return (
    <>
      {userList.length !== 0 && (
        <Card>
          <ul>
            {userList.map((user) => {
              return (
                <li
                  key={Math.random()}
                >{`${user.name} (${user.age} years old)`}</li>
              );
            })}
          </ul>
        </Card>
      )}
    </>
  );
};

export default UserList;
