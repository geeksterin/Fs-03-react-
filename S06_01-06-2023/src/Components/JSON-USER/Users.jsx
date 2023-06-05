import { useState } from "react";
import "./Users.css";
import { sendUserDetails, getUsersData, deleteUserData } from "../../API/Users";

function Users(props) {
  const [user, setUser] = useState("");
  const [gender, setGender] = useState("");
  const [users, setUsers] = useState([]);

  const addUserData = () => {
    console.log(user, gender);
    let newUser = {
      name: user,
      gender: gender,
    };

    sendUserDetails(newUser, setUsers);
  };

  const getUsers = () => {
    getUsersData(setUsers);
  };

  const deleteUser = (id) => {
    deleteUserData(id, setUsers);
  };
  return (
    <div className="container">
      <h2>New User</h2>
      <input
        type="text"
        placeholder="Enter User Name"
        onChange={(event) => {
          setUser(event.target.value);
        }}
      />
      <div style={{ margin: "10px 0px 25px" }}>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
        Female
      </div>

      <button onClick={addUserData}>Add User</button>

      <button onClick={getUsers}>Get Users</button>

      <div>
        {users.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>GENDER</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Users;
