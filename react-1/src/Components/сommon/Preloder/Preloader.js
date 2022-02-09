import preloader from "../../../assets/Images/Preloader.gif";
import React from "react";

let Preloader = (Props) => {
   return <div style={{backgroundColor: 'white'}}>
        <img src={preloader}/>
    </div>
}

export default Preloader;