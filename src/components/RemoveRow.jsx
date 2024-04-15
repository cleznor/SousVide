import { AiFillDelete } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";


const RemoveRow = (props) => {

	return(
		<tr>
			<td>{props.item.type}</td>
			<td>{props.item.count} Kg</td>
			<td>{props.item.price} h</td>
			<td>{props.item.temperature}°C</td>
			<td><FcCancel size={20}
				onClick={() => props.changeMode("cancel",0)}>Cancel</FcCancel></td>
			<td><AiFillDelete size={20}
				onClick={() => props.removeItem(props.item._id)}>Confirm</AiFillDelete></td>
		</tr>
	)
}

export default RemoveRow;