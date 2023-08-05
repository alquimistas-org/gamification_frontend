export const RowWithIcon = ({type, text, icon}) =>{
    return(
        <div className="nes-badge">
            <span className={type}> <i className={icon}></i><span>{text}</span></span>
        </div>
    )
}