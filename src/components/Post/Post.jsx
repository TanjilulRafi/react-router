import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post;

    const navigate = useNavigate();

    const userStyle ={
        border : '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={userStyle}>
            <h4>Post of Id: {id}</h4>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <button onClick={handleShowDetail}>Click to see detail</button>
        </div>
    );
};

export default Post;