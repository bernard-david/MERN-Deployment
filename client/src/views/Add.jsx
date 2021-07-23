import { Link } from '@reach/router';
import React from 'react';
import Form from '../components/Form';

const Add = props => {
    return (
        <div>
            <h1>Add a Pirate</h1>
            <Link to="/pirates">Crew Board</Link>
            <Form/>
        </div>
    )
}

export default Add;