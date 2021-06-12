let initialState = {
    posts: [['namuna uchun', []]],
    id: null,
    underWork: false
};

const ADD_NEW_WORK = 'ADD_NEW_WORK';
const DELETE_NEW_WORK = 'DELETE_NEW_WORK';
const UPDATE_NEW_WORK = 'UPDATE_NEW_WORK';
const ADD_NEW_WORK_IN_PAGE = 'ADD_NEW_WORK_IN_PAGE';
const UNDER_WORK = 'UNDER_WORK';
const ADD_NEW_UNDER_WORK = 'ADD_NEW_UNDER_WORK';

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_WORK: {
            let newPost = action.posts;
            return {
                ...state,
                posts: [...state.posts, [newPost, []]]
            };
        }
        case DELETE_NEW_WORK: {
            debugger
            let id = action.id;
            state.posts.splice(id, 1);
            return {
                ...state,
                posts: [...state.posts]  
            }
        }
        case UPDATE_NEW_WORK: {
            state.posts[action.data.id] = action.data.post;
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
        default: return state;    
    }     
}

export const addNewWork = (posts) => ({type: ADD_NEW_WORK, posts});
export const deleteNewWork = (id) => ({type: DELETE_NEW_WORK, id});
export const updateNewWork = (data) => ({type: UPDATE_NEW_WORK, data});
export const addNewWorkInPage = (data) => ({type: ADD_NEW_WORK_IN_PAGE, data});
export const underWork = (data) => ({type: UNDER_WORK, data});
export const addNewUnderWork = (data) => ({type: ADD_NEW_UNDER_WORK, data});



export default todoReducer;