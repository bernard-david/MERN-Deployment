import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const One = props => {
    const [pirate, setPirate] = useState({})
    const [resetAPI, setResetAPI] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${props._id}`)
            .then(res => setPirate(res.data))
            .catch(err => console.log(err))
    }, [resetAPI])

    const changeStatus = (category, status, _id) => {
        let newStatus = !status;
        axios.put(`http://localhost:8000/api/pirates/update/${_id}`, {[category]: newStatus})
            .then(() => setResetAPI(!resetAPI))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>This is the One</h1>
            <Link to="/pirates">Crew Board</Link>
            <div className="container d-flex flex-row justify-content-around align-items-center mb-3 p-3 border">
                <div className="d-flex flex-column">
                    <img src={pirate.image} alt={pirate.name} style={{width: "24rem"}}/>
                    <h2>{`"${pirate.phrase}"`}</h2>
                </div>
                <div className="d-flex flex-column">
                    <h3>About</h3>
                    <div className="text-start">
                        <p>Position: {pirate.position}</p>
                        <p>Treasure Chests: {pirate.chests}</p>
                        <div className="d-flex align-item-center">
                            <p className="me-2">Peg Leg: {
                                pirate.pegLeg ? "Yes" : "No"
                            }</p>
                            {
                                pirate.pegLeg ? <button className="btn btn-danger" name="pegLeg" onClick={(e) => changeStatus(e.target.name, pirate.pegLeg, pirate._id)}>No</button> : <button className="btn btn-success" name="pegLeg" onClick={(e) => changeStatus(e.target.name, pirate.pegLeg, pirate._id)}>Yes</button>
                            }
                        </div>
                        <div className="d-flex align-item-center">
                            <p className="me-2">Eye Patch: {
                                pirate.eyePatch ? "Yes" : "No"
                            }</p>
                            {
                                pirate.eyePatch ? <button className="btn btn-danger" name="eyePatch" onClick={(e) => changeStatus(e.target.name, pirate.eyePatch, pirate._id)}>No</button> : <button className="btn btn-success" name="eyePatch" onClick={(e) => changeStatus(e.target.name, pirate.eyePatch, pirate._id)}>Yes</button>
                            }
                        </div>
                        <div className="d-flex align-item-center">
                            <p className="me-2">Hook Hand: {
                                pirate.hookHand ? "Yes" : "No"
                            }</p>
                            {
                                pirate.hookHand ? <button className="btn btn-danger" name="hookHand" onClick={(e) => changeStatus(e.target.name, pirate.hookHand, pirate._id)}>No</button> : <button className="btn btn-success" name="hookHand" onClick={(e) => changeStatus(e.target.name, pirate.hookHand, pirate._id)}>Yes</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default One;