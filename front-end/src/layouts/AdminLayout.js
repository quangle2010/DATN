import React, { useState } from 'react'

import AdminSidebar from '../components/admin/AdminSidebar';
import AdminMainContent from '../components/admin/AdminMainContent';
import AdminNavbar from '../components/admin/AdminNavbar';

import '../assets/css/admin.css';

export default function AdminLayout() {
        const [isSidebarHidden, setIsSidebarHidden] = useState(false);

        const toggleSidebar = () => {
                setIsSidebarHidden(!isSidebarHidden);
        };
        return (
                <>
                        <AdminSidebar isSidebarHidden={isSidebarHidden} toggleSidebar={toggleSidebar} />
                        <AdminNavbar isToggleSidebar={isSidebarHidden} toggleSidebar={toggleSidebar} />
                        <AdminMainContent isSidebarHiddenisSidebarHidden toggleSidebar={toggleSidebar} />
                </>
        )
}
