import React, { useEffect } from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";
import Aos from "aos";
import "aos/dist/aos.css";


const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div id="contact-section" className="container skill">
            <div className="back-line d-flex align-items-center skill-title">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">Contact</p>
                </div>
            </div>
            <div data-aos="flip-left" className="row d-flex justify-content-center ">
                <div className="col-md-6">
                    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control" name="name" ref={register({ required: true })} placeholder="Your Name" />
                        {errors.name && <span className="error">Name is required</span>}
                        <br />
                        <input className="form-control" name="email" ref={register({ required: true })} placeholder="Your Email" />
                        {errors.email && <span className="error">Email is required</span>}
                        <br />
                        <textarea className="form-control" name="message" ref={register({ required: true })} placeholder="Enter Your Message" />
                        {errors.message && <span className="error">Your Text is required</span>}
                        <br />
                        <input className="form-control btn btn-success" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;