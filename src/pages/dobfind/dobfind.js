import React, {useState} from "react";
import Button from "../../components/Button/Button";
import {Form} from 'react-bootstrap';
import "./style.css";

import lankaNic from "lanka-nic";
function DobFind () {

    const [nic, setNic] = useState('');
    const [dob,  setDob] = useState('');
    const [gender, setGender] = useState('');


    const search = ()  => {
        let {dateOfBirth ,gender}=lankaNic.getInfoFromNIC(nic);
        setGender(gender);
        setDob(dateOfBirth);
        console.log(dateOfBirth+"----"+gender)
        // console.log(new Date().toISOString().slice(0, 10));
    }

    return (
        <div>
            <div className="dob">
                <div className="search">
                    <input type="NIC" value={nic} placeholder="NIC Number" onChange={(v)=> setNic(v.target.value)}/>
                </div>
                <div className="search">
                    <Button name={'Search'} onClick={() => search()}/ >
                </div>
                <div className="flex">
                    <Form.Label> DOB        : </Form.Label>
                    <Form.Control  value={dob} type="DOB" placeholder="DOB"/>
                </div>
                <div className="flex">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control type="Gender" value={gender} placeholder="Gender is"/>
                </div>
            </div>
        </div>
)
}

export default DobFind;
