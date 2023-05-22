import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import { CoffeeOutlined, SyncOutlined, ShakeOutlined, SmileOutlined, HourglassOutlined } from '@ant-design/icons'

const Navigation = () => {
    return (
        <div className="nav">
            <div className="container">
                <nav className="nav__body">
                    <ul>
                        <li>
                            <Link to='/' aria-current="page">О Проекте <CoffeeOutlined /></Link>
                        </li>
                        <li>
                            <Link to='/quotes'>Quotes <SyncOutlined /></Link>
                        </li>
                        <li>
                            <Link to='/pomodoro'>Pomodoro <ShakeOutlined /></Link>
                        </li>
                        <li>
                            <Link to='/timer'>Timer <HourglassOutlined /></Link>
                        </li>
                        <li>
                            <Link to='/clicker'>Clicker <SmileOutlined /></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation