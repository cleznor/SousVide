import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SVForm = (props) => {

    const navigate = useNavigate();

    const [state, setState] = useState({
        type: "",
        count: 0,
        price: 0,
        temperature: 0
    });

    const onChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const item = { ...state };
        props.addItem(item);
        setState({
            type: "",
            count: 0,
            price: 0,
            temperature: 0
        });
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4"style={{ color: "white" }} >Add New Item</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="type" style={{ color: "white" }}>Type of Meat</label>
                    <select
                        name="type"
                        id="type"
                        className="form-select"
                        onChange={onChange}
                        value={state.type}
                    >
                        <option value="">Select type</option>
                        <option value="Beef">Beef</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Salmon">Salmon</option>
                        <option value="Pork">Pork</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="count" style={{ color: "white" }}>Weight in kg</label>
                    <input
                        type="number"
                        name="count"
                        id="count"
                        step="0.5"
                        className="form-control"
                        onChange={onChange}
                        value={state.count}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="temperature" style={{ color: "white" }}>Temperature</label>
                    <input
                        type="number"
                        name="temperature"
                        id="temperature"
                        className="form-control"
                        onChange={onChange}
                        value={state.temperature}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="price" style={{ color: "white" }}>Time in hours</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        step="0.5"
                        className="form-control"
                        onChange={onChange}
                        value={state.price}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default SVForm;
