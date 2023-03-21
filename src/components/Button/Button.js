import React from "react";
import './stryle.csstyle.css';

function Button ({name, onClick}) {
    return (
        <button className="button" onClick={()=>onClick(name)}>
            {name}
        </button>
    )
}

export default Button;
