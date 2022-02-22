import React, { useEffect } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadUser } from "./store/actions/authActions";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLayoutDefaultNav from './layout/defaultLayout';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={<PageLayoutDefaultNav />}/>
      <Route path="server"  element={<h4>sdsdssssssssssssssssssssssssssd</h4>}/>
    </Routes>
  </Router>
    </>
  );
}

export default App;