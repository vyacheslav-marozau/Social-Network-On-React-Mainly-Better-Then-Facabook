import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import downLoadButton from './DownloadButton.png'
import mainBackground from './zakat_na_kube.jpg'
import Preloader from './../../common/Preloder/Preloader';
import Jobtrue from './isLookingForAJobTrue.jpg';
import Jobfalse from './isLookingForAJobFalse.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./DefaultGirlAvatar.png";
import Context from "react-redux/lib/components/Context";
import ProfileDataForm from "./ProfileDataForm";
    const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
        let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader />
    }
        const onMainPhotoSelected = (e) => {
        // console.log("e.target.files[0] = ", e.target.files[0]);
            debugger;
            if (e.target.files[0]) {
                savePhoto(e.target.files[0]);
            }
        }
        const onSubmit = (formData) => {
            saveProfile(formData)
            .then(() => {
                setEditMode(false);
            })
        }
        return <div>
            {/*<div><img src={mainBackground} alt='zakat' width='100.1%'/></div>*/}
            <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt='Ava'/>
            <br></br>
            {isOwner && <input className={s.avatarBrowsePhoto} type={"file"} onChange={onMainPhotoSelected} />}
            <br></br>
            <br></br>
            <br></br>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {editMode
                ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}  />
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>}
        </div>
    }
    const ProfileData = ({profile, isOwner, goToEditMode}) => {
        return <div className={s.descriptionBlock}>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div>
                <b>{profile.fullName}</b> <span> - - - Full Name</span>
            </div>
            <div>
                <b>About Me: </b> {profile.aboutMe}
            </div>
            <p>Date of Birth: 31 February</p>
            <p>City: London</p>
            <p>Education: BSPU'12</p>
            <div>
                <b>Looking For A Job:</b>  <span>{profile.lookingForAJob ? "Yes" : "No" }</span>
            </div>
            <br></br>
            <img src={profile.lookingForAJob === true ? Jobtrue : Jobfalse} title={profile.lookingForAJob === true ? 'YES' : 'NO'} alt={'I am looking for a job'} width = '80px' height = '80px' />
            {!profile.lookingForAJob &&
            <div>
                <b>My professional skills</b> : <span>{profile.lookingForAJobDescription}</span>
            </div>}
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>

            {/*<p>WebSite: <a href="https://infinity-pizza.dx.am">Infinity-Pizza</a></p>*/}
        </div>

    }
    const Contact = ({contactTitle, contactValue}) => {
        return <div className={s.contact}><b>{contactTitle}</b> : {contactValue}</div>
    }
export default ProfileInfo;