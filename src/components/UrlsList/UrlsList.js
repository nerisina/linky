import React from 'react';

const UrlsList = (props) => {
    return (
        <div>
            <p><strong>Short Url: </strong> <a href={props.url}>{props.shortUrl}</a></p>
            <p><strong>Url: </strong> {props.url}</p>
            <p><strong>Slug: </strong>{props.slug}</p>
            { props.expired ? <p><strong>Expires on:</strong>Day</p> : <button className="btn btn__delete" onClick={(e) => props.delete(props.slug, e)}>Delete</button> }
        </div>
    )
}

export default UrlsList;
