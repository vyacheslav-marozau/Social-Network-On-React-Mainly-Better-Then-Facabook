import React from "react";
import styles from "./FormsControl.module.css";
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";
const FormControl = ({input, meta: {touched, error}, children, element}) => {
    const hasError = touched && error;
    //debugger;
    return (<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
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
export const createField = (placeholder, name, validators, component, props={}, label='') =>
    (
        <div>
            <Field label='email' placeholder={placeholder} name={name} component={component} validate={validators} {...props} label={label}/>
        </div>
    )

