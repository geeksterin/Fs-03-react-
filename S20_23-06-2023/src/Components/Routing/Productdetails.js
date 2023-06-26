import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { productContext } from "../ProductsContext/productContext";
function Productdetails(props) {
  const { state } = useContext(productContext); // state = {ele:[{},{},{}],jew:[]}
  console.log(state);
  const [product, setProduct] = useState([
    {
      title: "",
      id: "",
      image: "",
      price: "",
      category: "",
    },
  ]);
  const navigate = useNavigate();
  const { id } = useParams(); //params = {id:9,price:99}

  useEffect(() => {
    setProduct(state.electronicProducts.filter((ele) => ele.id === Number(id)));
    // axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
    //   console.log(res);
    //   setProduct(res.data);
    // });
  }, []);
  return (
    <div>
      {console.log(product)}
      <h2>{product[0].category.toUpperCase()}</h2>
      <img src={product[0].image} width={300} height={300} />
      <br />
      <br />

      <button
        onClick={() => {
          navigate("/products");
        }}
      >
        Go back to Products
      </button>
      {/* <Link to="/products">
        <button>Go Back to Product Component</button>
      </Link> */}
    </div>
  );
}

export default Productdetails;
