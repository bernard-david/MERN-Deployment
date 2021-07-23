import { Link } from '@reach/router';
import React from 'react';
import axios from 'axios';

const AllPirates = props => {
    const {pirate} = props;

    const deletePirate = _id => {
        axios.delete(`http://localhost:8000/api/pirates/delete/${_id}`)
            .then(() => props.update())
            .catch(err => console.log(err))
    }

    return (
        <div className="container d-flex justify-content-between align-items-center mb-3 p-3 border">
            <img src={pirate.image} alt={pirate.name} style={{width: "18rem"}} className="me-3"/>
            <div>
                <h5>{pirate.name}</h5>
                <div className="d-flex">
                    <Link to={`/pirate/${pirate._id}`}><button className="btn btn-info me-3">View Pirate</button></Link>
                    <button className="btn btn-danger me-3" onClick={() => deletePirate(pirate._id)}>Delete Pirate</button>
                </div>
            </div>
        </div>
    )
}

export default AllPirates;