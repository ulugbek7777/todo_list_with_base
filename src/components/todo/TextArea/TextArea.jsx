import React from 'react';
import s from './TextArea.module.css'

export function TextArea({input, meta, ...props}) {
    const hasError = meta.touched && meta.error;
    console.log()
    return (
        <div style={{display: 'inline-block'}} >
            <input placeholder={hasError ? "Write something" : "Add new tasks"} {...input} {...props} className={s.addElementInput + ' ' + (hasError ? s.error : '')}/>
            {/* { hasError && <span>"some error"</span> } */}
        </div>
    )
}