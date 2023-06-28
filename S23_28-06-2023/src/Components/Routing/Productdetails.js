import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

function Productdetails(props) {
  let storeData = useSelector((storeData) => storeData);
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
    setProduct(storeData.electronic.filter((ele) => ele.id === Number(id)));
  }, []);
  return (
    <div>
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
