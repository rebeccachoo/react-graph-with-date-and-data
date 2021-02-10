import axios from "axios";

const instance = axios.create({
	baseURL: "https://hamberger-b073a-default-rtdb.firebaseio.com/",
});

export default instance;
