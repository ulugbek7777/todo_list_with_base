import React, { useEffect, useState } from 'react';
import EditIcon from './../images/edit.png';
import DeleteIcon from './../images/delete.png';
import s from './newWorks.module.css';

function NewWorks(props) {
    console.log(props.idArray);
    const daleteNewWork = () => {
        props.deleteNewUnderWork({idArray: props.idArray, id: props.id})
    }
    const changeLocalState = (e) => {
        setStatus(e)
    }
    const updatePost = () => {
        props.updateNewUnderWork({id: props.id, idArray: props.idArray, newUnderWorkPost: status});
        setEditMode(false);
        setStatus(status);
    }
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.a);
    useEffect( () => {
        setStatus(props.a);
    }, [props.a] ); 
    return (
        <div className={s.block}>
            <div className={s.container}>
                { editMode &&
                    <textarea autoFocus onBlur={ updatePost } onChange={ (e) => changeLocalState(e.currentTarget.value) } value={status} />
                }
                    { !editMode && 
                        <p>{status}</p>
                    }
                <div className={s.iconsBlock}>
                    <img onClick={() => setEditMode(true)} src={EditIcon} className={s.icons}/>
                    <img onClick={daleteNewWork} src={DeleteIcon} className={s.icons}/>
                </div>
            </div>
        </div>
    )
}

export default NewWorks
