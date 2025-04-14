import s from './Dialogs.module.css'
import {DialogItems} from './DialogsItem/DialogItems';
import {Message} from './Messages/Message';

type Props = {
    name: string
    id: number
};
export const Dialogs = ({ name, id }: Props) => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Sascha'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Great'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItems name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItems name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItems name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItems name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
            </div>
        </div>
    );
};