import useAction from './hooks/useAction';
import SVForm from './components/SVForm';
import SVList from './components/SVList';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import {Routes,Route,Navigate} from 'react-router-dom';
import Background from './components/Background/Background';


function App() {

	const {state,addItem,removeItem,editItem,register,login,logout,setError,getList} = useAction();


	let message = <></>
	if(state.loading) {
		message = <h4 style={{ color: 'white' }}>Loading ...</h4>
	}
	if(state.error) {
		message = <h4 style={{ color: 'white' }}>{state.error}</h4>
	}
	if(state.isLogged) {
		return (
			<>
				<Navbar logout={logout} isLogged={state.isLogged} user={state.user}/>
				<div style={{height:30,textAlign:"center"}}>
					{message}
				</div>
				<Routes>
					<Route path="/" element={<SVList list={state.list} getList={getList} removeItem={removeItem} editItem={editItem}/>}/>
					<Route path="/form" element={<SVForm addItem={addItem}/>}/>
					<Route path="*" element={<Navigate to="/"/>}/>
				</Routes>
				<Background/>
			</>
		)
	} else {
		return (
			<>
				<Navbar logout={logout} isLogged={state.isLogged} user={state.user}/>
				<div style={{height:30,textAlign:"center"}}>
					{message}
				</div>
				<Routes>
					<Route path="/" element={<LoginPage login={login} register={register} setError={setError}/>}/>
					<Route path="*" element={<Navigate to="/"/>}/>
				</Routes>
				<Background/>
			</>
		)
	}
}

export default App