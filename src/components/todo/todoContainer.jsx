import React from 'react';
import {connect} from "react-redux";
import Todo from './todo';

let TodoContainer = () => {
    return (
        <div>
            <Todo />
        </div>
    )
}


let mapStateToProps = (state) => {
    
    return {
        posts: 'dnvlksdnvkl'
    }
}
let mapDispatchToProps = (dispatch) => {
    return null
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);