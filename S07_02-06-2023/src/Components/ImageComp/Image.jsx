import { useState } from "react";

function Image(props) {
  const [reactimg, setReactImg] = useState(
    "https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg"
  );
  return (
    <div>
      <h2>Image Component</h2>
      <img src={reactimg} width={500} height={300} />
      <br />
      <button
        onClick={() => {
          setReactImg(
            "https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg"
          );
        }}
      >
        React
      </button>
      <button
        onClick={() => {
          setReactImg(
            "https://s42509.pcdn.co/wp-content/uploads/2015/08/AngularJS_google.png"
          );
        }}
      >
        Angular
      </button>
    </div>
  );
}

export default Image;
