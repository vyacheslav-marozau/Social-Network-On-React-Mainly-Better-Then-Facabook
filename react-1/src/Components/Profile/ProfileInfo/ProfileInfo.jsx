import React from 'react';
import s from './ProfileInfo.module.css';
//import mainAvatar from './ava-scorpion-mortal-kombat-008.jpg'
import mainBackground from './zakat_na_kube.jpg'
import Preloader from './../../common/Preloder/Preloader';
import Jobtrue from './isLookingForAJobTrue.jpg';
import Jobfalse from './isLookingForAJobFalse.jpg';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
    const ProfileInfo = ({profile, status, updateStatus, }) => {
    if (!profile) {
        return <Preloader />
    }
        return <div >
            {/*<div><img src={mainBackground} alt='zakat' width='100.1%'/></div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt='Ava' />  {/*width="100" height="50"*/}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <h3>{profile.fullName}</h3> {/*Pastor J*/}
                <p>{profile.aboutMe}</p>
                <p>Date of Birth: 31 February</p>
                <p>City: London</p>
                <p>Education: BSPU'12</p>
                <img src={profile.lookingForAJob === true ? Jobtrue : Jobfalse} alt={'I am looking for a job'} width = '80px' height = '80px' />
                <p>{profile.lookingForAJobDescription}</p>
                <ul>
                    <h3>Contacts</h3>
                    <li>{profile.contacts.facebook}</li>
                    <li>{profile.contacts.website}</li> {/*<p>WebSite: <a href="https://infinity-pizza.dx.am">Infinity-Pizza</a></p>*/}
                    <li>{profile.contacts.vk}</li>
                    <li>{profile.contacts.twitter}</li>
                    <li>{profile.contacts.instagram}</li>
                    <li>{profile.contacts.youtube}</li>
                    <li>{profile.contacts.github}</li>
                    <li>{profile.contacts.mainLink}</li>
                </ul>  
            </div>

        </div>
    }

export default ProfileInfo;