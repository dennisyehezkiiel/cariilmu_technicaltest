import { useLocation, Navigate } from "react-router-dom";

export default function ToLoginHandler({ children }) {
  const isAuthen = localStorage.getItem("access_token");
  const location = useLocation();

  if (isAuthen) {
    return <Navigate to="/classlist" state={{ from: location }} replace />;
  }
  return children;
}
