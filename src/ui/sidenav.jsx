import './sidenav.css';
import SideNavLink from './sidenavlink';
import github from '../assets/github-logo-black.png';
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
      <a href='https://github.com/benlin1221'><img src={github} width="50"/></a>
      <a href='https://www.linkedin.com/in/benlin1221/'><img src={linkedin} width="50"/></a>
    </div>
  );
}
