import React, { Component, useState, useEffect } from 'react';
import s from './todo.module.css';
import AyeIcon from './../images/view.png';
import ElusIcon from './../images/plus.png';
import EditIcon from './../images/edit.png';
import DeleteIcon from './../images/delete.png';
import AutoHeightTextarea from './Textarea';
import TodoModal from './todoModal';



const TodoWorkSpace = (props) => {
    let i = 0;
    const deletePost = (p) => {
        props.deleteNewWork(p)
    }
    const EditChange = (p) => {
        // props.updateNewWork({id: p, post: 'yo mazafaka'});
        setEditMode(true);
    }
    const updatePost = (p) => {
        setEditMode(false);
        props.updateNewWork({id: p, post: status})

    }
    const updatePostOnChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    const underWork = () => {
        setUnderWork(true);
    }
    const deactivate = () => {
        setUnderWork(false);
    }
    let [editMode, setEditMode] = useState(false);
    let [editUnder, setUnderWork] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.workText);
    }, [props.workText] );
        const underWorkFunc = () => {
            props.underWork({id: props.p, underWork: true});
        }
        return (
            <div>            
                <div className={s.card}>
                <div><input className={s.checkInput} type="checkbox" onClick={(e) => console.log(e.currentTarget.value)}/></div>
                    <div className={s.inputblock}>
                    { !editMode &&
                        <p className={s.works}>{props.workText[0]}</p>
                    }   
                    { editMode &&
                        <textarea className={s.textAstyle} value={status} onChange={(e) => updatePostOnChange(e)} autoFocus={true} 
                        onBlur={() => updatePost(props.p)}/>
                    }                 
                    </div>
                    <div className={s.rightImgs}>
                        <img src={AyeIcon}/>
                        <img onClick={underWorkFunc} src={ElusIcon}/>
                        <img onClick={() => EditChange(props.p)} src={EditIcon}/>
                        <img onClick={() => deletePost(props.p)} src={DeleteIcon}/>
                    </div>
            </div>
            </div>
        )
    }

export default TodoWorkSpace;

