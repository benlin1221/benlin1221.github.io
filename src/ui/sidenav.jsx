import './sidenav.css';
import SideNavLink from './sidenavlink';
import github_white from '../assets/github_white.svg'
import github_black from '../assets/github_black.svg';
import linkedin from '../assets/linkedin-logo-black.png';

export default function SideNav() {
  return (
    <div className="sidenav">
      <h2>Ben Lin</h2>
      <SideNavLink linktext='bio'>Bio</SideNavLink>
      <SideNavLink linktext='education'>Education</SideNavLink>
      <SideNavLink linktext='work-experience'>Work Experience</SideNavLink>
      <SideNavLink linktext='projects'>Projects</SideNavLink>
      <SideNavLink linktext='misc'>Misc</SideNavLink>
      <div className='logo-container'>
        <a href='https://github.com/benlin1221'>
          <picture>
            <source srcSet={github_white} media="(prefers-color-scheme: dark)" width="50"/>
            <img src={github_black} width="50"/>
          </picture>
        </a>
        <a href='https://www.linkedin.com/in/benlin1221/'><img src={linkedin} width="50"/></a>
      </div>
    </div>
  );
}
