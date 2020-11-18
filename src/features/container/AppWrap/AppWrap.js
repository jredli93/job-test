import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const AppWrap = ({ children }) => {
    return (
        <div>
            <Link to="/">Posts</Link>
            <Link to="/comments">Comments</Link>
            {children}
        </div>
    )
}

export default AppWrap
