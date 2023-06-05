import { useState } from "react";
function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setUsers(data.results);
      })
      .catch(() => {});
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Users Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        voluptate voluptates, veniam corrupti neque quo non placeat
        necessitatibus dolores blanditiis aperiam assumenda quasi exercitationem
        aut inventore nemo maxime animi dignissimos qui suscipit atque eos
        corporis distinctio. Consectetur unde ducimus, blanditiis id iusto ipsum
        itaque. Reprehenderit doloremque, accusamus magnam laudantium pariatur
        aspernatur omnis facere voluptatum tempore, nam iure illum eum illo at
        aliquam sequi quasi veritatis veniam ipsam! Exercitationem rerum
        laudantium corporis fugiat inventore odio qui nostrum aperiam. Aliquid
        optio corrupti exercitationem laboriosam cumque ipsam, iusto neque,
        ducimus nesciunt architecto eum, adipisci veritatis harum sequi eaque?
        Totam natus dolores delectus. A in fuga amet magnam unde alias, quia
        deserunt similique tenetur, natus, nisi quaerat. Fuga quam, molestias
        eligendi ut consequuntur, provident distinctio ipsum possimus eos
        perferendis ullam voluptate aperiam placeat libero. Eaque quaerat natus
        nihil vitae omnis reiciendis laborum nesciunt, deleniti quidem pariatur
        perferendis assumenda recusandae hic neque, cum adipisci animi cumque
        modi! Officia sequi iure atque dolorem molestiae quos error cum illum
        asperiores libero, reprehenderit aut dicta consequatur tenetur mollitia
        consectetur quis. Suscipit beatae aliquid debitis repudiandae numquam
        maxime dicta minima, iusto, facilis minus recusandae atque dolor ipsa et
        tempore quidem, officiis dolorem modi? Nostrum repudiandae nesciunt
        excepturi mollitia quam.
      </p>
      <button onClick={getUsers}>Get Users</button>

      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-evenly",
          margin: "20px auto",
        }}
      >
        <div>
          <input type="radio" name="gender" value="all" defaultChecked />
          ALL
        </div>
        <div>
          <input type="radio" name="gender" value="male" />
          MALE
        </div>
        <div>
          <input type="radio" name="gender" value="female" />
          FEMALE
        </div>
      </div>

      {users.length > 0 && (
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
      )}
    </div>
  );
}

export default Users;
