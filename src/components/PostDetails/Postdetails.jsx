import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Post details of: {id}</h3>
            <h4>Title: {title}</h4>
            <p>Deatil: {body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default Postdetails;