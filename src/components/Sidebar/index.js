import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-k.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => 
(
    <div className = 'nav-bar'>
        <Link className = 'logo' to='/'>
            <img src={LogoS} alt="logo"/>
        </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className ="about-link"to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>

    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/kenny-tran-25b53a239/'>
            <FontAwesomeIcon icon={ faLinkedin } color="#4d4d4e" />
            </a> 
        </li>

        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/kehknee'>
            <FontAwesomeIcon icon={ faGithub } color="#4d4d4e" />
            </a> 
        </li>

        <li>
            <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCzsEAQ4Tc_8OrfBHp1WAWFg'>
            <FontAwesomeIcon icon={ faYoutube } color="#4d4d4e" />
            </a> 
        </li>

        <li>
            <a target="_blank" rel='noreferrer' href='https://discord.gg/mBa3UmFV46'>
            <FontAwesomeIcon icon={ faDiscord } color="#4d4d4e" />
            </a> 
        </li>

    </ul>



    </div>
)

export default Sidebar