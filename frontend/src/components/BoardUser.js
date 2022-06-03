import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import ProfileCard from "./ui/profileCard";
import Box from '@mui/material/Box';

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
  return (
        <Box justifyContent="center" alignItems="center" display="flex">
          <ProfileCard user={JSON.parse(localStorage.getItem('user'))}/>  
        </Box>
  );
};

export default BoardUser;
