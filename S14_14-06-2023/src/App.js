import "./App.css";

import Nav from "./Components/Nav/Nav";

import Home from "./Components/Routing/Home";
import Profile from "./Components/Routing/Profile";
import Products from "./Components/Routing/Products";
import ContactUs from "./Components/Routing/ContactUs";
import Electronic from "./Components/Routing/Electronic";
import Jewelery from "./Components/Routing/Jewelery";
import { Navigate, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/products" element={<Products />}>
          <Route path="" element={<Navigate to="jewelery" />} />
          <Route path="electronic" element={<Electronic />} />

          <Route path="jewelery" element={<Jewelery />} />
        </Route>

        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
