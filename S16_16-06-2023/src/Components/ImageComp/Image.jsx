import { useState, useEffect } from "react";

function Image(props) {
  const [reactimg, setReactImg] = useState(
    "https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg"
  );

  const [title, setTitle] = useState(true);

  useEffect(() => {
    document.title = title
      ? "React Image Component"
      : "Angular Image Component";

    return () => {};
  }, [title, reactimg]);

  return (
    <div>
      <h2>{title ? "React Image Component " : "Angular Image Component"}</h2>
      <p>{localStorage.getItem("city")}</p>
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
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setReactImg(
            "https://s42509.pcdn.co/wp-content/uploads/2015/08/AngularJS_google.png"
          );
        }}
      >
        Angular
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setTitle(!title);
        }}
      >
        Toggle Title
      </button>
    </div>
  );
}

export default Image;
