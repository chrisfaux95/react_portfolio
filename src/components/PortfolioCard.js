import React from 'react';
import LinkBtn from './LinkBtn';

export default function PortfolioCard(props) {
    return (
        <div className="card">
            <CardImg item={props.item} />
            <CardBody item={props.item} />
            <CardFooter item={props.item} />
        </div>
    )
}


function CardImg(props) {
    // console.log(props.item.image.src)
    return (
        <img className="card-img-top"
            alt={props.item.name}
            src={`${process.env.PUBLIC_URL}/assets/images/{props.item.image.src}`}
        />
    )
}

function CardBody(props) {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p>{props.item.description}</p>
        </div>
    )
}

function CardFooter(props) {
    return (
        <div className="card-footer">
            {props.item.links.map(i => {
                return (<LinkBtn
                    name={i.name}
                    src={i.src} />)
            })}
        </div>
    )
}