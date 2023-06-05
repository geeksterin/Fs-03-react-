import React from "react";

function UserTable({ users }) {
  return (
    <table width="100%" frame="box" rules="all">
      <thead>
        <tr>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>EMAIL</th>
          <th>CITY</th>
        </tr>
      </thead>

      <tbody align="center">
        {users.map((ele) => {
          // ele = {------}
          return (
            <tr>
              <td>
                <img src={ele.picture.medium} width="100" height={100} />
              </td>
              <td>
                {ele.name.first}
                {ele.name.last}
              </td>
              <td>{ele.gender}</td>
              <td>{ele.email}</td>
              <td>{ele.location.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserTable;
