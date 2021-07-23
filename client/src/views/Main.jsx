import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllPirates from '../components/AllPirates';

const Main = props => {
    const [pirates, setPirates] = useState(null);
    const [resetAPI, setResetAPI] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => setPirates(res.data))
            .catch(err => console.log(err))
    }, [resetAPI])

    const update = () => {
        setResetAPI(!resetAPI);
    }

    return (
        <div>
            <h1>This is the Main</h1>
            <Link to="/pirate/create">Add Pirate</Link>
            {
                pirates ?
                pirates.map((pirate) => {
                    return <AllPirates pirate={pirate} update={update}/> 
                }) : ""
            }
        </div>
    )
}

export default Main;