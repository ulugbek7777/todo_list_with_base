let initialState = {
    posts: [],
    id: null,
    underWork: false,
    setModal: false,
    deleteNewWorkWithModal: null
};

// localStorage.setItem('data', JSON.stringify(data));
// let raw = localStorage.getItem('data')
// let initialState = JSON.parse(raw);
// console.log(JSON.parse(raw));

const CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW';
const WORK_CHECKED_DISABLED = 'WORK_CHECKED_DISABLED';

const SET_MODAL = 'SET_MODAL';

const ADD_NEW_WORK = 'ADD_NEW_WORK';
const DELETE_NEW_WORK = 'DELETE_NEW_WORK';
const UPDATE_NEW_WORK = 'UPDATE_NEW_WORK';
const ADD_NEW_WORK_IN_PAGE = 'ADD_NEW_WORK_IN_PAGE';
const UNDER_WORK = 'UNDER_WORK';
const ADD_NEW_UNDER_WORK = 'ADD_NEW_UNDER_WORK';
const DELETE_NEW_UNDER_WORK = 'DELETE_NEW_UNDER_WORK';
const UPDATE_NEW_UNDER_WORK = 'UPDATE_NEW_UNDER_WORK';

const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
const DELETE_NEW_COMMENT = 'DELETE_NEW_COMMENT';
const UPDATE_NEW_COMMENT = 'UPDATE_NEW_COMMENT';

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_WORK: {
            let i;
            let checking = true;
            for(i = 0;state.posts.length > i;i++) {
                if(state.posts[i][0][0] == action.posts && state.posts[i][2] == false) {
                    console.log('tru');
                    checking = false;
                }
            }
            if(checking) {
                if(action.posts != "") {
                    let newPost = action.posts;
                    return {
                        ...state,
                        posts: [...state.posts, [newPost, [], false]]
                    };
                }else {
                    alert('siz hech narsa yozmadingiz');
                    return {
                        ...state
                    }
                }
            }else {
                alert('Bunday vazifaa allaqachon kiritilgan');
                return {
                    ...state
                }
            }
        }
        case DELETE_NEW_WORK: {
            let id = action.id;
            state.posts.splice(id, 1);
            return {
                ...state,
                posts: [...state.posts]  
            }
        }
        case UPDATE_NEW_WORK: {
            state.posts[action.data.id][0] = action.data.post;
            return {
                ...state,
                posts: [...state.posts]  
            }
        }
        case ADD_NEW_WORK_IN_PAGE: {
            state.posts[action.data.id] = [action.data.post, action.data.newElement];
            return {
                ...state,
                posts: [...state.posts]  
            }
        }
        case UNDER_WORK: {
            state.id = action.data.id;
            state.underWork = action.data.underWork;
            return {
                ...state
            }
        }
        case ADD_NEW_UNDER_WORK: {
            // state.underWork = !state.underWork;
            if(action.data.newWorkPost) {
                
                state.posts[action.data.id][1].push(action.data.newWorkPost)
                let com = initialState.posts.comment;
                return {
                    ...state,
                }
            } else {
                return {
                    ...state
                }
            }
        }
        case DELETE_NEW_UNDER_WORK: {
            state.posts[action.data.idArray][1].splice(action.data.id, 1);
            return {
                ...state,
                posts: [...state.posts]  
            }
        }
        case UPDATE_NEW_UNDER_WORK: {
            state.posts[action.data.idArray][1][action.data.id] = action.data.newUnderWorkPost;
            return {
                ...state,
                posts: [...state.posts]  
            }
        }

        //comments

        case ADD_NEW_COMMENT: {
            // state.underWork = !state.underWork;
            if(action.data.newWorkPost) {
                state.posts[action.data.id][2].push(action.data.newWorkPost)
                return {
                    ...state,
                }
            } else {
                return {
                    ...state
                }
            }
        }
        case DELETE_NEW_COMMENT: {
            state.posts[action.data.idArray][2].splice(action.data.id, 1);
            return {
                ...state,
                posts: [...state.posts]  
            }
        }
        case UPDATE_NEW_COMMENT: {
            state.posts[action.data.idArray][2][action.data.id] = action.newUnderWorkPost;
            return {
                ...state,
                posts: [...state.posts]  
            }
        }

        case CLOSE_MODAL_WINDOW: {
            state.underWork = !state.underWork;
            return {
                ...state
            }
        }
        case WORK_CHECKED_DISABLED: {
            state.posts[action.id][2] = !state.posts[action.id][2];
            return {
                ...state,
                ...state.posts
            }
        }
        case SET_MODAL: {
            state.setModal = !state.setModal;
            state.deleteNewWorkWithModal = action.p;
            return {
                ...state
            }
        }
        
        default: return state;    
    }     
}

export const addNewWork = (posts) => ({type: ADD_NEW_WORK, posts});
export const deleteNewWork = (id) => ({type: DELETE_NEW_WORK, id});
export const updateNewWork = (data) => ({type: UPDATE_NEW_WORK, data});
export const addNewWorkInPage = (data) => ({type: ADD_NEW_WORK_IN_PAGE, data});
export const underWork = (data) => ({type: UNDER_WORK, data});
export const addNewUnderWork = (data) => ({type: ADD_NEW_UNDER_WORK, data});
export const deleteNewUnderWork = (data) => ({type: DELETE_NEW_UNDER_WORK, data});
export const updateNewUnderWork = (data) => ({type: UPDATE_NEW_UNDER_WORK, data});

export const addNewComment = (data) => ({type: ADD_NEW_COMMENT, data});
export const deleteNewComment = (data) => ({type: DELETE_NEW_COMMENT, data});
export const updateNewComment = (data) => ({type: UPDATE_NEW_COMMENT, data});
export const closeModalWindow = () => ({ type: CLOSE_MODAL_WINDOW })
export const workCheckedDisabled = (id) => ({ type: WORK_CHECKED_DISABLED, id })

export const setModalWindow = (p) => ({ type: SET_MODAL, p })



export default todoReducer;