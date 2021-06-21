import React, { Component, useState, useEffect } from 'react';
import s from './todo.module.css';
import AyeIcon from './../images/view.png';
import ElusIcon from './../images/plus.png';
import EditIcon from './../images/edit.png';
import DeleteIcon from './../images/delete.png';



const TodoWorkSpace = (props) => {
    let i = 0;
    const deletePost = (p) => {
        // let data = prompt('ochirmoqchimisiz', 'ha');
        
        // if(data == 'ha') {
        //     props.deleteNewWork(p)         
        // }
        props.setModalWin(p);
    }
    const EditChange = (p) => {
        // props.updateNewWork({id: p, post: 'yo mazafaka'});
        if(!check) setEditMode(true);
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
    let [status, setStatus] = useState(props.workText[0]);
    let [check, setCheck] = useState(props.posts[props.p][2]);
    console.log(props.workText[0])
    useEffect( () => {
        setStatus(props.workText[0]);
    }, [props.workText[0]] );

    useEffect( () => {
        setCheck(props.posts[props.p][2]);
    }, [props.posts[props.p][2]] );

    
        const underWorkFunc = () => {
            props.underWork({id: props.p, underWork: true});
    }
    let decr = 'none';
    let opc = '1';
    const oncnge = (e) => {
        console.log(props.checked);
        props.workChecked(props.p);
        setCheck(props.posts[props.p][2]);
    }
    if(check) {
        decr = 'line-through';
        opc = '0.8';
    }
    
    
        return (
            <div style={{opacity: opc}}>            
                <div className={s.card}>
                <div><input onChange={(e) => oncnge(e.currentTarget.value)} 
                className={s.checkInput}
                type="checkbox"
                checked={props.posts[props.p][2]}/></div>
                    <div className={s.inputblock}>
                    { !editMode &&
                        <p style={{ textDecoration: decr }} className={s.works}>{props.workText[0]}</p>
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

