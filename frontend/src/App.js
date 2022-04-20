import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import Login2 from "./components/Login2";
import Soar from "./components/Soar";
import Register from "./components/Register";
import Register2 from "./components/Register2";
import Logout from "./components/Logout"
import Compliance from "./components/Compliance";
import Home from "./components/Home";
import Graphs from "./components/Graphs";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import { logout } from "./store/actions/auth";
import NavBar from "./components/pagelayout/NavBar";
import NavBar2 from "./components/pagelayout/Navbar2"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

const App = () => {
  connect()(App)
  const [prefersLightMode, setPreferedLightMode] =  useState(true);
  const themeMode = useSelector((state) => state.theme.mode);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode],
  );



  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);
  return (
    <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            {/* <NavBar/> */}
            <NavBar2 theme = {theme} themeHandler={setPreferedLightMode}/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/graphs" element={<Graphs/>}/>
            <Route exact path="/compliance" element={<Compliance/>}/>
            <Route exact path="/login" element={<Login2/>} />
            <Route exact path="/register" element={<Register2/>} />
            <Route exact path="/logout" element={<Logout/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route path="/user" element={<BoardUser/>} />
            <Route path="/mod" element={<BoardModerator/>} />
            <Route path="/admin" element={<BoardAdmin/>} />
            <Route path="/soar" element={<Soar/>}/>
          </Routes>
          </ThemeProvider>
    </Router>
  );
};

export default App;