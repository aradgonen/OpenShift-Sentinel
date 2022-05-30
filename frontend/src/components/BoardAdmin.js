import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import {Card, CardGroup, Container} from 'react-bootstrap'
import ProfileCard from "./ui/profileCard";

const BoardAdmin = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getAllUsers().then(
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
        <Container>
        {content.map(user => {
            return (
              <ProfileCard user={user}/>
            );
        })}
        </Container>
  );
};

export default BoardAdmin;
