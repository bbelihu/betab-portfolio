import { NavLink } from 'react-router-dom';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
  const linkedinProfile = 'https://www.linkedin.com/in/betab-belihu-216b74160';
  const githubProfile = 'https://github.com/bbelihu';
  return <div className='nav-bar'>
    <NavLink exact="true" activeclassname="active" to="/betab_portfolio" className='nav-link' id='home'>
      <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" to="/betab_portfolio/about" className='nav-link' id='about'>
      <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" to="/betab_portfolio/contact" className='nav-link' id='contact'>
      <FontAwesomeIcon icon={faContactCard} color="#4d4d4e" />
    </NavLink>
    <ul>
      <li>
        <a target="_blank" rel='noreferrer' href={linkedinProfile}>
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href={githubProfile}>
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
}

export default Sidebar;