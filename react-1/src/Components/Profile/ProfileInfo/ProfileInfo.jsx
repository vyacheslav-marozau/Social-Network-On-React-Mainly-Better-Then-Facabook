import React from 'react';
import s from './ProfileInfo.module.css';

    const ProfileInfo = () => {
        return <div >
            <div><img
                 src='https://lh4.googleusercontent.com/-Bc29dswS9wc/VSckSkHyNRI/AAAAAAAAEQ0/rwnhBfrZAqA/w993-h665-no/DSC_0585.JPG'
                alt='zakat' width='100.1%'/></div>

            <div className={s.descriptionBlock}>
                <img src={'ava-scorpion-mortal-kombat-008.jpg'} alt='ava' /* width="100" height="50"  *//>
                <h3>Pastor J</h3>
                <p>Date of Birth: 31 February</p>
                <p>City: London</p>
                <p>Education: BSPU'12</p>
                <p>WebSite: <a href="https://infinity-pizza.dx.am">Infinity-Pizza</a></p>
            </div>

        </div>
    }

export default ProfileInfo;