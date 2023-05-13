import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AdminNavigation = () => {
    return (
        <div>

            <div className="admin-top-navigation"></div>

            <div className="admin-side-navigation">
                <div className="logo">
                    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="9" fill="#F9F9F9" />
                        <rect x="0.5" y="75.5" width="59" height="59" rx="8.5" stroke="#F9F9F9" fill='none' stroke-width="4" />
                        <rect x="75.5" y="0.5" width="59" height="59" rx="8.5" stroke="#F9F9F9" fill='none' stroke-width="4" />
                        <rect x="75" y="75" width="60" height="60" rx="9" fill="#F9F9F9" />
                    </svg>
                </div>
                <div className="navigation-items">
                    <ul>
                        <li>
                            <NavLink to='/admin/home'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.75 16.25H14.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.713C2 8.082 2.64052 8.475 6.08825 5.41C7.5967 4.246 9.94388 2 11.9708 2C13.9967 2 16.3908 4.235 17.9128 5.41C21.3605 8.475 22 8.082 22 13.713C22 22 19.9564 22 12 22C4.04361 22 2 22 2 13.713Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin/about'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2.75H5C3.75736 2.75 2.75 3.75736 2.75 5V8C2.75 9.24264 3.75736 10.25 5 10.25H8C9.24264 10.25 10.25 9.24264 10.25 8V5C10.25 3.75736 9.24264 2.75 8 2.75Z" stroke="white" stroke-width="1.5" />
                                    <path d="M19 2.75H16C14.7574 2.75 13.75 3.75736 13.75 5V8C13.75 9.24264 14.7574 10.25 16 10.25H19C20.2426 10.25 21.25 9.24264 21.25 8V5C21.25 3.75736 20.2426 2.75 19 2.75Z" stroke="white" stroke-width="1.5" />
                                    <path d="M19 13.75H16C14.7574 13.75 13.75 14.7574 13.75 16V19C13.75 20.2426 14.7574 21.25 16 21.25H19C20.2426 21.25 21.25 20.2426 21.25 19V16C21.25 14.7574 20.2426 13.75 19 13.75Z" stroke="white" stroke-width="1.5" />
                                    <path d="M8 13.75H5C3.75736 13.75 2.75 14.7574 2.75 16V19C2.75 20.2426 3.75736 21.25 5 21.25H8C9.24264 21.25 10.25 20.2426 10.25 19V16C10.25 14.7574 9.24264 13.75 8 13.75Z" stroke="white" stroke-width="1.5" />
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin/projects'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 2.75H7C4.65279 2.75 2.75 4.65279 2.75 7V17C2.75 19.3472 4.65279 21.25 7 21.25H17C19.3472 21.25 21.25 19.3472 21.25 17V7C21.25 4.65279 19.3472 2.75 17 2.75Z" stroke="white" stroke-width="1.5" />
                                    <path d="M7 15.8L8.125 17L10 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7 7.8L8.125 9L10 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13 8H17" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M13 16H17" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin/contact'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21H3V12Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M7.75 14.25H13.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M7.75 10.25H16.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="profile">
                    <NavLink to='/admin/profile'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.25 6C15.25 7.79493 13.7949 9.25 12 9.25C10.2051 9.25 8.75 7.79493 8.75 6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6Z" stroke="white" stroke-width="1.5" />
                            <path d="M18.25 17C18.25 18.0756 17.6409 19.1202 16.5138 19.9252C15.3882 20.7293 13.7947 21.25 12 21.25C10.2053 21.25 8.61181 20.7293 7.48618 19.9252C6.35911 19.1202 5.75 18.0756 5.75 17C5.75 15.9244 6.35911 14.8798 7.48618 14.0748C8.61181 13.2707 10.2053 12.75 12 12.75C13.7947 12.75 15.3882 13.2707 16.5138 14.0748C17.6409 14.8798 18.25 15.9244 18.25 17Z" stroke="white" stroke-width="1.5" />
                        </svg>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AdminNavigation;