import "./users.css"
const TableUser=(props)=>
{

return(
    <>
                <tr className="userTr" style={{marginBottom:"5px"}} onClick={props.showInfo}>
                    <td>{props.code}</td>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.phone}</td>
                    <td>{props.address}</td>
                    <i className="fas fa-trash" onClick={props.deleteItem}> delete</i>
                </tr>
                
    </>

    )
}
export default TableUser