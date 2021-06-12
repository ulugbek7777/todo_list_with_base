import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addNewUnderWork, addNewWork, underWork } from '../../redux/todo-reducer'
import NewWorks from '../newWorks'
import AutoHeightTextarea from './Textarea'
import s from './todoModal.module.css'

function TodoModal(props) {
    const ActiveteTextArea = () => {
        setEditMode(true);
    }
    const deactiveteTextArea = () => {
        setEditMode(false);
    }
    let [editMode, setEditMode] = useState(false);
    let [editModeWorks, setEditModeWorks] = useState(true);
    let [status, setStatus] = useState(props.posts[props.id][0]);
    useEffect( () => {
        setStatus(props.posts[props.id][0]);
    }, [props.posts[props.id][0]] );
    let dta = null;
    const sendData = (e) => {
        dta = e;
    }
    const addUnderWorkBtn = () => {
        console.log(dta)
        props.addUderWork({id: props.id, newWorkPost: dta});
        setEditMode(false);
    }
    return (
        <div className={s.todoModal}>
            <div className={s.blockModal}>
                <p className={s.post}>{status}</p>
                <div className={s.tabs}>
                    <button onClick={() => setEditModeWorks(true)} autoFocus className={s.stylebtn}>Qo'shimcha vazifa</button>
                    <button onClick={() => setEditModeWorks(false)} className={s.stylebtn}>Izoh</button>
                </div>
                { editModeWorks &&
                    <div>
                                        <div className={s.block_under_wors}>
                    { props.posts[props.id][1].map(a => <NewWorks a={a} />) }
                </div>
                { !editMode &&
                    <div>
                        <svg onClick={ActiveteTextArea} className={s.plusIco}
                        viewBox="0 0 20 20">
                                    <path  d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                        </svg>
                    </div>
                }
                { editMode && 
                    <div>
                        <div className={s.blockZadach}>
                            <div className={s.block_input}>
                                <input onChange={(e) => {sendData(e.currentTarget.value)}} autoFocus type="text" placeholder="Bu yerda vazifa ostiga vazifa kiritishingiz mumkin"/>
                                <div>
                                    <button onClick={addUnderWorkBtn} className={s.button} >Kiritish</button>
                                    <button className={s.button2}>Bekor Qilish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                    </div>
                }

            </div>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        posts: state.todoPage.posts,
        underWork: state.todoPage.underWork,
        id: state.todoPage.id,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewWork: (posts) => {
            dispatch(addNewWork(posts));
        },
        addUderWork: (data) => {
            dispatch(addNewUnderWork(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal)
