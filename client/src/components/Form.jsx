import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Form = props => {
    const [myForm, setMyForm] = useState({
        name: "",
        image: "",
        chests: 1,
        phrase: "",
        position: "Captain",
        pegLeg: true,
        eyePatch: true,
        hookHand: true
    });
    const [errors, setErrors] = useState({});

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const checkedHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.checked})
    }

    const submitHandler = e => {
        e.preventDefault();
        e.target.reset();
        axios.post('http://localhost:8000/api/pirates/create', myForm)
            .then(res => {
                if (res.data.error) {
                    console.log("There's an error!");
                    setErrors(res.data.error.errors)
                } else {
                    console.log("No errors here!");
                    navigate("/pirates");
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={submitHandler} className="container text-start">
            <div className="form-group">
                <label>Pirate Name:</label>
                <input type="text" name="name" className="form-control" onChange={onChangeHandler}/>
            </div>
            {
                        errors.name ? <span className="text-danger">{errors.name.message}</span> : ""
            }
            <div className="form-group">
                <label>Image URL:</label>
                <input type="text" name="image" className="form-control" onChange={onChangeHandler}/>
            </div>
            {
                        errors.image ? <span className="text-danger">{errors.image.message}</span> : ""
            }
            <div className="form-group">
                <label># of Treasure Chests:</label>
                <input type="number" name="chests" className="form-control" onChange={onChangeHandler}/>
            </div>
            {
                        errors.chests ? <span className="text-danger">{errors.chests.message}</span> : ""
            }
            <div className="form-group">
                <label>Catch Phrase:</label>
                <input type="text" name="phrase" className="form-control" onChange={onChangeHandler}/>
            </div>
            {
                        errors.phrase ? <span className="text-danger">{errors.phrase.message}</span> : ""
            }
            <div className="form-group">
                <label>Position:</label>
                <select name="position" className="form-select" onChange={onChangeHandler}>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
            </div>
            {
                        errors.position ? <span className="text-danger">{errors.position.message}</span> : ""
            }
            <br />
            <div className="form-group d-flex">
                <div className="form-check me-3">
                    <input className="form-check-input" type="checkbox" checked={myForm.pegLeg} name="pegLeg" id="pegLeg" onChange={checkedHandler}/>
                    <label className="form-check-label" for="pegLeg">
                        Peg Leg
                    </label>
                </div>
                <div className="form-check me-3">
                    <input className="form-check-input" type="checkbox" checked={myForm.eyePatch} name="eyePatch" id="eyePatch" onChange={checkedHandler}/>
                    <label className="form-check-label" for="eyePatch">
                        Eye Patch
                    </label>
                </div>
                <div className="form-check me-3">
                    <input className="form-check-input" type="checkbox" checked={myForm.hookHand} name="hookHand" id="hookHand" onChange={checkedHandler}/>
                    <label className="form-check-label" for="hookHand">
                        Hook Hand
                    </label>
                </div>
            </div>
            <br />
            <button className="btn btn-primary">Add Pirate</button>
        </form>
    )
}

export default Form;