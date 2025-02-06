import React from 'react'
import UserNavbar from '../components/user/UserNavbar'
import UserMainContent from '../components/user/UserMainContent'
import UserFooter from '../components/user/UserFooter'
import '../assets/css/user.css';
export default function UserLayout() {
        return (
                <div className='container'>
                        <UserNavbar />
                        <UserMainContent />
                        <UserFooter />
                </div>
        )
}
