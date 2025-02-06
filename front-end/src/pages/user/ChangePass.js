import React from 'react'
// import '../css/login.css'
export default function ChangePass() {
        return (
                <div className='d-flex justify-content-center align-items-center'>
                        <div className="card my-3 w-50" >
                                <div className='card-body'>
                                        <div className="shop_name">The Bugs</div>
                                        <h3>Change Password</h3>
                                        <p className="text-muted text-center mb-4">Enter your new password below</p>
                                        <form>
                                                <div className="mb-4">
                                                        <label for="current-password" className="form-label">Current Password</label>
                                                        <input type="password" className="form-control" id="current-password" placeholder="Enter your current password" required />
                                                </div>
                                                <div className="mb-4">
                                                        <label for="new-password" className="form-label">New Password</label>
                                                        <input type="password" className="form-control" id="new-password" placeholder="Enter your new password" required />
                                                </div>
                                                <div className="mb-4">
                                                        <label for="confirm-new-password" className="form-label">Confirm New Password</label>
                                                        <input type="password" className="form-control" id="confirm-new-password" placeholder="Confirm your new password" required />
                                                </div>
                                                <button type="submit" className="btn btn-primary w-100 mb-4">Change Password</button>
                                        </form>
                                </div>
                        </div>
                </div>
        )
}
