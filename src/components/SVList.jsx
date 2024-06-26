import {useState} from 'react';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';
import { MdManageSearch } from "react-icons/md";


const SVList = (props) => {
	
	const [state,setState] = useState({
		removeIndex:-1,
		editIndex:-1
	})
	
	const [search,setSearch] = useState({
		type:""
	})
	
	const onChange = (event) => {
		setSearch({
			type:event.target.value
		})
	}
	
	const searchByType = () => {
		props.getList("",search.type);
		setSearch({
			type:""
		})
	}
	
	const changeMode = (mode,index) => {
		if(mode === "remove") {
			setState({
				removeIndex:index,
				editIndex:-1
			})
		}
		if(mode === "edit") {
			setState({
				removeIndex:-1,
				editIndex:index
			})
		}
		if(mode === "cancel") {
			setState({
				removeIndex:-1,
				editIndex:-1
			})
		}
	}
	
	const removeItem = (id) => {
		props.removeItem(id);
		changeMode("cancel")
	}
	
	const editItem = (item) => {
		props.editItem(item);
		changeMode("cancel")
	}
	
	let items = props.list.map((item,index) => {
		if(index === state.removeIndex) {
			return(
				<RemoveRow key={item._id} item={item} changeMode={changeMode} removeItem={removeItem}/>
			)
		}
		if(index === state.editIndex) {
			return(
				<EditRow key={item._id} item={item} changeMode={changeMode} editItem={editItem}/>
			)
		}
		return(
			<Row key={item._id} item={item} changeMode={changeMode} index={index}/>
		)
	})
	return(
	<div>
		<div style={{margin:"auto",textAlign:"left",color: "whitesmoke",marginBottom: "20px", marginRight: "5px"}}>
			<label htmlFor="search">Search by Meat </label>
			<input type="text"
					name="search"
					id="search"
					onChange={onChange}
					value={search.type}
					style={{ marginLeft: "10px" }}/>
			<MdManageSearch size={40} onClick={searchByType}></MdManageSearch>
		</div>
		<table className="table table-striped">
			<thead>
				<tr>
					<th>Meat type</th>
					<th>Weight</th>
					<th>Time</th>
					<th>Temperature</th>
					<th>Remove</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
			{items}
			</tbody>
		</table>
	</div>
	)
}

export default SVList