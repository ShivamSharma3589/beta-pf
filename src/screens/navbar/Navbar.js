import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

export default function Navbar() {
    return (
        <nav className='main-navbar'>
            <div className="links">
                <Link className='nav-link active-nav-link' to="/">
                    <div className="nav-link-icon">
                        <HomeIcon />
                    </div>
                    <div className="nav-link-text">Home</div>
                </Link>
                <Link className='nav-link' to="/about">
                    <div className="nav-link-icon">
                        <PersonIcon />
                    </div>
                    <div className="nav-link-text">About</div>
                </Link>
                <Link className='nav-link' to="/skills">
                    <div className="nav-link-icon">
                        <CodeIcon />
                    </div>
                    <div className="nav-link-text">Skills</div>
                </Link>
                <Link className='nav-link' to="/projects">
                    <div className="nav-link-icon">
                        <IntegrationInstructionsIcon />
                    </div>
                    <div className="nav-link-text">Projects</div>

                </Link>
                <Link className='nav-link' to="/contact">
                    <div className="nav-link-icon">
                        <PermPhoneMsgIcon />
                    </div>
                    <div className="nav-link-text">Contact</div>

                </Link>
            </div>
        </nav>
    )
}
