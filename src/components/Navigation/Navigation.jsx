import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="nav">
            <div className="container">
                <nav className="nav__body">
                    <ul>
                        <li>
                            <Link to='/' aria-current="page">О Проекте</Link>
                        </li>
                        <li>
                            <Link to='/quotes'>Quotes</Link>
                        </li>
                        <li>
                            <Link to='/pomodoro'>Pomodoro</Link>
                        </li>
                        <li>
                            <Link to='/timer'>Timer</Link>
                        </li>
                        <li>
                            <Link to='/clicker'>Clicker</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation