import React from 'react';

const Row = (props) => {
    return (
        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <td>{props.item.type}</td>
            <td>{props.item.count} kg</td>
            <td>{props.item.price} hours</td>
            <td>{props.item.temperature} °C</td>
            <td>
                <button className="btn btn-danger me-2" onClick={() => props.changeMode("remove", props.index)}>
                    Remove
                </button>
            </td>
            <td>
                <button className="btn btn-secondary" onClick={() => props.changeMode("edit", props.index)}>
                    Edit
                </button>
            </td>
        </tr>
    );
}

export default Row;