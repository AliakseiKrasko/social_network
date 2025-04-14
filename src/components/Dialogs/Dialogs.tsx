import s from './Dialogs.module.css'
import {DialogItems} from './DialogsItem/DialogItems';
import {Message} from './Messages/Message';
import {useState} from 'react';

type Props = {
    name: string
    id: number
};
export const Dialogs = ({ name, id }: Props) => {
    const [dialogsData, setDialogsData] = useState([
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Sascha'},
    ])

    const [messagesData, setMessagesData] = useState([
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Great'},
    ])

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(d => {
                    return (
                        <DialogItems name={d.name} id={d.id} />
                    )
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map(m => {
                    return (
                        <Message message={m.message} />
                    )
                })}
            </div>
        </div>
    );
};