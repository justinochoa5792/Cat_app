import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Cats() {
  const [catFacts, setcatFacts] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10"
    ).then((response) => {
      console.log(response);
      setcatFacts(response.data);
    });
  }, []);
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Facts About Cats</h1>
      <div>
        {catFacts.map((cats) => (
          <li>{cats.text}</li>
        ))}
      </div>
    </div>
  );
}
export default Cats;
