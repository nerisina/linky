import React from 'react';
import './UrlsList.scss';

const UrlsList = (props) => {
    return (
        <div className='urls__list'>
            <h3><a href={props.url}>{props.shortUrl}</a></h3>
            <p><strong>Url: </strong> {props.url}</p>
            <p><strong>Slug: </strong>{props.slug}</p>
            { props.expired ? <p><strong>Expires on:</strong>Day</p> : <button className="btn btn__delete" onClick={(e) => props.delete(props.slug, e)}>Delete</button> }
        </div>
    )
}

export default UrlsList;
