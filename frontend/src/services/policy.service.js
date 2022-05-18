import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/compliance/files";

const getAllPolicies = () => {
    return axios.get(API_URL + "/all");
};

const getPolicyContent = (filePath) => {
    return axios.get(API_URL + `?filepath=${filePath}`);
};

export default {
    getAllPolicies,
    getPolicyContent,
  };