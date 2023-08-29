

import "nes.css/css/nes.min.css";
export const Button = ({onAction, type , text })=>{
    return(
        <button className={`${type} `} onClick={onAction}>
            {text}
        </button>
    )
}