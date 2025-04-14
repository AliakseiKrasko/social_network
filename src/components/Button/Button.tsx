type Props = {
    title: string
    as?: 'button' | 'a'
    href?: string
    onClick?: () => void
};
export const Button = ({title, as = 'button', href, onClick}: Props) => {
    if(as === 'button') {
        return <button onClick={onClick}>{title}</button>
    }
    return <a href={href}>{title}</a>
};