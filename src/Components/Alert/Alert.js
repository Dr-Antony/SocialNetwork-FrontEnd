import React from "react";
import Alert from 'react-bootstrap/Alert';

import style from "./Alert.module.css"


export const AlertError = ({ setShowAlert, errors , alertText}) => {
    const messages = errors.map((val) => {
        return <p>{val.msg}</p>
    })
    return (
        <div className={style.alert_div}>
            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading>{alertText}</Alert.Heading>
                {messages}
            </Alert>
        </div>
    );
}