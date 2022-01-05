import React from 'react';
import s from './ProfileInfo.module.css';
import mainAvatar from './ava-scorpion-mortal-kombat-008.jpg'
import mainBackground from './zakat_na_kube.jpg'

    const ProfileInfo = () => {
        return <div >
            <div><img src={mainBackground} alt='zakat' width='100.1%'/></div>
            <div className={s.descriptionBlock}>
                <img src={mainAvatar} alt='Ava' width="100" height="50"/>
                <h3>Pastor J</h3>
                <p>Date of Birth: 31 February</p>
                <p>City: London</p>
                <p>Education: BSPU'12</p>
                <p>WebSite: <a href="https://infinity-pizza.dx.am">Infinity-Pizza</a></p>
            </div>

        </div>
    }

export default ProfileInfo;