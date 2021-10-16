
function SButton(props) {
    return(
        <p>
            {props.text}
        </p>
    );
}

function HomeButton() {
    return(
        <SButton text="Home"/>
    );
}

function AboutButton() {
    return(
        <SButton text="Home"/>
    );
}

function ProjectsButton() {
    return (
        <SButton text="Projects"/>
    )
}

export { HomeButton, AboutButton, ProjectsButton }