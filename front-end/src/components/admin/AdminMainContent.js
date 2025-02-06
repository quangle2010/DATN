import React from 'react'
import { Outlet } from 'react-router-dom';

export default function AdminMainContent({ toggleSidebar, isSidebarHidden }) {
        const handleClick = (e) => {
                if (window.innerWidth < 1000 && isSidebarHidden) {
                        toggleSidebar(e);
                }
        };
        return (
                <main id='content' onClick={handleClick}>
                        <Outlet />
                </main>

        )
}
