import s from './Dialogs.module.css'

type Props = {};
export const Dialogs = (props: Props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sascha
                </div>
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