import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({ children }) {
    const token = useSelector((state) => state.authStore.token);
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

// Validación de las props
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
