import { Navigate } from "react-router-dom";
function RutaProtegida({proteger}){
    let tokenAcesso = localStorage.getItem("token")
    return tokenAcesso ? proteger : <Navigate to="/" />
}
export default RutaProtegida;