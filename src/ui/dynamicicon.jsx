export default function DynamicIcon({ link, dark, light, size }) {
    return (
        <a href={link}>
            <picture>
                <source srcSet={light} media="(prefers-color-scheme: light)" width={size}/>
                <img src={dark} width={size}/>
            </picture>
        </a>
    )
}