export default function SideNavLink({ linktext, children }) {
    return <a href={'#' + linktext}>{children}</a>
}