import s from './DialogsItem.module.css'
import {NavLink} from 'react-router-dom';

type Props = {
    name: string
    id: number
};
export const DialogItems = ( { name, id } : Props) => {
    let path = "/dialog/" + id
    return <div className={s.dialogBox}>
            <NavLink to={path} className={s.dialog}>{name}</NavLink>
        </div>

};