import { AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";


const Row = (props) => {

	return(
		<tr>
			<td>{props.item.type}</td>
			<td>{props.item.count} Kg</td>
			<td>{props.item.price} h</td>
			<td>{props.item.temperature}°C</td>
			<td><AiFillDelete
				onClick={() => props.changeMode("remove",props.index)}>Remove</AiFillDelete></td>
			<td><BiSolidEdit
				onClick={() => props.changeMode("edit",props.index)}>Edit</BiSolidEdit></td>
		</tr>
	)
}

export default Row;