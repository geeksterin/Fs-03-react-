import axios from "axios";

export const getUsers = (setUsers, setState) => {
  axios
    .get("https://randomuser.me/api/?results=20")
    .then((res) => {
      console.log(res.data.results);
      setState(res.data.results);
      setUsers(res.data.results);
    })
    .catch((error) => {
      alert("Error While getting the Users Data");
    });

  // fetch("https://randomuser.me/api/?results=20")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.results);
  //     setUsers(data.results);
  //     setState(data.results);
  //   })
  //   .catch(() => {});
};

export const getUsersData = (setUsers) => {
  axios.get("http://localhost:5001/results").then((res) => {
    console.log(res);
    setUsers(res.data);
  });
};

export const sendUserDetails = (userdata, setUsers) => {
  axios
    .post("http://localhost:5001/results", userdata)
    .then((res) => {
      alert("User successfully Added");
      getUsersData(setUsers);
    })
    .catch((error) => {
      alert("Failed to Add User");
    });
};

export const deleteUserData = (id, setUsers) => {
  axios
    .delete(`http://localhost:5001/results/${id}`)
    .then(() => {
      alert("Removed User Successfully");
      getUsersData(setUsers);
    })
    .catch(() => {
      alert("Failed to Remove the Users");
    });
};
