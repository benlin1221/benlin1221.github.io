import './App.css';
import SideNavLink from './sidenavlink';

export default function SideNav() {
  return (
    <div className="sidebar">
      Ben Lin
      <SideNavLink linktext='bio'>Bio</SideNavLink>
      <SideNavLink linktext='education'>Education</SideNavLink>
      <SideNavLink linktext='work-experience'>Work Experience</SideNavLink>
      <SideNavLink linktext='projects'>Projects</SideNavLink>
      <SideNavLink linktext='misc'>Misc</SideNavLink>
    </div>
  );
}
