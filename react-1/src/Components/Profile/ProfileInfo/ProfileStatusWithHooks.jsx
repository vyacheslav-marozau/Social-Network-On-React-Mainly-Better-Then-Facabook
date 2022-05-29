import React, {createRef, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
/*let arr = [0, () => {}];
let [a, setA] = arr;*/
const ProfileStatusWithHooks = (props) =>
    {
        debugger;
        let [editMode, setEditMode] = useState(false);
        let [status, setStatus] = useState(props.status);
        useEffect(() => {
            debugger;
            setStatus(props.status);
        }, [props.status]);
        const activateEditMode = () => {
            setEditMode(true);
        }
        const deActivateEditMode = () => {
            setEditMode(false);
            props.updateStatus(status);
        }
        const onStatusChange = (e) => {
            setStatus(e.currentTarget.value);
        }
        return (
            <div>
                {!editMode &&
                    <div>

                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
                }
                {editMode &&
                <div>
                        <input onChange={onStatusChange} onBlur={deActivateEditMode} value={status} autoFocus={true}/>
                    </div>
                }
            </div>
        )
    }


// }

export default ProfileStatusWithHooks;