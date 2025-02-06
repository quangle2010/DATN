import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { removeToken, setToken } from './getToken';
import axiosInstance from './axiosInstance';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext()
const fetchUserInfo = async () => {
        try {
                const response = await axiosInstance.get('/auth/profile');
                if (response.data.status) {
                        return response.data.data;
                }
                return null;
        } catch (error) {
                console.error('Error fetching user info:', error);
                return null;
        }
};

export function AuthProvider({ children }) {
        const [userInfo, setUserInfo] = useState(null);
        const [loading, setLoading] = useState(true);
        const isAuthenticated = userInfo !== null;
        const navigate = useNavigate();
        const login = useCallback((token) => {
                setToken(token);
                fetchUserInfo().then((data) => {
                        if (data) {
                                setUserInfo(data);
                                if (data.role === 3) {
                                        navigate('/admin/dashboard');
                                } else {
                                        navigate('/home');
                                }
                        }
                });
        }, [navigate]);
        const logout = useCallback(() => {
                removeToken();
                setUserInfo(null);
        }, []);

        useEffect(() => {
                const initializeUserInfo = async () => {
                        const user = await fetchUserInfo();
                        setUserInfo(user);
                        setLoading(false);
                };

                initializeUserInfo();
        }, []);


        return (
                <AuthContext.Provider value={{ userInfo, setUserInfo, login, logout, isAuthenticated, loading }}>
                        {loading ? <>load........</> : children}
                </AuthContext.Provider>
        );
}

export const useAuth = () => useContext(AuthContext);
