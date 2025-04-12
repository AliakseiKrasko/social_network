import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type Props = {
    name: string
    id: string
};
export const DialogItems = ( { name, id } : Props) => {
    let path = "/dialog/" + id
    return <div className={s.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>

};