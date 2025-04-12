import s from './Dialogs.module.css'
import {DialogItems} from './DialogsItem/DialogItems';
import {Message} from './Messages/Message';

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
                <Message message={'Hi'} />
                <Message message={'How is your it-kamasutra'} />
                <Message message={'Yo'} />
                <Message message={'Hello'} />
                <Message message={'Great'} />
            </div>
        </div>
    );
};