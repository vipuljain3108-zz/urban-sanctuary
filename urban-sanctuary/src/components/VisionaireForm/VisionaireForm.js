import React, { useState } from "react";
import BeComeButton from '../../components/BeComeButton/BeComeButton';
import './VisionaireForm.scss';
const VisionaireForm =()=> {
    // password eyes icons toggle
    const [isPasswordShow, toggleIcon]= useState();

  return (
    <>
      <div className="form-section">
                        <h1>BECOME A VISIONAIRE</h1>
                         <BeComeButton/>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label for="inputName">Name</label>
                                    <input type="text" className="form-control" id="inputName" placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail">Email<span>*</span></label>
                                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label for="inputPassword">Password<span>*</span></label>
                                    <div className="eye-password">
                                        <input type="password" className="form-control" id="inputPassword" placeholder=""/>
                                        <span className="input-group-addon" id="password">
                                            <i className="fa fa-eye" aria-hidden="true" id="togglePassword"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="conInputPassword">Confirm Password<span>*</span></label>
                                    <div className="eye-password">
                                        <input type={(isPasswordShow?'text':'password')} className="form-control" id="conInputPassword" placeholder=""/>
                                        <span className="input-group-addon" onClick={() => toggleIcon(!isPasswordShow)}>
                                            <i className="fa fa-eye"className={`fa ${isPasswordShow? 'fa-eye':'fa-eye-slash'}`} aria-hidden="true" id="ctogglePassword"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="termsConditions"/>
                                    <label for="termsConditions">I agree with terms and conditions </label>
                                </div>
                                <div className="sub-btn">
                                    <button type="submit" className="btn">SIGN UP</button>
                                </div>
                            </form>
                        </div>

                    </div>         
    </>
  );
}

export default VisionaireForm;
