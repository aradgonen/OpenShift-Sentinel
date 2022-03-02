import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleChart from "./charts/simpleChart";

const Home = (props) => {
  let dc = useSelector((state) => state.dc);
  let searchTerm = useSelector((state) => state.search);
  console.log(searchTerm);
  
  return (
<SimpleChart></SimpleChart>
  );
};

export default Home;
