import React, { useState } from 'react'
import Right from "../../assets/images/mainIcons/Right.svg";
import { useForm, ValidationError } from '@formspree/react';

const SubscribeModal = (props) => {
    const { toogle, showModal } = props;
    const [emailText, setEmailtext] = useState("")
    const [state, handleSubmit] = useForm("mvodjprj");
    if (state.succeeded) {
        return <p style={{ position: "absolute", left: "33.33%", right: "33.33%", textAlign: "center", bottom: "280px" }}
        >Thanks for joining!</p>;
    }
    const emailHandler = (e) => {
        setEmailtext(e.target.value);
    };
    return (<>
        {showModal && (
            <>
                <div onClick={toogle} className="modal-overlay"></div>
                <form onSubmit={handleSubmit} className="modal-wrapper-subscribe">
                    <div className="modal-header">
                        <p>Subscribe</p>
                        <span onClick={toogle}>X</span>
                    </div>
                    <div className="modal-body join-pool-wrapper">
                        <div className="from-wrapper">
                            <p>Email</p>
                            <div className="from">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={emailText}
                                    onChange={emailHandler}
                                    required
                                    placeholder="enter your email"

                                />


                            </div>
                            {/* <p className="error-msg">{errorMsg}</p> */}
                        </div>


                    </div>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    {/* <textarea
                        id="message"
                        name="message"
                    /> */}
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <div className="modal-footer">
                        <button type="submit" disabled={state.submitting}
                            // onClick={continueBtnHandler}
                            className="btn-connect btn-connect-with-Arror"
                        >
                            Submit
                            <img src={Right} alt="rightArrow"></img>
                        </button>
                    </div>
                </form>
            </>
        )}
    </>)
}

export default SubscribeModal
