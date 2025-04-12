import s from './Message.module.css';

type Props = {
    message: string
};
export const Message = ({ message }: Props) => {
    return <div className={s.message}>{message}</div>
};