import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [catPhoto, setcatPhoto] = useState([]);

  useEffect(() => {
    Axios.get("https://aws.random.cat/meow").then((response) => {
      console.log(response.data);
      setcatPhoto(response.data);
    });
  }, []);
  return (
    <div>
      <Link to="/catfact">Facts about Cats</Link>
      <h1> Photos of Cats</h1>
      <div>
        <img src={catPhoto.file} style={{ height: "70vh", width: "50vw" }} />
      </div>
    </div>
  );
}
export default Home;
