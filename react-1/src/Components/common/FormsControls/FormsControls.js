import React from "react";
import styles from "./FormsControl.module.css";
const FormControl = ({input, meta, child, element, ...props}) => {
    const hasError = meta.touched && meta.error;
    //debugger;
    return (<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, child, element, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...props}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, element, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...props}/></FormControl>
}