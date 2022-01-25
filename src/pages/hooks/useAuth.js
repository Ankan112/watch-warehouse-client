import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthPorvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;