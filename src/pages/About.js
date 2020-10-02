import React from 'react';
import LinkBtn from '../components/LinkBtn';

export default function Contact() {
    return (
        <div className="container mx-auto my-5 rounded">
            <div>
                <div className="page-header">
                    <h1>About Me:</h1>
                    <hr />
                </div>
                <div className="row py-4 mx-1">
                    <div className="col-md-3">
                        <img src={process.env.PUBLIC_URL + "assets/images/selfie"} alt="Chris Faux" className="img-thumbnail" />
                    </div>
                    <div className="col-md-8 mr-1">
                        <p>
                            Chris Faux: A 25 year old programmer living in the Baltimore area. Knowledgable in HTML, CSS,
                            Javascript, Java, and Python.  Has experience with both MYSQL and MongoDB.
                        </p>
                        <p>
                            Email: chrisfaux95@gmail.com
                        </p>
                        <p>
                            <LinkBtn src="https://github.com/chrisfaux95" name="Github"/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}