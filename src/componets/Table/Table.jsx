


export const Table = ({heads,data}) =>{
    return(
    <div className="nes-table-responsive">
        <table className="nes-table is-bordered is-centered">
            <thead>
                <tr>
                    {heads.map((title, key)=>{
                        return(
                            <th key={key}>{title}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            {Object.keys(val).map((zelda, key1)=>{
                                return(<th key={key1}>{val[zelda]}</th>)
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>

    )
}