import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = (props) => {
  let dc = useSelector((state) => state.dc);
  let searchTerm = useSelector((state) => state.search);
  console.log(searchTerm);
  
  return (
<></>
  );
};

export default Home;
