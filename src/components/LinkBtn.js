import React from 'react';

export default function LinkBtn(props) {
    return (
        <a className="btn btn-dark" href={props.src}>
            {props.name}
        </a>
    )
}