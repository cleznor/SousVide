import { AiFillDelete } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";


const RemoveRow = (props) => {

	return(
		<tr>
			<td>{props.item.type}</td>
			<td>{props.item.count}</td>
			<td>{props.item.price}</td>
			<td>{props.item.temperature}</td>
			<td><FcCancel
				onClick={() => props.changeMode("cancel",0)}>Cancel</FcCancel></td>
			<td><AiFillDelete
				onClick={() => props.removeItem(props.item._id)}>Confirm</AiFillDelete></td>
		</tr>
	)
}

export default RemoveRow;