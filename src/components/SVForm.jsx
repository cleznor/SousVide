import { useState } from 'react';

const SVForm = (props) => {
    const [state, setState] = useState({
        type: "",
        count: 0,
        price: 0,
        temperature: 0
    });

    const onChange = (event) => {
        setState((state) => ({
            ...state,
            [event.target.name]: event.target.value
        }));
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
    };

    return (
        <div>
            <form className="m-3" onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="type" style={{ color: "white" }}>Type of Meat</label>
                    <select
                        name="type"
                        id="type"
                        className="form-control"
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
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <input type="submit" value="Add" className="btn btn-secondary" />
            </form>
        </div>
    );
}

export default SVForm;
