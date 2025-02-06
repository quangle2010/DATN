import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ requiredRole, element }) => {
        const { loading, userInfo } = useAuth();
        if (loading) {
                return <div>Loading...</div>; // Or a loading spinner
        }
        if (!userInfo) {
                return <Navigate to="/login" />;
        }
        if (
                (requiredRole === 1 && userInfo.role !== 1) ||
                (requiredRole === 2 && userInfo.role > 2) ||
                (requiredRole === 3 && userInfo.role !== 3)
        ) {
                return <Navigate to="/login" />;
        }
        return element;
};

export default ProtectedRoute;
