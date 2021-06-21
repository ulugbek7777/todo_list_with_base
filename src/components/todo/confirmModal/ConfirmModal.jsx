import React from 'react';
import s from './ConfirmModal.module.css'

function ConfirmModal(props) {
    const yesImSure = () => {
        props.deleteNewWork(props.setDelete);
        props.setModalWindow(props.setDelete);
    }
    const noImNotSure = () => {
        props.setModalWindow(props.setDelete);
    }
    return (
        <div>
            <div className={s.container}>
                <h3>Rostdan ham o'chirmoqchimisiz</h3>
                <hr />
                <div className={s.tabs}>
                    <button onClick={noImNotSure} className={s.button2}>Yo'q</button>
                    <button onClick={yesImSure} className={s.button}>Ha</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
