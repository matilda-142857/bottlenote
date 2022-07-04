import React, { useEffect, useState, useContext } from "react";
import dolphin from '../../../context/undefdolphin.png';
import waves from '../../../context/undefwaves.png';
import splash from '../../../context/undefsplash.png';

const TrashLess = () => {

    return(
        <>
        <div className=".note-page">
            <h3 className="undefined-text">
                Delete and Restore notes here...
            </h3>
        <img
            className="undefined-dolphin"
            src= {dolphin}
            alt="undefined-dolphin"
        />
        <img
            className="undefined-wave"
            src= {waves}
            alt="undefined-dolphin"
        />
        <img
            className="undefined-splash"
            src= {splash}
            alt="undefined-splash"
        />
        </div>
    
        </>
    )	
}

export default TrashLess;
