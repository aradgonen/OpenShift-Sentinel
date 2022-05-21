import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/deploy";

const deployAllPolicies = () => {
    return axios.get(API_URL + "/policies");
};

export default {
    deployAllPolicies,
};