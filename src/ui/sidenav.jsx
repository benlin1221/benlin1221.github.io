import './sidenav.css';
import SideNavLink from './sidenavlink';
import github_white from '../assets/github_white.svg';
import github_black from '../assets/github_black.svg';
import linkedin_white from '../assets/linkedin_white.svg';
import linkedin_black from '../assets/linkedin_black.svg';
import profile_picture from '../assets/profile_picture.jpg';
import DynamicIcon from './dynamicicon';

export default function SideNav() {
  return (
    <div className="sidenav">
      <img src={profile_picture} className='profile-picture'/>
      <h2>Ben Lin</h2>
      <p className='contact-text'>lin.ben0188@gmail.com</p>
      <SideNavLink linktext='bio'>Bio</SideNavLink>
      <SideNavLink linktext='education'>Education</SideNavLink>
      <SideNavLink linktext='work-experience'>Work Experience</SideNavLink>
      <SideNavLink linktext='projects'>Projects</SideNavLink>
      <SideNavLink linktext='misc'>Misc</SideNavLink>
      <div className='logo-container'>
        <DynamicIcon link='https://github.com/benlin1221' dark={github_white} light={github_black} size='50'/>
        <DynamicIcon link='https://www.linkedin.com/in/benlin1221/' dark={linkedin_white} light={linkedin_black} size='50'/>
      </div>
    </div>
  );
}
