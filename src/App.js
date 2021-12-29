import React, { useEffect } from 'react';
import './App.css';

import { Route } from 'react-router';
import { Routes,BrowserRouter} from 'react-router-dom';
import { useDispatch } from "react-redux";

import NavBar from './components/navbar/navbar';
import { loadUser } from "./store/actions/authActions";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    <BrowserRouter>
      <ToastContainer />
        <NavBar />
          <Routes>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;