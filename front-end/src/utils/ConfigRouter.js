//page admin
import AdminAllowSeller from "../pages/admin/AdminAllowSeller";
import AdminAuthor from "../pages/admin/AdminAuthor";
import AdminConfirmProduct from "../pages/admin/AdminConfirmProduct";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminForbidSeller from "../pages/admin/AdminForbidSeller";
import AdminGenre from "../pages/admin/AdminGenre";
import AdminMonthlyRevenue from "../pages/admin/AdminMonthlyRevenue";
import AdminProduct from "../pages/admin/AdminProduct";
import AdminProfile from "../pages/admin/AdminProfile";
import AdminPublisher from "../pages/admin/AdminPublisher";
import AdminReportProduct from "../pages/admin/AdminReportProduct";
import AdminReportShop from "../pages/admin/AdminReportShop";
import AdminShopRevenue from "../pages/admin/AdminShopRevenue";

//page user
import AccountInfo from "../pages/user/AccountInfo";
import Address from "../pages/user/Address";
import Cart from "../pages/user/Cart";
import ChangePass from "../pages/user/ChangePass";
import Favourite from "../pages/user/Favourite";
import ForgotPass from "../pages/user/ForgotPass";
import Home from "../pages/user/Home";
import Ordered from "../pages/user/Ordered";
import PlaceOrder from "../pages/user/PlaceOrder";
import ProductDetail from "../pages/user/ProductDetail";
import Register from "../pages/user/Register";
import RegisterSeller from "../pages/user/RegisterSeller";
import ResetPass from "../pages/user/ResetPass";
import Seller from "../pages/user/Seller";
import Login from "../pages/user/Login";

//pages seller
import OrderManagement from "../pages/seller/OrderManagement";
import ProductManagement from "../pages/seller/ProductManagement";
import RevenueManagement from "../pages/seller/RevenueManagement";
import SaleManagement from "../pages/seller/SaleManagement";
import ProductStatistical from "../pages/seller/ProductStatistical";
import AddProductPage from "../pages/seller/AddProductPage";
import ReviewManagement from "../pages/seller/ReviewManagement";
import SellerHome from "../pages/seller/SellerHome";
import ShopUpdate from "../pages/seller/ShopUpdate";

export const ADMIN_ROUTER = [
        { path: 'dashboard', element: <AdminDashboard /> },
        { path: 'genre', element: <AdminGenre /> },
        { path: 'author', element: <AdminAuthor /> },
        { path: 'publisher', element: <AdminPublisher /> },
        { path: 'product', element: <AdminProduct /> },
        { path: 'allow-store', element: <AdminAllowSeller /> },
        { path: 'forbid-store', element: <AdminForbidSeller /> },
        { path: 'shop-revenue', element: <AdminShopRevenue /> },
        { path: 'shop-monthly-revenue', element: <AdminMonthlyRevenue /> },
        { path: 'report-shop', element: <AdminReportShop /> },
        { path: 'report-product', element: <AdminReportProduct /> },
        { path: 'profile', element: <AdminProfile /> },
        { path: 'confirm-product', element: <AdminConfirmProduct /> }
];
export const User_ROUTER = [
        {
                path: 'home',
                element: <Home />
        },
        {
                path: 'login',
                element: <Login />
        },
        {
                path: 'product-detail',
                element: <ProductDetail />
        },
        {
                path: 'shop',
                element: <Seller />
        },

        {
                path: 'register',
                element: <Register />
        },
        {
                path: 'forgot-password',
                element: <ForgotPass />
        },
        {
                path: 'reset-password',
                element: <ResetPass />
        },
        {
                path: 'register-seller',
                element: <RegisterSeller />
        }
];
export const User_Role_ROUTER = [

        {
                path: 'cart',
                element: <Cart />
        },
        {
                path: 'checkout-cart',
                element: <PlaceOrder />
        },

        {
                path: 'change-password',
                element: <ChangePass />
        },
        {
                path: 'profile',
                element: <AccountInfo />
        },
        {
                path: 'address',
                element: <Address />
        },
        {
                path: 'favourite',
                element: <Favourite />
        },
        {
                path: 'ordered',
                element: <Ordered />
        },
        {
                path: 'seller',
                element: <RegisterSeller />
        }
];
export const SELLER_ROUTER = [
        { path: "dash-board", element: <SellerHome /> },
        { path: "shop-update", element: <ShopUpdate /> },
        { path: "quan-ly-don-hang", element: <OrderManagement /> },
        { path: "danh-sach-san-pham", element: <ProductManagement /> },
        {
                path: "danh-sach-san-pham/add-product",
                element: <AddProductPage />,
        },
        { path: "quan-ly-danh-gia", element: <ReviewManagement /> },
        { path: "quan-ly-khuyen-mai", element: <SaleManagement /> },
        { path: "thong-ke-san-pham", element: <ProductStatistical /> },
        { path: "thong-ke-doanh-thu", element: <RevenueManagement /> },
];