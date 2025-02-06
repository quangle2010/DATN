
import Cookies from 'js-cookie';
export const setToken = (token) => {
        return Cookies.set('JWT_TOKEN', token, { expires: 7 });
};
export const getToken = () => {
        return Cookies.get('JWT_TOKEN');
};
export const removeToken = () => {
        return Cookies.remove('JWT_TOKEN');
};