import React from 'react';

export default function Contact() {
    return (
        <div className="container mx-auto my-5 rounded">
            <h2>Contact Me!</h2>
            <hr />
            <form className="pb-2">
                <div className="form-group">
                    <label for="inputName1">Name</label>
                    <input type="name" className="form-control" id="inputName1" aria-describedby="nameHelp"
                        placeholder="Insert Name Here" />
                </div>
                <div className="form-group">
                    <label for="inputEmail1">Email address</label>
                    <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"
                        placeholder="example@website.com" />
                </div>
                <div className="form-group">
                    <label for="inputTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div className="">
                    <div className="btn btn-dark btn-block">SEND</div>
                </div>
            </form>
        </div>
    )
}