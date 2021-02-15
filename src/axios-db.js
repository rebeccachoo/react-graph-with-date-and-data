import axios from "axios";

const instance = axios.create({
	baseURL: "https://graph-7b953-default-rtdb.firebaseio.com/",
});

export default instance;
