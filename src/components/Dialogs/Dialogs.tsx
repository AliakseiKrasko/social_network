import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItems} from './DialogsItem/DialogItems';

type Props = {};
export const Dialogs = (props: Props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name='Dimych' id='1' />
                <DialogItems name='Alex' id='2' />
                <DialogItems name='Sveta' id='3' />
                <DialogItems name='Andrey' id='4' />
                <DialogItems name='Sascha' id='5' />
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Great</div>
            </div>
        </div>
    );
};