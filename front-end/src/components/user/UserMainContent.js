import React from 'react'
import { Outlet } from 'react-router-dom'

export default function UserMainContent() {
        return (
                <div id='main_content_user'>
                        <Outlet />
                </div>
        )
}
