import React from 'react';
import s from './ProfileInfo.module.css';
import mainAvatar from './ava-scorpion-mortal-kombat-008.jpg'
import mainBackground from './zakat_na_kube.jpg'
import Preloader from '../../сommon/Preloder/Preloader';
import Jobtrue from './isLookingForAJobTrue.jpg';
import Jobfalse from './isLookingForAJobFalse.jpg';
    const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
        return <div >
            <div><img src={mainBackground} alt='zakat' width='100.1%'/></div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='Ava' />  {/*width="100" height="50"*/}
                <h3>{props.profile.fullName}</h3> {/*Pastor J*/}
                <p>{props.profile.aboutMe}</p>
                <p>Date of Birth: 31 February</p>
                <p>City: London</p>
                <p>Education: BSPU'12</p>
                <img src={props.profile.lookingForAJob === true ? Jobtrue : Jobfalse} alt={'I am looking for a job'} width = '80px' height = '80px' />
                <p>{props.profile.lookingForAJobDescription}</p>
                <ul>
                    <h3>Contacts</h3>
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.website}</li> {/*<p>WebSite: <a href="https://infinity-pizza.dx.am">Infinity-Pizza</a></p>*/}
                    <li>{props.profile.contacts.vk}</li>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.instagram}</li>
                    <li>{props.profile.contacts.youtube}</li>
                    <li>{props.profile.contacts.github}</li>
                    <li>{props.profile.contacts.mainLink}</li>
                </ul>  
            </div>

        </div>
    }

export default ProfileInfo;