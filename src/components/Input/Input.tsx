type Props = {
    as?: 'input' | 'textarea'
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
};
export const Input = ({as = 'input', value, onChange}: Props) => {
    if (as === 'textarea') {
        return <textarea value={value} onChange={onChange}/>
    }
    return <input type="text" value={value} onChange={onChange} />
};