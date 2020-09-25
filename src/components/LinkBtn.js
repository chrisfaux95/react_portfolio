import React from 'react';

export default function LinkBtn(props) {
    return (
        <a className={"btn btn-dark " + props.className} href={props.src}>
            {props.name}
        </a>
    )
}