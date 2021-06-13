import React, { Component } from 'react';
import s from './todo.module.css';
import {connect} from "react-redux";
import { addNewWork, addNewWorkInPage, deleteNewWork, underWork, updateNewWork } from '../../redux/todo-reducer';
import { reduxForm, Field } from 'redux-form';
import TodoWorkSpace from './todoWorkSpace';
import TodoModal from './todoModal';

const AddNewWorkForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field className={s.addElementInput} type="text" placeholder="Add new tasks" name='postWork' component={'input'}/>
            <button className={s.addElementButton}>Add</button>
        </form>
    )
}

let AddNewWorkReduxForm = reduxForm({form: 'work'})(AddNewWorkForm)
const Todo = (props) => {
    const onSubmit = (formData) => {
        props.addNewWork([formData.postWork]);
    }
    let i = 0;
    let j = 0;
        return (
            <div>
                { props.underWorkF && 
                    <TodoModal posts={props.workText} id={props.p}/>
                }
                { !props.underWorkF&& 
                    <div className={s.container}>
                        <div>
                            <h1>TODO APP</h1>
                            <AddNewWorkReduxForm onSubmit={onSubmit}/>
                        </div>
                        {props.posts.map(w => <TodoWorkSpace workText={w} p={i++} key={j++} 
                        deleteNewWork={props.deleteNewWork}
                        updateNewWork={props.updateNewWork}
                        underWork={props.underWork}
                        />)}
                    </div>
                }
            </div>
        )
    }

    let mapStateToProps = (state) => {
        return {
            posts: state.todoPage.posts,
            underWorkF: state.todoPage.underWork,
            id: state.todoPage.id,
        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            addNewWork: (posts) => {
                dispatch(addNewWork(posts));
            },
            deleteNewWork: (id) => {
                dispatch(deleteNewWork(id));
            },
            updateNewWork: (data) => {
                dispatch(updateNewWork(data));
            },
            addNewWorkInPage: (data) => {
                dispatch(addNewWorkInPage(data));
            },
            underWork: (data) => {
                dispatch(underWork(data))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

