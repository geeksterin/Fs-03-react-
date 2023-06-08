import { useEffect, useState } from "react";
import axios from "axios";

function Pagination(props) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:5001/results?_limit=${5}&_page=${page}`) // 13 to 16
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(() => {
        alert("Failed to fetch users data");
      });
  }, [page]);

  return (
    <div>
      <h2>Pagination Concept</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        placeat rerum natus. Quidem magnam dignissimos dolorum velit iusto
        eaque, distinctio, maiores adipisci quo et iure minus asperiores a quasi
        officiis aliquam placeat hic repudiandae cupiditate? Aut, voluptatum
        hic. Repellendus alias iste deleniti est, nulla debitis sit voluptatibus
        asperiores vero qui aperiam mollitia distinctio accusantium perferendis!
        Consequatur tempore excepturi velit modi magni, asperiores optio iusto
        veniam quidem totam exercitationem eligendi ducimus ea. Dolorum pariatur
        quas quo veritatis voluptatum fuga ullam ducimus aliquam, nemo veniam
        hic esse rem voluptate alias laboriosam fugiat. Modi reiciendis
        recusandae quos asperiores sint, a quisquam veritatis voluptas.
      </p>
      {users.length > 0 && (
        <div>
          <table
            frame="box"
            rules="all"
            width={500}
            cellPadding={10}
            style={{ margin: "20px auto" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>GENDER</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div>
            <button
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Prev
            </button>
            &nbsp;&nbsp;
            <button>{page}</button>&nbsp;&nbsp;
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </button>
            &nbsp;&nbsp;
          </div>
        </div>
      )}
    </div>
  );
}

export default Pagination;
