import { AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";


const Row = (props) => {

	return(
		<tr>
			<td>{props.item.type}</td>
			<td>{props.item.count}</td>
			<td>{props.item.price}</td>
			<td>{props.item.temperature}</td>
			<td><AiFillDelete
				onClick={() => props.changeMode("remove",props.index)}>Remove</AiFillDelete></td>
			<td><BiSolidEdit
				onClick={() => props.changeMode("edit",props.index)}>Edit</BiSolidEdit></td>
		</tr>
	)
}

export default Row;