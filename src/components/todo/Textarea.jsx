import React, { useEffect, useRef, useState} from "react";
import s from './todo.module.css';

const AutoHeightTextarea = ({...etc }) => {
    const textareaRef = useRef(null);
    const [currentValue, setCurrentValue ] = useState("");// you can manage data with it
    const chng = () => {
        console.log('yo');
    }
    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [currentValue]);

    return (
        <textarea className={s.textAstyle} ref={textareaRef} {...etc} value={currentValue} 
        onBlur={chng}
            onChange={e => setCurrentValue(e.currentTarget.value)
            }
        />
    );
};

export default AutoHeightTextarea;