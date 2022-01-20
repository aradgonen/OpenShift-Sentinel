import React, { useEffect } from 'react';
import './App.css';

import { Route } from 'react-router';
import { Routes,BrowserRouter} from 'react-router-dom';
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
    <BrowserRouter>
      <ToastContainer />
          <PageLayoutDefaultNav></PageLayoutDefaultNav>
          <Routes>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;