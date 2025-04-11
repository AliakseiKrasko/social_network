type Props = {
    title: string
    as?: 'button' | 'a'
    href?: string
};
export const Button = ({title, as = 'button', href}: Props) => {
    if(as === 'button') {
        return <button>{title}</button>
    }
    return <a href={href}>{title}</a>
};