import "./App.css";

import Nav from "./Components/Nav/Nav";

import Home from "./Components/Routing/Home";
import Profile from "./Components/Routing/Profile";
import Products from "./Components/Routing/Products";
import ContactUs from "./Components/Routing/ContactUs";
import Electronic from "./Components/Routing/Electronic";
import Jewelery from "./Components/Routing/Jewelery";
import { Navigate, Route, Routes } from "react-router-dom";
import Productdetails from "./Components/Routing/Productdetails";
import Timer from "./Components/Timer/Timer";
import Dom from "./Components/DOM/Dom";
import Dom2 from "./Components/DOM/Dom2";

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/products" element={<Products />}>
          <Route path="" element={<Navigate to="electronic" />} />
          <Route path="electronic" element={<Electronic />} />

          <Route path="jewelery" element={<Jewelery />} />
        </Route>
        <Route path="/productdetails/:id" element={<Productdetails />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/useref" element={<Dom2 />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
