import React, { useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [error, setError] = useState();

  axiosWithAuth().get("http://localhost:5000/api/colors/")
    .then(result => {
      console.log(result.data);
      setColorList(result.data);
    })
    .catch(err => {
      setError(err.response.data.message)
    });

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
