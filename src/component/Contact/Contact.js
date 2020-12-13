import React, { useEffect, useState } from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoMdCloudDone } from 'react-icons/io';



const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const [success, setSuccess] = useState(true);

                                    // watch,
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => {
        fetch('https://ancient-cliffs-08982.herokuapp.com/getGmail', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => console.log(data));

        setSuccess(false);
    }


    const handleReturn = () => {
        setSuccess(true)
    }






    return (
        <div id="contact-section" className="container skill contact-section">
            <div className="back-line d-flex align-items-center skill-title">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">Contact</p>
                </div>
            </div>


            <div className="row">
                <div className="col-12 col-md-6">
                    <article className="contact-me">
                        <p>
                            I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.
                        </p>

                        <a href="mailto:shakilatrai5@gmail.com" >Contact Me</a>
                    </article>

                </div>
                <div className="col-12 col-md-6">
                    <div className="contact-add">
                        <h3>Email</h3>
                        <p>shakilatrai5@gmail.com (Recommended)</p>
                        <h3>Skype</h3>
                        <p>shakil.cse.ieee</p>
                        <h3>Social</h3>
                        <p>Facebook - cseshakil</p>
                        <h3>Address</h3>
                        <address>
                            <p>Nawaber Tambu, Atrai, Naogaon, Bangladesh-6596</p>
                        </address>
                    </div>
                </div>

                <div className="col-12 text-center contact-or">
                    <h4>Or</h4>
                </div>
            </div>
            <div data-aos="flip-left" className="row d-flex justify-content-center ">
                {
                    success ?
                        <div className="col-12 col-sm-12 col-md-6">
                            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

                                <input className="form-control" name="name" ref={register({ required: true })} placeholder="Your Name" />
                                {errors.name && <span className="error">Name is required</span>}
                                <br />
                                <input className="form-control" name="email" ref={register({ required: true })} placeholder="Your Email" />
                                {errors.email && <span className="error">Email is required</span>}
                                <br />
                                <input className="form-control" name="subject" ref={register({ required: true })} placeholder="Subject" />
                                {errors.subject && <span className="error">Subject is required</span>}
                                <br />
                                <textarea className="form-control" name="message" ref={register({ required: true })} placeholder="Enter Your Message" />
                                {errors.message && <span className="error">Your Text is required</span>}
                                <br />
                                <input className="form-control btn btn-success" type="submit" value="Submit" />
                            </form>
                        </div>
                        :
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="Sucess-div">
                                <h1 className="d-flex justify-content-center align-items-center">Thanks!</h1>
                                <h2 className="d-flex justify-content-center align-items-center"><IoMdCloudDone></IoMdCloudDone></h2>
                                <h1 className="d-flex justify-content-center align-items-center">Message Received!</h1>
                                <h1 className="d-flex justify-content-center align-items-center"><span className="success-heart">&hearts;</span></h1>
                                <button onClick={handleReturn} className="btn btn-success my-2 my-sm-0 btn-margin">Return</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Contact;