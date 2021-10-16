import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SBarData } from './SBarData'
import './SBar.css'

export function SBar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className='sbar'>
                <div className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <AiIcons.AiOutlineClose size={50} className="xbutton"/>
                    {SBarData.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <ul className="external-links">
                        <li><a target="_blank" rel="noreferrer" href="https://github.com/benlin1221"><AiIcons.AiFillGithub/></a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ben-lin-b6204119a/"><AiIcons.AiFillLinkedin/></a></li>
                    </ul>
                </ul>
            </nav>
        </>
    )
}