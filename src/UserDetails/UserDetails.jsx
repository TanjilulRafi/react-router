import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();

    return (
        <div>
            <h2>Deatil about user: {user.name}</h2>
            <p>Website: {user.website}</p>

        </div>
    );
};

export default UserDetails;